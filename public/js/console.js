let userAgent = navigator.userAgent;
(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

            let e = new Error();

            if (!e.stack) {
                try {
      
                throw e;
                } catch (e) {
            if (!e.stack) {
            }
        }
    }
        let functionName;
        let functionLine;

        if(userAgent.toLowerCase().includes("chrome")){
            let stack = e.stack.toString().split(/\r\n|\n/);
            let splitStack = stack.toString().split(",")[2].trim();
            functionName = splitStack.split(" ")[1];
            functionLine = "CodeJS.js"+stack.toString().split(",")[3].trim().replaceAll(")", "");
        }
        else if(userAgent.toLowerCase().includes("firefox")){
            let stack = e.stack.toString().split(/\r\n|\n/);
            let splitStack = stack.toString().split(",")[1];
            functionName =  splitStack.split("@")[0];
            let logLine =  splitStack.split(" ");
            functionLine = logLine[logLine.length-1].replaceAll("eval", "CodeJS.js");
        }
        else if(userAgent.toLowerCase().includes("safari") && !userAgent.toLowerCase().includes("chrome")){
            let stack = e.stack.toString().split(/\r\n|\n/);
            functionName =  stack[1];
            functionLine =  "CodeJS.js "+stack[2].split("@")[0];
        }
   
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];

            output += "<span class=\"log-" + (typeof arg) + "\">"; `<span class="log-error"></span>&nbsp;`
            if(arg == undefined || arg == null){
                output += arg
            }
            else if(arg.toString().startsWith("[object Map]")){
                output += JSON.stringify(Object.fromEntries(arg))
            }
            else if (
                typeof arg === "object" && (JSON || {}).stringify ? JSON.stringify(arg) : arg
            ) {
                output += JSON.stringify(arg);
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }
        logger.innerHTML += `<span class="logElementWrapper"> <span class="logDataSpan">${output}</span>    <span>at  ${functionName.replaceAll("eval", "anonymous").replaceAll("/<", "")} ${functionLine}</span></span>  <br>`;
        console.old.apply(undefined, arguments);
    };
})(window.parent.document.getElementById("logger"));
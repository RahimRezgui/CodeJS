/*(function (logger) {
  const originalConsoleLog = console.log;

  console.log = function () {
    let output = "";
    let functionName = "Unknown";
    let functionLine = "Unknown";

    try {
      const error = new Error();
      const stackTrace = error.stack.toString();

      // Regular expression to match function names and line numbers
      const regex = /at (.+) \((.+):(\d+):(\d+)\)/g;
      const match = regex.exec(stackTrace);

      if (match) {
        functionName = match[1];
        functionLine = match[2] + ":" + match[3];
      }
    } catch (e) {
      // Handle errors during stack trace parsing
      console.error("Error parsing stack trace:", e);
    }

    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      output += `<span class="log-${typeof arg}">`;
      if (arg === undefined || arg === null) {
        output += arg;
      } else if (typeof arg === "object" && arg !== null) {
        output += JSON.stringify(arg, null, 2);
      } else {
        output += arg;
      }
      output += "</span>&nbsp;";
    }

    logger.innerHTML += `<span class="logElementWrapper"> <span class="logDataSpan">${output}</span> <span>at ${functionName} ${functionLine}</span></span> <br>`;

    originalConsoleLog.apply(console, arguments);
  };
})(window.parent.document.getElementById("logger"));*/



(function (logger) {
  const originalConsoleLog = console.log;

  console.log = function () {
    let output = '';
    let functionName = 'Unknown';
    let functionLine = 'Unknown';

    try {
      const error = new Error();
      const stackTrace = error.stack.toString().split('\\n').slice(2);
      const callerLine = stackLines[0];

      const regex = /at (.+?) \((.+):(\d+):(\d+)\)/;
      const match = callerLine.match(regex);

      if (match) {
        functionName = match[1];
        functionLine = `${match[2]}:${match[3]}`;
      }
    } catch (e) {
      console.error('Error parsing stack trace:', e);
    }

    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      output += `<span class='log-${typeof arg}'>`;

      if (arg === undefined || arg === null) {
        output += arg;
      } else if (typeof arg === 'object' && arg !== null) {
        output += JSON.stringify(arg, null, 2);
      } else {
        output += arg;
      }

      output += '</span>&nbsp;';
    }

    logger.innerHTML += `
      <span class='logElementWrapper'>
        <span class='logDataSpan'>${output}</span>
        <span>at ${functionName} ${functionLine}</span>
      </span>
      <br>
    `;

    originalConsoleLog.apply(console, arguments);
  };
})(window.parent.document.getElementById('logger'));
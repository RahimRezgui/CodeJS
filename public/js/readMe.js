// dataset 属性选择器

//const btns = document.querySelectorAll(".readMeBtn");
let globalCMD;
const txtInputBar = document.querySelector(".insertLinkInputWrapper");
const btns = document.querySelectorAll("[data-edit]");
const editTextArea = document.getElementById("textbox");
btns.forEach(btn =>
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        // log(this.getAttribute("data-edit"));
        const cmd_val = this.getAttribute("data-edit").split(":"); 
        if(cmd_val[0] === 'copy') {
            document.execCommand(cmd_val[0]); 
            alert(`\`${cmd_val[0]}\`, Text Copied to Clipboard`)
        } 
        else if(cmd_val[0] === 'fontNamesans-serif') {
            document.execCommand(cmd_val[0], false, cmd_val[1])
        }
        else if(cmd_val[0] === 'fontNameserif') {
            document.execCommand(cmd_val[0], false, cmd_val[1])
        }
        else if(cmd_val[0] === 'fontNamemonospace') {
            document.execCommand(cmd_val[0], false, cmd_val[1])
        }
        else if(cmd_val[0] == 'insertImage') {
            e.preventDefault()
            globalCMD = cmd_val[0];
            showLinkInput()
        }
        else if(cmd_val[0] == 'createLink') {
            e.preventDefault()
            globalCMD = cmd_val[0];
            showLinkInput()
        }
        else if(cmd_val[0] == 'unlink') {
            e.preventDefault()
            globalCMD = cmd_val[0];
            document.execCommand(cmd_val[0])
        }
        else if(cmd_val[0] == 'indent' || cmd_val[0] == 'outdent' ) {
            e.preventDefault()
            document.execCommand(cmd_val[0]);
            console.log(tabCounter)
            console.log("OUTDENT/INDENT WORKING ?")
        } else {
            document.execCommand(cmd_val[0], false, cmd_val[1]);
        }
    })
);



function openReadMe(){
    console.log("READ ME FIRED")
    if(readMeTxt.classList.contains("readMeVisible")){
        readMeTxt.classList.remove("readMeVisible");
        return
    }else{
        readMeTxt.classList.add("readMeVisible");
        return
    }
}



function closeTxtFile(event){
    if(event.target.id.toString() == "readMeTXTFile"){
        txtInputBar.classList.remove("insertLinkInputWrapperVisible");
        openReadMe()
    }
    console.log(event.target)
}

function showLinkInput(){
    if(txtInputBar.classList.contains("insertLinkInputWrapperVisible")){
        txtInputBar.classList.remove("insertLinkInputWrapperVisible");
    }else{
        txtInputBar.classList.add("insertLinkInputWrapperVisible");
    }
}


function addLinkToTxt(cmd){
    if(globalCMD == "insertImage"){
        insertTxtImage(globalCMD)
    }else{
        insertTxtLink(globalCMD)
    }
}

function insertTxtImage(cmd){
    let url = document.getElementById("insertTxtImageInput").value.trim()
    document.execCommand(cmd, false, url);
    console.log(tabCounter)
    console.log("OUTDENT/INDENT WORKING ?")
    showLinkInput()
}

function insertTxtLink(cmd){
    let url = document.getElementById("insertTxtImageInput").value.trim()
    document.execCommand(cmd, false, url);
    console.log(tabCounter)
    console.log("OUTDENT/INDENT WORKING ?")
    showLinkInput()
}
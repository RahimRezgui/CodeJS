let spinnerPopupWrapper = document.getElementById("spinnerPopupWrapper");
let spinnerWrapper = document.getElementById("spinnerWrapper");
let successPopupWrapper = document.getElementById("successNotificationPopup");
let successNotificationWrapper = document.getElementById("successNotificationWrapper");

let successNotificationTitle = document.querySelector(".successNotificationTitle");
let successNotificationText = document.getElementById("successNotificationText");
let successNotoficationBtnOpen = document.querySelector(".successNotificationBtnOpen");

let successNotificationIcon = document.querySelector(".successNotificationIcon");
let errorNotificationIcon = document.querySelector(".errorNotificationIcon");
let searchNotificationIcon = document.querySelector(".searchNotificationIcon");
let forkNotificationIcon = document.querySelector(".forkNotificationIcon");
let fileNotificationIcon = document.querySelector(".newFileNotificationIcon");
let subNotificationIcon = document.querySelector(".subNotificationIcon");
let spinnerAdBlur = document.getElementById("spinnerAdBlur");

let allMsgIcons = document.querySelectorAll(".removeMsgIcons");
let notificationBtnWrapper = document.querySelector(".notificationBtnWrapper");



function loadSpinner(){
    spinnerAdBlur.classList.remove("hiddenSpinner");
    spinnerAdBlur.classList.add("loadingSpinner");
    spinnerPopupWrapper.classList.remove("hiddenSpinner");
    spinnerPopupWrapper.classList.add("loadingSpinner");
    //spinnerPopupWrapper.style.opacity = "1";
    spinnerWrapper.classList.add("loadingSpinner");
}

function hideSpinner(){
    spinnerPopupWrapper.classList.add("hiddenSpinner");
    spinnerPopupWrapper.classList.remove("loadingSpinner");
    //spinnerPopupWrapper.style.opacity = "0";
    spinnerWrapper.classList.remove("loadingSpinner");
    spinnerAdBlur.classList.add("hiddenSpinner");
    spinnerAdBlur.classList.remove("loadingSpinner");
}

function loadSubMessage(){
    let subTypeDisplay;
    const subTypeStr = localStorage.getItem("QJSSUBSTRING");
    let subType = subTypeStr.split("/")[2];
    if(subType = "subPro"){
        subTypeDisplay = "Pro"
    }else{
        subTypeDisplay = "StartUp"
    }

    successNotificationTitle.innerText = "You're almost there";
    successNotificationText.innerText = `Your Code JS ${subTypeDisplay} membership is one step away.\n \nClick the button below to proceed with your memebership upgrade.`;
    successNotoficationBtnOpen.id = "pricing";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    subNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*successNotificationIcon.classList.add("hiddenSuccessIcon");
    forkNotificationIcon.classList.add("hiddenSuccessIcon");
    searchNotificationIcon.classList.add("hiddenSuccessIcon");*/
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadSubMessageDeny(){
    // let subTypeDisplay;
    // const subTypeStr = localStorage.getItem("QJSSUBSTRING");
    // let subType = subTypeStr.split("/")[2];
    // if(subType = "subPro"){
    //     subTypeDisplay = "Pro"
    // }else{
    //     subTypeDisplay = "StartUp"
    // }

    successNotificationTitle.innerText = "This is a Premium Feature";
    successNotificationText.innerText = `Your need a StartUp account to access this feature.\n \nWould you like to upgrade your membership?`;
    successNotoficationBtnOpen.id = "pricing";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    //subNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*successNotificationIcon.classList.add("hiddenSuccessIcon");
    forkNotificationIcon.classList.add("hiddenSuccessIcon");
    searchNotificationIcon.classList.add("hiddenSuccessIcon");*/
    errorNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadSubWelcomeMessage(){
    let subTypeDisplay;
    if(localStorage.getItem("QJSSUBTYPE") != null){

    let subType = localStorage.getItem("QJSSUBTYPE");
    if(subType == "subPro"){
        subTypeDisplay = "Pro"
    }else if(subType == "subStart"){
        subTypeDisplay = "StartUp"
    }

    }


    successNotificationTitle.innerText = "Congratulations";
    successNotificationText.innerText = `Your are now a ${subTypeDisplay} member and part of the CodeJS community.\n \nThank you for joining and, remember that you can get in touch if needed.\n \nHappy Coding`;
    successNotoficationBtnOpen.id = "pricing";
    notificationBtnWrapper.classList.add("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    successNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*successNotificationIcon.classList.add("hiddenSuccessIcon");
    forkNotificationIcon.classList.add("hiddenSuccessIcon");
    searchNotificationIcon.classList.add("hiddenSuccessIcon");*/
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    setTimeout(()=>{
        successPopupWrapper.classList.remove("visibleSuccessWrapper");
        //notificationBtnWrapper.classList.remove("hiddenSuccessIcon");
        //successNotificationIcon.classList.add("hiddenSuccessIcon");
        //successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 3500)
    setTimeout(()=>{
        successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 4000)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadErrorMessage(){
    successNotificationTitle.innerText = "Oops, an error occurred";
    successNotificationText.innerText = `Something with your request has gone wrong.\nPlease Try again in a few moments.`;
    successNotoficationBtnOpen.id = lastNewFile;
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    errorNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*successNotificationIcon.classList.add("hiddenSuccessIcon");
    forkNotificationIcon.classList.add("hiddenSuccessIcon");
    searchNotificationIcon.classList.add("hiddenSuccessIcon");*/
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadEditorSearchMessage(){
    successNotificationTitle.innerText = "You're almost there.";
    successNotificationText.innerText = `To enhance performance and, loading page speed, In-Editor Search is turned off by default.\nYou can easily turn in on in settings.\n \nTurn on In-Editor Search?`;
    successNotoficationBtnOpen.id = "searchOpenPopup_Btn";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    searchNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*forkNotificationIcon.classList.add("hiddenSuccessIcon");
    errorNotificationIcon.classList.add("hiddenSuccessIcon");
    successNotificationIcon.classList.add("hiddenSuccessIcon");*/
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function pleaseLogIn(){
    successNotificationTitle.innerText = "Oops, Please Login to Continue";
    successNotificationText.innerText = `You need to be logged in to use this feature.\nIf you are not already a member you can join for free and enjoy many available features.\n \nDo you want to login?`;
    successNotoficationBtnOpen.id = "login";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    errorNotificationIcon.classList.remove("hiddenSuccessIcon");
    /*forkNotificationIcon.classList.add("hiddenSuccessIcon");
    searchNotificationIcon.classList.add("hiddenSuccessIcon");
    successNotificationIcon.classList.add("hiddenSuccessIcon");*/
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function permissionDenied(){
    successNotificationTitle.innerText = "Permission Denied";
    successNotificationText.innerText = `You don't own this project, so you can't save changes to it.\nTry forking the project instead.\n \nWould you like to fork this?`;
    successNotoficationBtnOpen.id = "fork";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    forkNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    /*searchNotificationIcon.classList.add("hiddenSuccessIcon");
    errorNotificationIcon.classList.add("hiddenSuccessIcon");
    successNotificationIcon.classList.add("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");*/
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadForkSuccess(){
    successNotificationTitle.innerText = "File Forked Successfully";
    successNotificationText.innerText = `This file has been forked successfully.\n \nWould you like to open your fresh fork in a new tab?`;
    successNotoficationBtnOpen.id = lastForkedFile;
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });


    successNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function loadNewFileSuccess(){
    successNotificationTitle.innerText = "Your file is ready";
    successNotificationText.innerText = `Your new CodeJS file has been successfully added to your public repo. \n Would you like to open your fresh file in a new tab?`;
    successNotoficationBtnOpen.id = lastNewFile;
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });


    fileNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function hideForkSuccess(){
    successPopupWrapper.classList.remove("visibleSuccessWrapper");
    //successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        //successPopupWrapper.classList.remove("visibleSuccessWrapper");
        successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 500)
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
}

function openNewFileTab(file){
    if(file.id == "login"){
        window.open(`${window.location.origin}/login`, '_blank')
        hideForkSuccess()
    }else if(file.id == "fork"){
        forkProject();
        hideForkSuccess()
    }else if(file.id == "searchOpenPopup_Btn"){
        startSearchEngine()
        hideForkSuccess()
    }else if(file.id == "pricing"){
        window.open(`${window.location.origin}/pricingpage`, "_blank");
        hideForkSuccess()
    }
    else{
        let fileUrl = `${window.location.origin}/qodejs?file=${file.id}`;
        window.open(fileUrl, "_blank");
        hideForkSuccess()
    }

}



function changesSaved(){
    successNotificationTitle.innerText = "Changes Saved Successfully";
    successNotificationText.innerText = `Changes to your file have been saved.`;
    notificationBtnWrapper.classList.add("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    successNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    //successPopupWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    setTimeout(()=>{
        successPopupWrapper.classList.remove("visibleSuccessWrapper");
        //notificationBtnWrapper.classList.remove("hiddenSuccessIcon");
        //successNotificationIcon.classList.add("hiddenSuccessIcon");
        //successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 1500)
    setTimeout(()=>{
        successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 2000)
}

function noPalRes(){
    successNotificationTitle.innerText = "Was that a real query?";
    successNotificationText.innerText = `No Pal suggestions found for this query.`;
    notificationBtnWrapper.classList.add("hiddenSuccessIcon");

    allMsgIcons.forEach((icon)=>{
        icon.classList.add("hiddenSuccessIcon")
    });

    errorNotificationIcon.classList.remove("hiddenSuccessIcon");
    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
    setTimeout(()=>{
        successPopupWrapper.classList.remove("visibleSuccessWrapper");
        //notificationBtnWrapper.classList.remove("hiddenSuccessIcon");
        //successNotificationIcon.classList.add("hiddenSuccessIcon");
        //successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 3000)
    setTimeout(()=>{
        successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 3500)
}

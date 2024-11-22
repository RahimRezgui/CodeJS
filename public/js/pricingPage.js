const proBtn = document.querySelector(".proPriceButton");
const entBtn = document.querySelector(".entPriceButton");
const proPrice = document.getElementById("pricePro");
const entPrice = document.getElementById("priceEnt");
const priceToggleBtn = document.getElementById("priceToggleBtn");
const userCurrentSub = Number(localStorage.getItem("QJSSUB"));


let spinnerPopupWrapper = document.getElementById("spinnerPopupWrapper");
let spinnerWrapper = document.getElementById("spinnerWrapper");
let successPopupWrapper = document.getElementById("successNotificationPopup");
let successNotificationWrapper = document.getElementById("successNotificationWrapper");

let successNotificationTitle = document.querySelector(".successNotificationTitle");
let successNotificationText = document.getElementById("successNotificationText");
let successNotoficationBtnOpen = document.querySelector(".successNotificationBtnOpen");
let notificationBtnWrapper = document.querySelector(".notificationBtnWrapper");

window.addEventListener("load", (event) => {
  if(localStorage.getItem("QJSSUBSTRING") != null){
  	const subStrItems = localStorage.getItem("QJSSUBSTRING").split("/");
  	if(subStrItems[2] == "subPro"){
  		openSubPro();
  	}else if(subStrItems[2] == "subStart"){
  		openSubStart();
  	}
  }
});


function loadSpinner(){
    spinnerPopupWrapper.classList.remove("hiddenSpinner");
    spinnerPopupWrapper.style.opacity = "1";
    spinnerWrapper.classList.add("loadingSpinner");
}

function hideSpinner(){
    spinnerPopupWrapper.classList.add("hiddenSpinner");
    spinnerPopupWrapper.style.opacity = "0";
    spinnerWrapper.classList.remove("loadingSpinner");
}

function pleaseLogIn(){
    successNotificationTitle.innerText = "Oops, Please Login to Continue";
    successNotificationText.innerText = `You need to be logged in to upgrade your membership.\nIf you are not already a member you can join for free and enjoy many available features.\n \nDo you want to login?`;
    successNotoficationBtnOpen.id = "login";
    notificationBtnWrapper.classList.remove("hiddenSuccessIcon");

    successNotificationWrapper.classList.add("visibleSuccessWrapper");
    setTimeout(()=>{
        successPopupWrapper.classList.add("visibleSuccessWrapper");
    }, 200)
}

function hideForkSuccess(){
    successPopupWrapper.classList.remove("visibleSuccessWrapper");
    setTimeout(()=>{
        successNotificationWrapper.classList.remove("visibleSuccessWrapper");
    }, 500)
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
    }
    else{
        let fileUrl = `${window.location.origin}/qodejs?file=${file.id}`;
        window.open(fileUrl, "_blank");
        hideForkSuccess()
    }

}

function openSubPro(){
	
	if(localStorage.getItem("QJSKEY") == null){
		const userSubString = localStorage.getItem("QJSMAIL") +"/"+ localStorage.getItem("QJSID") +"/"+ "subPro";
		localStorage.setItem("QJSSUBSTRING", userSubString);
		pleaseLogIn()

	}else if(userCurrentSub >= 2){
		hideSpinner()
		alert("No need to upgrade, you're already a CodeJS Pro premium memeber");
		console.log("YOU ALREADY ARE A PREMIUM CODE JS MEMBER")

	}else{
		loadSpinner()
		const userSubString = localStorage.getItem("QJSMAIL") +"/"+ localStorage.getItem("QJSID") +"/"+ "subPro";
		console.log(userSubString)
		console.log("USER IS AVAILABLE")
		localStorage.setItem("QJSSUBSTRING", userSubString);
		document.getElementById("emailToSubPro").value = localStorage.getItem("QJSMAIL");
		document.getElementById("checkout-button-pro").click()
		//pleaseLogIn()
	}
	//document.querySelector(".subPro .stripe-button-el").click()
}

function openSubStart(){
	
	if(localStorage.getItem("QJSKEY") == null){
		const userSubString = localStorage.QJSMAIL +"/"+ localStorage.QJSID +"/"+ "subStart";
		localStorage.setItem("QJSSUBSTRING", userSubString);
		pleaseLogIn()

	}else if(userCurrentSub >= 3){
		hideSpinner()
		alert("No need to upgrade, you're already a CodeJS Enterprise premium memeber");
		console.log("YOU ALREADY ARE A PREMIUM CODE JS MEMBER")

	}else{
		loadSpinner()
		const userSubString = localStorage.QJSMAIL +"/"+ localStorage.QJSID +"/"+ "subStart";
		console.log(userSubString)
		console.log("USER IS AVAILABLE")
		localStorage.setItem("QJSSUBSTRING", userSubString);
		document.getElementById("emailToSubStart").value = localStorage.QJSMAIL;
		document.getElementById("checkout-button-start").click()
		//pleaseLogIn()
	}
	//document.querySelector(".subStart .stripe-button-el").click()
}
//let billingPref;
//localStorage.setItem("subTimeOption", "sixMonths")


//priceToggleBtn.addEventListener("click", togglePrices());



/*function togglePrices(){
	billingPref = localStorage.getItem("subTimeOption");
	if(billingPref == "sixMonths"){
		proBtn.id = "twelveMonths";
		entBtn.id = "twelveMonths";
		proPrice.innerText = ` $34 <span> / year</span> `;
		entPrice.innerText = ` $79 <span> / year</span> `;
		updateSubPref("twelveMonths");
		//localStorage.setItem("subTimeOption", "twelveMonths")
	}else if(billingPref == "twelveMonths"){
		proBtn.id = "sixMonths";
		entBtn.id = "sixMonths";
		proPrice.innerText = ` $19 <span> / year</span> `;
		entPrice.innerText = ` $49 <span> / year</span> `;
		updateSubPref("sixMonths");
		//localStorage.setItem("subTimeOption", "sixMonths")
	}
}

function updateSubPref(pref){
	localStorage.setItem("subTimeOption", pref)
}*/


function joinRedirection(){
    window.open(`${window.location.origin}/signup`, "_blank")
}
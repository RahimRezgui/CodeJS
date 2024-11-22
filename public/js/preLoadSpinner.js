let spinnerPopupWrapper = document.getElementById("spinnerPopupWrapper");
let spinnerWrapper = document.getElementById("spinnerWrapper");
let spinnerAdBlur = document.getElementById("spinnerAdBlur");

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

//window.onload = loadSpinner;
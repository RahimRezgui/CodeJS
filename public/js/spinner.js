function load_spinner(){
    spinnerAdBlur.classList.remove("hiddenSpinner");
    spinnerAdBlur.classList.add("loadingSpinner");
    spinnerPopupWrapper.classList.remove("hiddenSpinner");
    spinnerPopupWrapper.classList.add("loadingSpinner");
    //spinnerPopupWrapper.style.opacity = "1";
    spinnerWrapper.classList.add("loadingSpinner");
}

function hide_spinner(){
    spinnerPopupWrapper.classList.add("hiddenSpinner");
    spinnerPopupWrapper.classList.remove("loadingSpinner");
    //spinnerPopupWrapper.style.opacity = "0";
    spinnerWrapper.classList.remove("loadingSpinner");
    spinnerAdBlur.classList.add("hiddenSpinner");
    spinnerAdBlur.classList.remove("loadingSpinner");
}

hide_spinner()
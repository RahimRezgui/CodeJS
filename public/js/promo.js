const promoUpgradeBtn = document.getElementById("promoUpgradeBtn");
const signUpForm = document.getElementById("promoForm");
document.getElementById("promoCodeInput").classList.add('fadeIn');
document.querySelector(".userNameBtn").classList.add('fadeIn');

promoUpgradeBtn.addEventListener('click', promoUpgradeSubmit);


async function promoUpgradeSubmit(event){
	event.preventDefault()
	if (localStorage.getItem('QJSKEY') === null) {
        alert("You're almost there but you must be logged in to continue. \n Please login and referesh this page to try again.")

        return
    }
    /* hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });*/
    event.preventDefault();
    const subInitDate = new Date().getTime();
    const userKey = localStorage.getItem('QJSKEY');
    const userId = localStorage.getItem('QJSID');
    const promoCode = document.getElementById("promoCodeInput").value.trim();
    const formData = {promoCode, userId, subInitDate, userKey};
    const response = await fetch (`${window.location.origin}/promo`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    })

    const data = await response.json();
    const subVerificationResponse = JSON.parse(data)[0].subSuccess.toString().toLowerCase();
    console.log(data)
    console.log(subVerificationResponse)


    if (subVerificationResponse === "subsuccess") {
    	alert("Gongratulations, your CodeJS membership has been successfully upgraded.");

    }
    else if (subVerificationResponse === "subfailure") {
    	alert("Error. Please try again later or contact support if the problem persists.");
    }


}

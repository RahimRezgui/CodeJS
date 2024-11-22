const logInBtnSubmit = document.getElementById("logInBtnSubmit");
const logInForm = document.getElementById("logInForm");
let hiddenMessages = document.querySelectorAll(".messageElement");
document.getElementById("logInEmail").classList.add('fadeIn');
document.querySelector(".userNameBtn").classList.add('fadeIn');

logInBtnSubmit.addEventListener('click', logInEmailSubmit);

function validateEmail(logInEmail) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(logInEmail);
}


async function logInEmailSubmit(event){
    event.preventDefault();

    hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });

    const logInEmail = document.getElementById("logInEmail").value.trim();
    if(validateEmail(logInEmail) != true){
        document.querySelector(".emailMessage").classList.remove("hiddenMessage");
        console.log("fake email")
        return
    }

  	
  	const formData = {logInEmail}
    const response = await fetch (`${window.location.origin}/logIn`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    })

    const data = await response.json();
    const emailVerificationResponse = JSON.parse(data)[0].userAvailability.toString().toLowerCase();
    console.log(data)
    console.log(JSON.parse(data)[0].userAvailability)



    if (emailVerificationResponse === "userfound") {

        const logInUserAgentInput = document.getElementById('logInUserAgent');
        logInUserAgentInput.value = navigator.userAgent.toString();
    	const logInPasswordVerificationInput = document.createElement("input");
    	const submitlogInBtn = document.createElement("button");
      	//One common class name
      	logInPasswordVerificationInput.id = "logInInput";
        logInPasswordVerificationInput.classList.add("formInput")
      	logInPasswordVerificationInput.setAttribute("type", "password");
      	logInPasswordVerificationInput.setAttribute("name", "logInPassword");
      	logInPasswordVerificationInput.setAttribute("placeholder", "Your CodeJS Password.");
      	logInPasswordVerificationInput.setAttribute("required", "");
      	//submitlogInBtn.id = "submitSignUpVerificationBtn";
        window.addEventListener("keydown", submitVerify, true);
        //window.addEventListener("onkeydown", submitVerify(event));
      	submitlogInBtn.setAttribute("type", "submit");
        submitlogInBtn.classList.add("formElementButton")
      	submitlogInBtn.addEventListener("click", submitLogInPassword);
      	//submitPasswordBtn.setAttribute("onclick", "signUpVerificationSubmit()");
      	submitlogInBtn.innerText = "LogIn";

      	logInForm.setAttribute("action", "/dashboard")

      	//window.location.href = "http://localhost:5000/signupVerify"

        logInBtnSubmit.classList.remove("fadeIn");
        document.querySelector(".formInput").classList.remove("fadeIn");
        logInBtnSubmit.classList.add("fadeOutAnimation");
        document.querySelector(".formInput").classList.add("fadeOutAnimation");
        logInBtnSubmit.classList.add("fadeOut");
        document.querySelector(".formInput").classList.add("fadeOut");


        logInForm.appendChild(logInPasswordVerificationInput);
        logInForm.appendChild(submitlogInBtn);
        document.getElementById("logInInput").classList.add("fadeIn");
        submitlogInBtn.classList.add("fadeIn");
        document.getElementById("logInInput").classList.add("fadeInAnimation");
        submitlogInBtn.classList.add("fadeInAnimation");
        logInBtnSubmit.remove();


    }
    else if (emailVerificationResponse === "usernotfound") {
        document.querySelector(".emailNotFoundMessage").classList.remove("hiddenMessage");
    	console.log("response is: " + emailVerificationResponse)
    }


    const use = JSON.parse(data);
    for (item of use) {
  	console.log(item) 
  	}
    //return response.json();
}

function pPatternVerify(str) {
    var specialCharsPattern = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!~@#$%^&*.,?]).+$" );

    // If the string is empty
    // then print No
    if (!str || str.length === 0) {
        return false;
    }

  //const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharsPattern.test(str);
}

function submitVerify(event){
    if(event.key == "Enter"){
        submitLogInPassword(event)
    }else{
        return
    }
}




async function submitLogInPassword() {
    //event.preventDefault();
    hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });


    const logInEmail = document.getElementById("logInEmail").value.trim();
    const logInPassword = document.getElementById("logInInput").value.trim();
    console.log("Submitting login")

    if(pPatternVerify(logInPassword) != true || validateEmail(logInEmail) != true || logInPassword.length < 12 || logInPassword.length > 64){
        event.preventDefault();
        console.log("not matching")
        document.querySelector(".passwordMessage").classList.remove("hiddenMessage");
        return
    }

    //if(pPatternVerify(logInPassword) && validateEmail(logInEmail) && logInPassword.length >= 12 && logInPassword.length <= 64){
        console.log("FETCHING PWD")
        const logInUserAgent = "";//navigator.userAgent;
        const formData = {logInEmail, logInPassword, logInUserAgent}
        const response = await fetch (`${window.location.origin}/dashboard`, { 
            method: 'post', 
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(formData) 
        });
        /*const data = await response.json();
        const passwordVerificationResponse = JSON.parse(data)[0].userAvailability.toString().toLowerCase();

        switch(passwordVerificationResponse){
            case "notinit":
                console.log("not init connexion issue")
                document.querySelector(".wrongPasswordMessage").classList.remove("hiddenMessage");
                break;
            case "multisynclimit":
                console.log("MULTY SYNC LIMIT ISSUE")
                document.querySelector(".syncLimitMessage").classList.remove("hiddenMessage");
                break
        }*/

        /*if (passwordVerificationResponse === "notinit"){
            console.log("not init connexion issue")
            document.querySelector(".wrongPasswordMessage").classList.remove("hiddenMessage");
        }else if(passwordVerificationResponse === "multisynclimit"){
            document.querySelector(".syncLimitMessage").classList.remove("hiddenMessage");
        }*/
    /*}else if(pPatternVerify(logInPassword) != true){
        console.log("not matching")
        document.querySelector(".passwordMessage").classList.remove("hiddenMessage")
    }*/
    
}



/*window.history.forward();
function noBack() {
    window.history.forward();
}*/
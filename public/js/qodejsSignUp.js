const signUpUserNameBtnSubmit = document.getElementById("signUpUserNameBtnSubmit");
const signUpForm = document.getElementById("signUpForm");
document.getElementById("signUpUsernameInput").classList.add('fadeIn');
document.querySelector(".userNameBtn").classList.add('fadeIn');
let signUpUserName;
let signUpEmail;
let hiddenMessages = document.querySelectorAll(".messageElement");

signUpUserNameBtnSubmit.addEventListener('click', signUpUserNameSubmit);


async function signUpUserNameSubmit(event){
    hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });
    event.preventDefault();
    signUpUserName = document.getElementById("signUpUsernameInput").value.trim()
    const formData = {signUpUserName}
    const response = await fetch (`${window.location.origin}/signupUserNameVerify`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    })

    const data = await response.json();
    const userNameVerificationResponse = JSON.parse(data)[0].userNameAvailability.toString().toLowerCase();
    console.log(data)
    console.log(JSON.parse(data)[0].userNameAvailability)
    /*document.querySelector('.container').innerText = data; //JSON.parse(data);
    document.querySelector('.container').innerText += JSON.parse(data);*/


    if (userNameVerificationResponse === "available") {
        localStorage.setItem("userNameSignUp", signUpUserName);
        let messageOK = document.querySelector(".usernameOKMessage");
        messageOK.innerHTML = ` <i class="fa-regular fa-user"></i>&nbsp; Nice one, the username "${signUpUserName.trim()}" is still available.`
        messageOK.classList.remove("hiddenMessage");

        const signUpEmailInput = document.createElement("input");
        const signUpBtnSubmit = document.createElement("button");
        //One common class name
        signUpEmailInput.id = "signUpEmailInput"; 
        signUpEmailInput.classList.add("signUpEmailInput");
        signUpEmailInput.classList.add("formInput");
        signUpEmailInput.setAttribute("type", "email");
        signUpEmailInput.setAttribute("name", "signUpEmailInput");
        signUpEmailInput.setAttribute("placeholder", "Your email address.");
        signUpEmailInput.setAttribute("required", "");
        signUpBtnSubmit.id = "signUpBtnSubmit";
        signUpBtnSubmit.classList.add("signUpBtnSubmit");
        signUpBtnSubmit.classList.add("formElementButton");
        signUpBtnSubmit.setAttribute("type", "submit");
        //submitVerificationBtn.setAttribute("type", "submit");
        signUpBtnSubmit.addEventListener("click", signUpEmailSubmit);
        //submitPasswordBtn.setAttribute("onclick", "signUpVerificationSubmit()");
        signUpBtnSubmit.innerText = "Verify Email";

        //signUpUserNameBtnSubmit.removeListener('click', signUpUserNameSubmit);
        signUpUserNameBtnSubmit.removeAttribute("type");
        signUpUserNameBtnSubmit.classList.remove("fadeIn");
        document.querySelector(".formInput").classList.remove("fadeIn");
        signUpUserNameBtnSubmit.classList.add("fadeOutAnimation");
        document.querySelector(".formInput").classList.add("fadeOutAnimation");
        signUpUserNameBtnSubmit.classList.add("fadeOut");
        document.querySelector(".formInput").classList.add("fadeOut");


        signUpForm.appendChild(signUpEmailInput);
        signUpForm.appendChild(signUpBtnSubmit);
        document.getElementById("signUpEmailInput").classList.add("fadeIn");
        document.getElementById("signUpBtnSubmit").classList.add("fadeIn");
        document.getElementById("signUpEmailInput").classList.add("fadeInAnimation");
        document.getElementById("signUpBtnSubmit").classList.add("fadeInAnimation");
        signUpUserNameBtnSubmit.remove();
        //window.location.href = "http://localhost:5000/signupVerify"


    }
    else if (userNameVerificationResponse === "unavailable") {
        document.querySelector(".usernameMessage").classList.remove("hiddenMessage");
        console.log("response is: " + userNameVerificationResponse)
    }


    /*const use = JSON.parse(data);
    for (item of use) {
    console.log(item) 
    }*/
    //return response.json();
}








/*const signUpBtnSubmit = document.getElementById("signUpBtnSubmit");
const signUpForm = document.getElementById("signUpForm");
const baseURL = 'http://localhost:5000/signup';

signUpBtnSubmit.addEventListener('click', signUpEmailSubmit);*/



function validateEmail(signUpEmail) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(signUpEmail);
}


async function signUpEmailSubmit(event){
    event.preventDefault();

    hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });

    signUpEmail = document.getElementById("signUpEmailInput").value.trim()
    console.log(signUpEmail)
    if(validateEmail(signUpEmail) != true){
        document.querySelector(".emailMessage").classList.remove("hiddenMessage");
        console.log("fake email")
        return
    }

    const signUpUserName = localStorage.getItem("userNameSignUp");
    //event.preventDefault();
  	signUpEmail = document.getElementById("signUpEmailInput").value
  	const formData = {signUpEmail, signUpUserName}
    const response = await fetch (`${window.location.origin}/signup`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    })

    const data = await response.json();
    const emailVerificationResponse = JSON.parse(data)[0].emailAvailability.toString().toLowerCase();
    console.log(data)
    console.log(JSON.parse(data)[0].emailAvailability)
    /*document.querySelector('.container').innerText = data; //JSON.parse(data);
    document.querySelector('.container').innerText += JSON.parse(data);*/


    if (emailVerificationResponse === "available") {
        document.querySelector(".emailOKMessage").classList.remove("hiddenMessage");
    	const emailVerificationInput = document.createElement("input");
    	const submitVerificationBtn = document.createElement("button");
      	//One common class name
      	emailVerificationInput.id = "signUpVerificationInput";
        emailVerificationInput.classList.add("signUpVerificationInput");
        emailVerificationInput.classList.add("formInput");
      	emailVerificationInput.setAttribute("type", "number");
      	emailVerificationInput.setAttribute("name", "signUpVerificationInput");
      	emailVerificationInput.setAttribute("placeholder", "Enter the 7 digits verification code.");
      	emailVerificationInput.setAttribute("required", "");
      	submitVerificationBtn.id = "submitSignUpVerificationBtn";
        submitVerificationBtn.classList.add("submitSignUpVerificationBtn");
        submitVerificationBtn.classList.add("formElementButton");
      	submitVerificationBtn.setAttribute("type", "submit");
      	submitVerificationBtn.addEventListener("click", signUpVerificationSubmit);
      	//submitPasswordBtn.setAttribute("onclick", "signUpVerificationSubmit()");
      	submitVerificationBtn.innerText = "Complete verification";

        //document.getElementById("signUpEmailInput").classList.add("hiddenInput");
        //document.getElementById("signUpBtnSubmit").classList.add("hiddenInput");
        document.querySelector(".signUpEmailInput").classList.remove("fadeIn");
        document.querySelector(".signUpBtnSubmit").classList.remove("fadeIn");
        document.querySelector(".signUpEmailInput").classList.remove("fadeInAnimation");
        document.querySelector(".signUpBtnSubmit").classList.remove("fadeInAnimation");
        document.querySelector(".signUpEmailInput").classList.add("fadeOutAnimation");
        document.querySelector(".signUpBtnSubmit").classList.add("fadeOutAnimation");
        document.querySelector(".signUpEmailInput").classList.add("fadeOut");
        document.querySelector(".signUpBtnSubmit").classList.add("fadeOut");

        //document.querySelector(".signUpEmailInput").classList.add("hiddenInput");
        //document.querySelector(".signUpBtnSubmit").classList.add("hiddenInput");

      	signUpForm.appendChild(emailVerificationInput);
      	signUpForm.appendChild(submitVerificationBtn);
        document.getElementById("signUpVerificationInput").classList.add("fadeIn");
        document.getElementById("submitSignUpVerificationBtn").classList.add("fadeIn");
        document.getElementById("signUpVerificationInput").classList.add("fadeInAnimation");
        document.getElementById("submitSignUpVerificationBtn").classList.add("fadeInAnimation");
        document.querySelector(".signUpBtnSubmit").remove();
      	//window.location.href = "http://localhost:5000/signupVerify"


    }
    else if (emailVerificationResponse === "unavailable") {
        document.querySelector(".emailTakenMessage").classList.remove("hiddenMessage");
    	console.log("response is: " + emailVerificationResponse)
    }


    const use = JSON.parse(data);
    for (item of use) {
  	console.log(item) 
  	}
    //return response.json();
}


async function signUpVerificationSubmit(event){
    event.preventDefault();

    hiddenMessages.forEach((message)=>{
        message.classList.add("hiddenMessage")
    });
  	/*const signUpEmail = document.getElementById("signUpEmailInput").value*/
  	const signUpVerification = document.getElementById("signUpVerificationInput").value
  	const formData = {signUpEmail, signUpVerification}
  	console.log(formData)
    const response = await fetch (`${window.location.origin}/signupVerify`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    })

    const data = await response.json();
    const emailKeyVerificationResponse = JSON.parse(data)[0].userVerification.toString().toLowerCase();


    if (emailKeyVerificationResponse === "verified") {
    	console.log("response is: " + emailKeyVerificationResponse)

    	//const passwordInput = document.createElement("input");
        //const usernameInput = document.createElement("input");
    	const submitPasswordBtn = document.createElement("button");

      	//One common class name
      	/*usernameInput.id = "signUpUsernameInput";
      	usernameInput.setAttribute("type", "text");
      	usernameInput.setAttribute("name", "signUpUsernameInput");
      	usernameInput.setAttribute("placeholder", "Choose your username.");
      	usernameInput.setAttribute("required", "");*/

        /*passwordInput.id = "signUpPasswordInput";
        passwordInput.classList.add("formPasswordInput");
        passwordInput.addEventListener("keyup", passPreProcess);
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("name", "signUpPasswordInput");
        passwordInput.setAttribute("placeholder", "And a strong password.");
        passwordInput.setAttribute("required", "");*/

      	submitPasswordBtn.id = "submitSignUpPasswordBtn";
      	submitPasswordBtn.setAttribute("type", "submit");
      	submitPasswordBtn.addEventListener("click", signUpPasswordSubmit)
      	//submitPasswordBtn.setAttribute("onclick", "signUpPasswordSubmit()");
      	submitPasswordBtn.innerText = "Finish SignUp";

        const passwordCheckTemplate = `
                    <div class="passwordInputWrapper fadeInPass fadeInAnimationPass" id="passwordInputWrapper" >
                     <input onfocusout="focusOutInputStyle()" onfocus="focusInputStyle()" onkeyup="passPreProcess(this)" onkeydown="submitEvent(event)" id="signUpPasswordInput" class="signUpPasswordInput pass"
                        name="password" type="password" 
                        placeholder="Choose a strong password." required>
                        <span class="show-pass" onclick="toggle()">
                            <i class="far fa-eye" onclick="myFunction(this)"></i>
                        </span>
                    </div>
                        <div class="popoverPassword fadeIn fadeInAnimation" id="popover-password">
                            <p><span id="result"></span></p>
                            <div class="progress">
                                <div id="password-strength" 
                                    class="progress-bar" 
                                     
                                    style="width:0%">
                                </div>
                            </div>
                            <ul class="list-unstyled">
                                <li class="">
                                    <span class="low-upper-case">
                                        <i class="fas fa-check grey" aria-hidden="true"></i>
                                        &nbsp;Lowercase &amp; Uppercase
                                    </span>
                                </li>
                                <li class="">
                                    <span class="one-number">
                                        <i class="fas fa-check grey" aria-hidden="true"></i>
                                        &nbsp;Number (0-9)
                                    </span> 
                                </li>
                                <li class="">
                                    <span class="one-special-char">
                                        <i class="fas fa-check grey" aria-hidden="true"></i>
                                        &nbsp;Special Character (!@#$%^&*)
                                    </span>
                                </li>
                                <li class="">
                                    <span class="eight-character">
                                        <i class="fas fa-check grey" aria-hidden="true"></i>
                                        &nbsp;Minimum of 12 Characters
                                    </span>
                                </li>
                            </ul>
                        </div>`



        document.querySelector(".signUpVerificationInput").classList.remove("fadeIn");
        document.querySelector(".submitSignUpVerificationBtn").classList.remove("fadeIn");
        document.querySelector(".signUpVerificationInput").classList.remove("fadeInAnimation");
        document.querySelector(".submitSignUpVerificationBtn").classList.remove("fadeInAnimation");
        document.querySelector(".signUpVerificationInput").classList.add("fadeOutAnimation");
        document.querySelector(".submitSignUpVerificationBtn").classList.add("fadeOutAnimation");
        document.querySelector(".signUpVerificationInput").classList.add("fadeOut");
        document.querySelector(".submitSignUpVerificationBtn").classList.add("fadeOut");

        //document.querySelector(".signUpVerificationInput").classList.add("hiddenInput");
        //document.querySelector(".submitSignUpVerificationBtn").classList.add("hiddenInput");

        submitPasswordBtn.classList.add("fadeIn");
        submitPasswordBtn.classList.add("fadeInAnimation");
        submitPasswordBtn.classList.add("formElementButton");

        //signUpForm.appendChild(usernameInput);
      	//signUpForm.appendChild(passwordInput);
        signUpForm.innerHTML += passwordCheckTemplate;
      	signUpForm.appendChild(submitPasswordBtn);


    }
    else if (emailKeyVerificationResponse === "unverified") {
        document.querySelector(".verificationMessage").classList.remove("hiddenMessage");
    	console.log("response is: " + emailKeyVerificationResponse)
    }


    /*const use = JSON.parse(data);
    for (item of use) {
  	console.log(item) 
  	}*/
    //return response.json();
}

function submitEvent(event) {
    console.log(event.key)
    if(event.key == "Enter") {
        signUpPasswordSubmit(event);
    }
}

function pPatternVerify(str) {
    var specialCharsPattern = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!~@#$%^&*.,?]).+$" );

    // If the string is empty
    // then print No
    if (!str || str.length === 0) {
        document.write("No" + "<br>");
        return false;
    }

  //const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharsPattern.test(str);
}




async function signUpPasswordSubmit(event){
    event.preventDefault();

    /*const signUpEmail = document.getElementById("signUpEmailInput").value
    const signUpUsername = document.getElementById("signUpUsernameInput").value*/
    const signUpPassword = document.getElementById("signUpPasswordInput").value.trim();
    if(pPatternVerify(signUpPassword) === true && signUpPassword.length >= 12 && signUpPassword.length < 64){
        document.getElementById("middlePopupWrapper").style.opacity = "0";
        const spinnerElement = `<div id="spinnerWrapper" class="spinnerWrapper">
                                <div class="spinnerContainer">
                                    <div id="loading" class="loading">

                                    </div>
                                </div>
                            </div>`
        document.body.innerHTML += spinnerElement;
        document.getElementById("spinnerWrapper").classList.add("loadingSpinner");

        /*const signUpEmail = document.getElementById("signUpEmailInput").value
        const signUpUsername = document.getElementById("signUpUsernameInput").value
        const signUpPassword = document.getElementById("signUpPasswordInput").value*/

        const signUpDate = new Date().toISOString().slice(0, 10);
        const userAgent = navigator.userAgent;
        const userAgentLanguage = navigator.language;

        const formData = {signUpEmail, signUpUserName, signUpPassword, signUpDate, userAgent, userAgentLanguage}
        console.log(userAgent)

        const response = await fetch (`${window.location.origin}/signupUserInit`, { 
            method: 'post', 
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(formData) 
        });

        const signUpData = await response.json();
        const userInitResponse = JSON.parse(signUpData)[0].userinit.toString().toLowerCase();
        console.log(userInitResponse)
        if (userInitResponse === "init") {
            setTimeout(()=> {
                window.location.href = "logIn"
            }, 1500)
        //window.location.href = "logIn"
        }

    }else{
        document.querySelector(".passwordMessage").classList.remove("hiddenMessage");
    }



    
}
	



// Password Form Validation //
let state = false;
//let password = document.getElementById("signUpUsernameInput");
//let password = document.querySelector(".formPasswordInput").value;
/*let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");
let passInput = document.querySelector('.pass');*/

/*password.addEventListener("keyup", function(){

    let pass = document.querySelector(".formPasswordInput").value;
    checkStrength(pass);
});*/

function passPreProcess(element){
    let password = element.value;
    //let pass = document.querySelector(".formPasswordInput").value;
    console.log(password)
    checkStrength(password);
}

function toggle(){
    if(state){
        document.getElementById("signUpPasswordInput").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("signUpPasswordInput").setAttribute("type","text")
        state = true;
    }
}

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
    let strength = 0;
    let passwordStrength = document.getElementById("password-strength");
    let lowUpperCase = document.querySelector(".low-upper-case i");
    let number = document.querySelector(".one-number i");
    let specialChar = document.querySelector(".one-special-char i");
    let eightChar = document.querySelector(".eight-character i");
    let passInput = document.querySelector('.pass');
    const inputStyleElement = document.getElementById('passwordInputWrapper');

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('grey');
        //lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('grey');
        //lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('grey');
        //number.classList.add('fa-check');
    } else {
        number.classList.add('grey');
        //number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('grey');
        //specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('grey');
        //specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length >= 12) {
        strength += 1;
        eightChar.classList.remove('grey');
        //eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('grey');
        //eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        inputStyleElement.classList.remove('inputSuccess');
        inputStyleElement.classList.add('passwordInputWrapperFocus');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 30%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        inputStyleElement.classList.remove('inputSuccess');
        inputStyleElement.classList.add('passwordInputWrapperFocus');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
        //let pass = document.querySelector('.pass');
        /*pass.style.boxShadow = '0 0 5px rgba(0,128,0, 0.8)';
        pass.style.border = '1px solid rgba(0,128,0, 0.8)';*/
        inputStyleElement.classList.remove('passwordInputWrapperFocus');
        inputStyleElement.classList.add('inputSuccess');
    }
}



function focusInputStyle() {
    const inputStyleElement = document.getElementById('passwordInputWrapper');
    if(inputStyleElement.classList.contains('inputSuccess')){
        return;
    }
    else {
        inputStyleElement.classList.add('passwordInputWrapperFocus');
    }

}

function focusOutInputStyle() {
    const inputStyleElement = document.getElementById('passwordInputWrapper');
    inputStyleElement.classList.remove('passwordInputWrapperFocus');
}






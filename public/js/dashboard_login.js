window.onload = function log_in_user(){
	if(localStorage.getItem("user_access_key") === null){
		window.location.href = "/log_in"
	}else {
		const email = localStorage.email;
		const user_access_key = localStorage.user_access_key;

		document.getElementById('email_input').value = email;
		document.getElementById('user_access_key_input').value = user_access_key;
		document.getElementById('submit_user_login').click();
	}
}
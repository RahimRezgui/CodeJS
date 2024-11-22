window.history.replaceState( {} , 'Dashboard', '/dashboard');

window.onload = function is_logged_in(){
	if(localStorage.getItem('user_name') === null){
		window.location.href = "/log_in";
		return
	}
	get_user_sub();
}

window.addEventListener('focus', ()=>{
	if(localStorage.getItem('user_name') === null){
		window.location.href = "/log_in";
	}
});

const last_input = document.getElementById('password');
last_input.addEventListener('keydown', (event) => {
	if (event. key === 'Enter') {
	console. log('Enter key pressed!' );
	document.getElementById('sign_up_btn').click();
	}
});

const sign_up_wrappers = document.querySelectorAll('#sign_up_wrapper');
sign_up_wrappers.forEach(wrapper =>{
	wrapper.addEventListener('click', (event) => {
		console.log(event)
		if(event.target.id == 'sign_up_wrapper'){
			document.getElementById('delete_account_wrapper').classList.remove('fadein');
			document.getElementById('ticket_wrapper').classList.remove('fadein');
			document.getElementById('feature_wrapper').classList.remove('fadein');
		}
	});
})


function display_delete_wrapper(){
	document.getElementById('delete_account_wrapper').classList.add('fadein');
}

function display_ticket_wrapper(){
	document.getElementById('ticket_wrapper').classList.add('fadein');
}

function display_feature_wrapper(){
	document.getElementById('feature_wrapper').classList.add('fadein');
}


function log_out(){
	const email = localStorage.email;
    const user_access_key = localStorage.user_access_key;

    document.getElementById('email_input').value = email;
    document.getElementById('user_access_key_input').value = user_access_key;

    localStorage.removeItem('email');
    localStorage.removeItem('user_access_key');
    localStorage.removeItem('user_name');

    document.getElementById('submit_user_logout').click();
}


function delete_account(){
	const password = document.getElementById('password').value;
	document.getElementById('delete_email_input').value = localStorage.getItem('email');
	document.getElementById('delete_user_access_key_input').value = localStorage.getItem('user_access_key');
	document.getElementById('delete_user_name').value = localStorage.getItem('user_name');
	document.getElementById('delete_password').value = password;

	localStorage.clear();

	document.getElementById('submit_user_delete').click();
}

async function get_user_sub(){
	try{
		const email = localStorage.getItem('email');
		const user_access_key = localStorage.getItem('user_access_key');
		const user_sub = localStorage.getItem('user_sub');

		if(email === null){
			window.location = '/log_in';
		}

		const formData = {
			email,
			user_access_key,
			user_sub,
		}
		const response = await fetch(`${window.location.origin}/get_user_sub`, {
			method: 'post',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(formData)
		});
		const response_data = await response;
		const data = await response.json();
		console.log(response.status)
		console.log(data)
		//console.log(data.message.email)
		if (response_data.status === 200){
			localStorage.setItem('user_sub', data.message.user_subscription_type);
			localStorage.setItem('user_customer_id', data.message.user_stripe_customer_id);
		}else if(data.message == 'Invalid credentials.'){
			console.log('Error during operation.')
		}
	}catch(error){
			console.log(error)
	}finally{
			
	}
}

function manage_subscription(){
	const user_customer_id = localStorage.getItem('user_customer_id')
	if(user_customer_id === null || user_customer_id == 'null'){
		window.location = '/pricing';
		return
	}

	document.getElementById('customer_portal_input').value = localStorage.getItem('user_customer_id');
	document.getElementById('customer_portal_btn').click();
}


async function send_ticket(){
	try{
		const email = localStorage.getItem('email');
		const user_access_key = localStorage.getItem('user_access_key');
		const user_sub = localStorage.getItem('user_sub');
		const subject = document.getElementById('ticket_subject').value;
		const message = document.getElementById('ticket_textarea').value;

		if(email === null){
			window.location = '/log_in';
		}

		const formData = {
			email,
			user_access_key,
			user_sub,
			subject,
			message
		}
		const response = await fetch(`${window.location.origin}/contact`, {
			method: 'post',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(formData)
		});
		const response_data = await response;
		const data = await response.json();
		console.log(response.status)
		console.log(data)
		//console.log(data.message.email)
		if (response_data.status === 200){
			document.getElementById('ticket_subject').value = '';
			document.getElementById('ticket_textarea').value = '';
			alert('You ticket was received successfully. Keep an eye on your email inbox.')
		}else{
			alert('An error occurred, please try again or contact support via email.')
		}
	}catch(error){
			console.log(error)
	}finally{
			
	}
}

async function send_feature(){
	try{
		const email = localStorage.getItem('email');
		const user_access_key = localStorage.getItem('user_access_key');
		const user_sub = localStorage.getItem('user_sub');
		const subject = document.getElementById('feature_subject').value;
		const message = document.getElementById('feature_textarea').value;

		if(email === null){
			window.location = '/log_in';
		}

		const formData = {
			email,
			user_access_key,
			user_sub,
			subject,
			message
		}
		const response = await fetch(`${window.location.origin}/request_feature`, {
			method: 'post',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(formData)
		});
		const response_data = await response;
		const data = await response.json();
		console.log(response.status)
		console.log(data)
		//console.log(data.message.email)
		if (response_data.status === 200){
			document.getElementById('feature_subject').value = '';
			document.getElementById('feature_textarea').value = '';
			alert('You feature reauest was received successfully. You\'ll be notified once it is available')
		}else{
			alert('An error occurred, please try again or contact support via email.')
		}
	}catch(error){
			console.log(error)
	}finally{
			
	}
}






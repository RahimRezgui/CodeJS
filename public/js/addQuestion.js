async function addQ(){
	const xpalquestionqjs = document.querySelector('.question').value;
	const xpalquestionscodejs = document.querySelector('.questionCode').value;
	const xpalquestionscodeHtml = document.querySelector('.htmlquestionCode').value;
	const xpalquestionscodeCss = document.querySelector('.cssquestionCode').value;
	const xpalquestionsourcejs = document.querySelector('.questionSource').value || " ";
	const xpalquestionscorejs = document.querySelector('.questionScore').value || 10;
	const xpalquestionsourceurljs = document.querySelector('.questionUrl').value || " ";
	const xpalquestionsourcePwd = document.querySelector('.whiteRobeHacker').value;

	const xpalparam1 = document.querySelector('.param1').value || " ";
	const xpalparam2 = document.querySelector('.param2').value || " ";
	const xpalparam3 = document.querySelector('.param3').value || " ";
	const xpalparam4 = document.querySelector('.param4').value || " ";
	const xpalparam5 = document.querySelector('.param5').value || " ";

	async function sendQ(event){
    			if(xpalquestionqjs.trim() == "" || xpalquestionqjs.length < 8){
    				alert("Question can't be empty or too short");
    				return
    			}else if(xpalquestionscodejs.trim()  == "" || xpalquestionscodejs.length < 8){
    				alert("Answer can't be empty or too short");
    				return
    			}else if(xpalquestionsourcePwd.trim() == "" || xpalquestionscodejs.length < 8){
    				alert("Please insert your password");
    				return
    			}
  				const formData = {xpalquestionqjs, xpalquestionscodejs, xpalquestionscodeHtml, xpalquestionscodeCss, xpalquestionsourcejs, xpalquestionscorejs, xpalquestionsourceurljs, xpalquestionsourcePwd, xpalparam1, xpalparam2, xpalparam3, xpalparam4, xpalparam5}
    			console.log(formData)
    			const response = await fetch (`${window.location.origin}/insertQuestion`, { 
        		method: 'post', 
        		headers: {"Content-Type": 'application/json'},
        		body: JSON.stringify(formData) 
    			});

    			const data = await response.json();
    			const insertRes = JSON.parse(data)[0].qPalInsert.toString().toLowerCase();
    			console.log("OK FETCH RUNNING")
    			console.log(data)
    			console.log(insertRes)
    			if(insertRes === "errinserting") {
    				setTimeout(()=> {
    					console.log(insertRes)
    				}, 500)

    				console.log(insertRes)
    			}
    			else if (insertRes === "inserted") {
    				alert("Thank you for your contribution. \n Peace be upon the righteous ones. \n Death to the evil empire! \n For The One, For The One, For The One!")
    				console.log(insertRes)

    				document.querySelector('.question').value = "";
					document.querySelector('.questionCode').value = "";
					document.querySelector('.htmlquestionCode').value = "";
					document.querySelector('.cssquestionCode').value = "";
					document.querySelector('.questionSource').value = "";
					document.querySelector('.questionScore').value = "";
					document.querySelector('.questionUrl').value = "";
    			}
    			
    }
    sendQ()
}
function checkUserLogin(){
	if(localStorage.getItem('QJSKEY') === null){
		window.open("https://codejs.com/update/palJS/logIn",  "_self")
		//return
	}else {
		const myInput = document.getElementById('myInput');
		myInput.onpaste = e => e.preventDefault();
	}
}
checkUserLogin()
/*window.onload = function() {
	checkUserLogin()
}*/
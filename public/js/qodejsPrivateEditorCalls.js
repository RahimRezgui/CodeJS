async function savePrivateQodeJSFile() {
	if(localStorage.getItem('QJSKEY') === null) {
		pleaseLogIn();
		console.log("You must be logged in to access this feature.") // Redirect to login page from popup button 
		isSaving = false;
		return
	}
	else { 
		loadSpinner()
	    console.log(customTagsData) 
		const saveFileId = document.getElementById('fileId').innerText;
		const saveFileKey = document.getElementById('fileKey').innerText;
		const userKey = localStorage.QJSKEY; //|| "null";
		const userId = localStorage.QJSID; //|| "null";
		console.log(userId.length)
		const fileOGAuthorId = document.getElementById('fileAuthorId').innerText //|| "null";
		const saveHtmlData = localStorage[thisFileId+'html'];
		const saveCssData = localStorage[thisFileId+'css_code'];
		const saveJsData = localStorage[thisFileId+'js_code'];

		const saveDate = new Date().toISOString().slice(0, 10);


		if (userId === fileOGAuthorId) {
			async function savePrivateFile(event){
    			//event.preventDefault();
  				const formData = {saveFileId, saveFileKey, fileName, userKey, userId, fileAuthor, fileOGAuthorId, saveHtmlData, saveCssData, saveJsData, librariesData, customTagsData, todoData, permissionGranted, editPermissionGranted, saveDate, readMeTXTFile}
    			console.log(formData)
    			const response = await fetch (`${window.location.origin}/savePrivateFile`, { 
        		method: 'post', 
        		headers: {"Content-Type": 'application/json'},
        		body: JSON.stringify(formData) 
    			});

    			const data = await response.json();
    			console.log("OK FETCH RUNNING")
    			console.log(data)
    			const newForkInitResponse = JSON.parse(data)[0].fileSaved.toString().toLowerCase();
    			console.log("OK FETCH RUNNING")
    			console.log(data)
    			if(newForkInitResponse === "changessaved") {
    				setTimeout(()=> {
    					hideSpinner()
    					changesSaved()
    					isSaving = false;
    				}, 250)
    				console.log(newForkInitResponse)
    			}
    			else if (newForkInitResponse === "usernotsignedin") {
    				pleaseLogIn();
    				console.log(newForkInitResponse)
    				isSaving = false;
    			}
    			else if (newForkInitResponse === "permissiondenied") {
    				permissionDenied();
    				console.log(newForkInitResponse)
    				isSaving = false;
    			}
    		}
    		savePrivateFile(event)
			console.log(jsData)

		}
		else if(editPermissionGranted.includes(userId)){
			savePrivateCollab()
			console.log('THIS USER IS AUTHORIZED TO SAVE CHANGES')
		}
		else {
			hideSpinner()
			permissionDenied();
			console.log("You do not own permission to save changes to this file. Fork the project to your own repo to proceed")
		}
		setTimeout(()=> {
    		isSaving = false;
    	}, 250)
	}
}	

async function savePrivateCollab(){
	const saveFileId = document.getElementById('fileId').innerText;
	const saveFileKey = document.getElementById('fileKey').innerText;
	const userKey = localStorage.QJSKEY;
	const userId = localStorage.QJSID;
	console.log(userId.length)
	const fileOGAuthorId = document.getElementById('fileAuthorId').innerText;
	const saveHtmlData = localStorage[thisFileId+'html'];
	const saveCssData = localStorage[thisFileId+'css_code'];
	const saveJsData = localStorage[thisFileId+'js_code'];

	const saveDate = new Date().toISOString().slice(0, 10);
	//event.preventDefault();
	const formData = {saveFileId, saveFileKey, fileName, userKey, userId, fileAuthor, fileOGAuthorId, saveHtmlData, saveCssData, saveJsData, librariesData, customTagsData, todoData, permissionGranted, editPermissionGranted, saveDate, readMeTXTFile}
	console.log(formData)
	const response = await fetch (`${window.location.origin}/savePrivateCollab`, { 
	method: 'post', 
	headers: {"Content-Type": 'application/json'},
	body: JSON.stringify(formData) 
	});

	const data = await response.json();
	console.log("OK FETCH RUNNING")
	console.log(data)
	const newForkInitResponse = JSON.parse(data)[0].fileSaved.toString().toLowerCase();
	console.log("OK FETCH RUNNING")
	console.log(data)
	if(newForkInitResponse === "changessaved") {
		setTimeout(()=> {
			hideSpinner()
			changesSaved()
			isSaving = false;
		}, 250)
		console.log(newForkInitResponse)
	}
	else if (newForkInitResponse === "usernotsignedin") {
		pleaseLogIn();
		console.log(newForkInitResponse)
	}
	else if (newForkInitResponse === "permissiondenied") {
		permissionDenied();
		console.log(newForkInitResponse)
	}
	setTimeout(()=> {
		isSaving = false;
	}, 250)
}

function directSaving(){
	if(window.location.href.toLowerCase().includes('codejs.com/opfCollab')){
        savePrivateCollab();
    }else if(window.location.href.toLowerCase().includes('codejs.com/opf')){
        savePrivateQodeJSFile();
    }
}


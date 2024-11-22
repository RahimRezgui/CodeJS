const popUpWindow = document.getElementById("overlayPopupWindow");
const formElement = document.querySelector(".formElement");
const overlayPopupWindow = document.getElementById("overlayPopupWindow");
const formHeading = document.querySelector(".formHeading");


async function getPrevImage(previewImage) {
	try{
			const saveFileId = document.getElementById('fileId').innerText;
			const userKey = localStorage.QJSKEY;
			const userId = localStorage.QJSID;
			const fileOGAuthorId = document.getElementById('fileAuthorId').innerText;
			const formData = {
				saveFileId,
				userKey,
				userId,
				fileAuthor,
				fileOGAuthorId,
				previewImage
			}
			const response = await fetch(`${window.location.origin}/getImagePreview?file=${saveFileId}`, {
				method: 'post',
				headers: {
					"Content-Type": 'application/json'
				},
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			const newForkInitResponse = JSON.parse(data)[0].fileSaved.toString().toLowerCase();
	}catch(error){
			console.log(error)
	}finally{
			isSaving = false;
			hideSpinner()
	}
}


async function capturePreviewImage() {
	goFullScreen();
	window.scrollTo(0, 0);
	try{
			html2canvas((iframe.contentWindow.document.getElementsByTagName("html")[0]), {
				scale: 0.20
			}).then(canvas => {
			previewImageData = canvas.toDataURL("image/jpeg", 100);
			getPrevImage(previewImageData);
			goSmallScreenShortcut()

			// setTimeout(() => {
			// 	hideSpinner()
			// 	changesSaved()
			// }, 500)
		});
	}catch(error){
		console.log(error);
	}finally{
			goSmallScreenShortcut();
			hideSpinner();
			changesSaved()
			isSaving = false;
	}

}


async function saveQodeJSFile() {


	let htmlToImage = "";
	if (localStorage.getItem('QJSKEY') === null) {
		pleaseLogIn();

		return
	} else {

		//isSaving = true;
		loadSpinner()

		if (!iframe.classList.contains("iframeDebug")) {
			iframe.classList.add("iframeDebug");
			iframeHost.classList.remove("iframeDebug");
			wasDebug = false;
		} else {
			iframe.classList.add("iframeDebug");
			iframeHost.classList.remove("iframeDebug");
			wasDebug = true;
		}

		iframe.classList.add("fullScreenIframe");
		await waitAlwaysForMs(100);

		if (mobileViewsWrapper.classList.contains("resultTabletViewWrapper")) {
			mobileViewsWrapper.classList.remove("resultTabletViewWrapper");
			iframe.classList.remove("iframeTablet");
			iframeHost.classList.remove("iframeTablet");
			mobileStatusBar.classList.add("hiddenResults");
			wasTablet = true;
		} else if (mobileViewsWrapper.classList.contains("resultMobileViewWrapper")) {
			mobileViewsWrapper.classList.remove("resultMobileViewWrapper");
			iframe.classList.remove("iframeMobile");
			iframeHost.classList.remove("iframeMobile");
			mobileStatusBar.classList.add("hiddenResults");
			wasMobile = true;
		}


		if (wasTablet === true) {
			mobileViewsWrapper.classList.add("resultTabletViewWrapper");
			iframe.classList.add("iframeTablet");
			iframeHost.classList.add("iframeTablet");
			mobileStatusBar.classList.remove("hiddenResults");
			wasTablet = false;
		} else if (wasMobile === true) {
			mobileViewsWrapper.classList.add("resultMobileViewWrapper");
			iframe.classList.add("iframeMobile");
			iframeHost.classList.add("iframeMobile");
			mobileStatusBar.classList.remove("hiddenResults");
			wasMobile = false;
		}

		const saveFileId = document.getElementById('fileId').innerText;

		const userKey = localStorage.QJSKEY;
		const userId = localStorage.QJSID;

		const fileOGAuthorId = document.getElementById('fileAuthorId').innerText;

		const saveHtmlData = htmlCodeEdit.innerText;
		const saveCssData = cssCodeEdit.innerText;
		const saveJsData = jsCodeEdit.innerText;
		const todoData = localStorage[thisFileId + 'todo-list'];
		const readMeTXTFile = document.getElementById("textbox").innerHTML;


		let projectDescription;
		let projectType;
		if ((saveJsData.length + saveHtmlData.length + saveCssData.length) <= 100) {
			projectDescription = "";
			projectType = "lowCount";
		} else if (saveJsData.length > saveHtmlData.length) {
			projectDescription = "JavaScript function & code example";
			projectType = "jscode";
		} else if (saveCssData.length > saveHtmlData.length) {
			projectDescription = "Pure CSS 3";
			projectType = "cssstyle";
		} else {
			projectDescription = "";
			projectType = "htmlbasic";
		}


		const librariesData = document.getElementById("librariesData").innerText;
		const customTagsData = document.getElementById("customTagsData").innerText;
		const fileKeywords = fileName + " " + readMeTXTFile + " " + librariesData + " " + projectDescription + " " + projectType;
		const bodyData = `<style>${scrollBarsHtmlStyle}</style><style>${css_code.innerText}</style>` + html_code.innerText + `<script>${js_code.innerText}</script>` +
			`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`;
		const hostData = bodyData;


		const saveDate = new Date().toISOString().slice(0, 10);

		iframe.classList.remove("fullScreenIframe");


		if (userId === fileOGAuthorId) {
			//resultHost.src = `https://code-javascript.com`;

			async function savePublicFile() {
				let previewImage = "https://codejs.com/img/folderImg.png";
				const formData = {
					projectDescription,
					projectType,
					hostData,
					saveFileId,
					fileName,
					userKey,
					userId,
					fileAuthor,
					fileOGAuthorId,
					saveHtmlData,
					fileKeywords,
					saveCssData,
					saveJsData,
					previewImage,
					librariesData,
					customTagsData,
					todoData,
					comments,
					saveDate,
					readMeTXTFile
				}

				const response = await fetch(`${window.location.origin}/qodejs?file=${saveFileId}`, {
					method: 'post',
					headers: {
						"Content-Type": 'application/json'
					},
					body: JSON.stringify(formData)
				});

				const data = await response.json();
				const newForkInitResponse = JSON.parse(data)[0].fileSaved.toString().toLowerCase();

				if (newForkInitResponse === "changessaved") {

					capturePreviewImage()

				} else if (newForkInitResponse === "usernotsignedin") {
					pleaseLogIn();
					isSaving = false;

				} else if (newForkInitResponse === "permissiondenied") {
					permissionDenied();
					isSaving = false;
				}
			}
			savePublicFile()



			// setTimeout(() => {
			// 	resultHost.src = `https://code-javascript.com/projects?file=${thisFileId}`;
			// }, 1000)
			// isSaving = false;
		} else {
			hideSpinner()
			permissionDenied();
			goSmallScreenShortcut()
			isSaving = false;
		}

	}

}



async function forkProject() {
	if (localStorage.getItem('QJSKEY') === null) {
		pleaseLogIn();
		return
	} else {
		loadSpinner()
		const forkFileId = document.getElementById('fileId').innerText;

		const userKey = localStorage.QJSKEY;;
		const userId = localStorage.QJSID;
		const userName = localStorage.QJSUSERNAME;
		const fileName = document.getElementById('fileName').innerText;
		let librariesData = document.getElementById('librariesData').innerText;
		if (librariesData.length <= 2) {
			librariesData = " No Third Party Libraries Required.";
		}

		const fileOGAuthorId = document.getElementById('fileAuthorId').innerText;

		const saveHtmlData = localStorage[thisFileId + 'html_code'];
		const saveCssData = localStorage[thisFileId + 'css_code'];
		const saveJsData = localStorage[thisFileId + 'js_code'];
		const todoData = localStorage[thisFileId + 'todo-list'];

		const saveDate = new Date().toISOString().slice(0, 10);

		if (localStorage.getItem('QJSKEY') != null) {


			async function forkSubmit(event) {
				//event.preventDefault();
				const formData = {
					forkFileId,
					fileName,
					userKey,
					userId,
					userName,
					fileAuthor,
					fileOGAuthorId,
					saveHtmlData,
					saveCssData,
					saveJsData,
					previewImage,
					librariesData,
					customTagsData,
					todoData,
					comments,
					saveDate,
					readMeTXTFile
				}

				const response = await fetch(`${window.location.origin}/forkProject?file=${forkFileId}`, {
					method: 'post',
					headers: {
						"Content-Type": 'application/json'
					},
					body: JSON.stringify(formData)
				});

				const newForkResponse = await response.json();



				const newForkInitResponse = JSON.parse(newForkResponse)[0].fileForked.toString().toLowerCase();

				if (newForkInitResponse === "newforksaved") {
					const newFileResponseId = JSON.parse(newForkResponse)[0].newFileId.toString().toLowerCase();

					lastForkedFile = newFileResponseId;
					setTimeout(() => {
						hideSpinner()
						loadForkSuccess()
					}, 800)


				} else if (newForkInitResponse === "usernotsignedin") {
					hideSpinner()
					pleaseLogIn();
					console.log(newForkResponse)
				} else if (newForkInitResponse === "permissiondenied") {
					hideSpinner()
					loadErrorMessage();
					console.log(newForkResponse)
				}
			}
			forkSubmit(event)




		} else {
			hideSpinner()
			pleaseLogIn();
		}

	}
}




async function logOut() {
	if (localStorage.getItem('QJSKEY') === null) {
		localStorage.clear();
		window.open(`${window.location.origin}/login`, "_self");
	}
	const logOutDate = new Date().toISOString().slice(0, 10);
	const logOutUserAgent = navigator.userAgent;
	const userKey = localStorage.QJSKEY;
	const userId = localStorage.QJSID;


	const formData = {
		userKey,
		userId,
		logOutDate,
		logOutUserAgent
	}

	const response = await fetch(`${window.location.origin}/logOut`, {
		method: 'post',
		headers: {
			"Content-Type": 'application/json'
		},
		body: JSON.stringify(formData)
	});

	const logOutResponse = await response.json();


	const logOutStatusResponse = JSON.parse(logOutResponse)[0].userSessionStatus.toString().toLowerCase();

	if (logOutStatusResponse === "loggedout") {
		localStorage.clear();
		window.open(`${window.location.origin}/login`, "_self");
	} else if (logOutStatusResponse === "logouterror") {
		console.log(logOutResponse)
	} else if (logOutStatusResponse === "userNotFound") {
		console.log(logOutResponse)
	}
}





function newPublicFileInit() {
	formHeading.innerText = "Name your file."
	popUpWindow.classList.add("fadeInLight")
	popUpWindow.classList.add("visibleSuccessWrapper")
	overlayPopupWindow.classList.add("visibleSuccessWrapper")
}

function publicFileSubmit(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		newPublicFile()
	}
}


function closeFunctionPopup() {
	popUpWindow.classList.remove("fadeInLight")
	popUpWindow.classList.remove("visibleSuccessWrapper")
	overlayPopupWindow.classList.remove("visibleSuccessWrapper")
}


async function newPublicFile() {
	if (localStorage.getItem('QJSKEY') === null) {
		pleaseLogIn();
		console.log("You must be logged in to access this feature.")
		return
	}
	closeFunctionPopup()
	loadSpinner()
	const userKey = localStorage.QJSKEY;
	const userId = localStorage.QJSID;
	const userName = fileAuthor;
	const newFileName = document.getElementById('newFileNameInput').value;
	const saveDate = new Date().toISOString().slice(0, 10);
	const formData = {
		userKey,
		userId,
		saveDate,
		userName,
		newFileName
	}

	const response = await fetch(`${window.location.origin}/newPublicFile`, {
		method: 'post',
		headers: {
			"Content-Type": 'application/json'
		},
		body: JSON.stringify(formData)
	});

	const newFileResponse = await response.json();


	const newFileInitResponse = JSON.parse(newFileResponse)[0].fileSaved.toString().toLowerCase();

	if (newFileInitResponse === "newpublicfile") {
		const newFileResponseId = JSON.parse(newFileResponse)[0].newFileId.toString().toLowerCase();
		lastNewFile = newFileResponseId;
		setTimeout(() => {
			hideSpinner()
			loadNewFileSuccess()
		}, 800)

	} else if (newFileInitResponse === "usernotsignedin") {
		loadErrorMessage()

	} else if (newFileInitResponse === "permissiondenied") {
		loadErrorMessage()

	}
}


function downloadFile() {
		const timestamp = Date.now();
		loadSpinner()
		let downloadFileName = timestamp + "-CodeJS.html"
		let fileText = `
						<!DOCTYPE html>
						<html lang="en">
  							<head>
    						<meta charset="UTF-8">
   							<meta name="viewport" content="width=device-width, initial-scale=1.0">
    						<meta http-equiv="X-UA-Compatible" content="ie=edge">
    						<title>CodeJS - ${fileName}</title>
    						<script src="https://kit.fontawesome.com/56241df76a.js" crossorigin="anonymous"></script>
    						<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    						<link rel="stylesheet" href="style.css">
  							</head>
 						<body>
							<style>${scrollBarsHtmlStyle}</style>
							<style>${localStorage[thisFileId+'css_code']}</style>` +
			localStorage[thisFileId + 'html_code'] +
			`<script>${localStorage[thisFileId+'js_code']}</script>` +
			`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
                            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
							<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
 						</body>
						</html>
						`
		const codeDLBeautified = html_beautify(fileText)
		downloadReady(downloadFileName, codeDLBeautified);

}

function downloadReady(downloadFileName, fileText) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
	element.setAttribute('download', downloadFileName);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
	hideSpinner()
}
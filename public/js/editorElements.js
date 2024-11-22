const popupContainer = document.getElementById('popupContainer'); 
const popupWindow = document.getElementById('popupWindow');
const popupTodo = document.getElementById('popupTodo');
const popupEditorFontSize = document.querySelector('.popupEditorFontSize');
const popupEditorThemeSelection = document.getElementById('popupEditorThemeSelection'); 
const popupPreferencesSelection = document.getElementById('popupPreferencesSelection'); 
const codeEditor = document.getElementById('codeEditor');
const editingElement = document.querySelectorAll('#editing');
const highlightingElement = document.querySelectorAll('#highlighting');
const highlightWordElement = document.querySelectorAll('.bracketsTextArea');
const allHighlightingElement = document.querySelectorAll('#highlighting *');
const mainSettingsWindow = document.querySelector('#mainSettingsWindow');
const mainSettingsWrapperBlur = document.querySelector('#mainSettingsWrapperBlur');
const mainSettingsWrapper = document.querySelector('#mainSettingsWrapper');
const readMeTxt = document.querySelector('.readMeTXTFile');
const loggerBtnWrapperBox = document.getElementById("loggerBtnWrapper");
const headerWrapper = document.getElementById("header");
const sideNavigation = document.getElementById("sideNavigation");
let lineNumbersElement = document.querySelectorAll('.lineNumbers');
let radioItems = document.querySelectorAll(".radio__item");
let themeOptionsItems = document.querySelectorAll(".opSelectTheme");
let uiThemeOptionsItems = document.querySelectorAll(".uiSelectTheme");
let uiSearchOptionsItems = document.querySelectorAll(".uiSelectSearch");
let shortcutsWrapper = document.getElementById("shortcutsWrapper");
let moreResW = document.querySelector(".moreResourcesWrapper");
let loggerBtnWrapper = document.getElementById("loggerBtnWrapper");


/*const bc = new BroadcastChannel('CodeJS_Channel');
(()=>{
  const dashboardRedirect = document.querySelector(".dashboardRedirect");
  const dashboardLogout = document.querySelector(".dashboardLogout");
  bc.onmessage = (messageEvent) => {
    if (messageEvent.data === 'logout_successfull') {
      localStorage.setItem("lastMessage", messageEvent.data);
    } else if (messageEvent.data === 'focus_successfull'){
    	localStorage.setItem("lastMessage", messageEvent.data);
    }
  }
  dashboardLogout.onclick = (e) => {
  	let action = "focus";
  	bc.postMessage('windowDC');
  	setTimeout(()=>{
  		window.open(`${window.location.origin}/dashboard?id=${localStorage.getItem("QJSID")}`, "Dashboard_CJS");
    }, 100)
  	clearMessagesStorage()
    self.blur()
    window.blur()
    bc.postMessage('window_focus');
  }

  dashboardRedirect.onclick = (e) => {
  	let action = "logout";
  	setTimeout(()=>{
    	checkResponse(action)
    }, 400)
  	clearMessagesStorage()
    bc.postMessage('logout_redirect');
    
  }
})();*/

/*function checkResponse(action){
		if(localStorage.getItem("lastMessage") == null){
			if(action == "focus"){
				window.open(`${window.location.origin}/dashboard?id=${localStorage.getItem("QJSID")}`, "Dashboard_CJS");
			}
		}else if(action == "logout"){
			  let dash = window.open(`${window.location.origin}/dashboard?id=${localStorage.getItem("QJSID")}`, "_blank");
			  self.focus()
			  dashboardRedirect.click()
		}
}*/


function clearMessagesStorage(){
	localStorage.removeItem("lastMessage");
}


function showMoreRes(){
	moreResW.classList.add("showMoreRes");
}

function hideMoreRes(){
	moreResW.classList.remove("showMoreRes");
}

/*function debugMode(){
	resultHost.src = `https://code-javascript.com`;
	resultHost.src = `https://code-javascript.com/projects?file=${thisFileId}`;
	if(!iframe.classList.contains("iframeDebug")){
		iframe.classList.add("iframeDebug");
		iframeHost.classList.remove("iframeDebug");
		isDebug = true;
	}else{
		iframe.classList.remove("iframeDebug");
		iframeHost.classList.add("iframeDebug");
		isDebug = false;
	}
}*/

function runPreferencesOnLoad(){
	const enableSearchPref = localStorage.getItem("enableWebSearch") || "false";
	const searchResultPref = localStorage.getItem("preferredSearch") || "false";
	const maxCodePref = localStorage.getItem("maxCodeSizePref") || "false";
	const fontSizePref = Number(localStorage.getItem("QJSTXTSIZE")) || 2;
	const savedThemePref = localStorage.getItem("theme") || "false";
	const prismThemePref = localStorage.getItem("prismTheme") || "Solarized";
	const autocompletePref = localStorage.getItem("enableAutocomplete") || "true";
	const autoRunJSPref = localStorage.getItem("autoRunJS") || "true";
	const enableSideBarPref = localStorage.getItem("expandSideMenuPref") || "false";

	if(fontSizePref != "false"){
		radioItems.forEach((item)=>{
			item.classList.remove("is-active");
		});
		document.querySelector(".radio__item"+fontSizePref).classList.add("is-active");
	};

	if(prismThemePref){
		themeOptionsItems.forEach((opItem)=>{
			if(opItem.innerText == prismThemePref){
				opItem.setAttribute('selected', 'selected');
			}
			else{
				opItem.removeAttribute('selected');
			}
		});
	};

	if(savedThemePref != "false"){
		uiThemeOptionsItems.forEach((uiopItem)=>{
			if(uiopItem.innerText.toLowerCase() == savedThemePref){
				uiopItem.setAttribute('selected', 'selected');
			}
			else{
				uiopItem.removeAttribute('selected');
			}
		});
	};

	if(searchResultPref != "false"){
		uiSearchOptionsItems.forEach((shopItem)=>{
			if(shopItem.innerText == searchResultPref){
				shopItem.setAttribute('selected', 'selected');
			}
			else{
				shopItem.removeAttribute('selected');
			}
		});
	};

	if(autocompletePref != "false"){
		document.getElementById("autocompleteToggle").classList.add("is-on");
	}

	if(autoRunJSPref != "false"){
		document.getElementById("autoRunJsToggle").classList.add("is-on");
	}

	if(enableSideBarPref != "false"){
		document.getElementById("expandMenuToggle").classList.add("is-on");
	}

	if(maxCodePref != "false"){
		maxEditorSpace()
		document.getElementById("maxEditorToggle").classList.add("is-on");
	};

	if(enableSearchPref != "false"){
		document.getElementById("webSearchToggle").classList.add("is-on");
	};
}
function maxEditorSpace(){
	if(codeEditor.classList.contains("maxCodeEditor")){
		moreOptionsBtn.forEach((opBtn) => {
			opBtn.classList.remove("maxOptionsBtn");
		});
		tabsToggles.forEach((tabToggle) => {
			tabToggle.classList.remove("maxTabsToggle");
		});
		codeEditor.classList.remove("maxCodeEditor");
		tabsBody.classList.remove("maxTabsBody");
		tabsHead.classList.remove("maxTabsHead");
		loggerWrapper.classList.remove("maxLoggerWrapper");
		loggerBtnWrapperBox.classList.remove("maxLoggerWrapper"); sideNavigation
		headerWrapper.style.boxShadow = "4px 0px 5px rgba(0,0,0,.1)";
		sideNavigation.style.boxShadow = "0px 4px 5px rgba(0,0,0,.1)";
		resultPreviewWrapper.classList.remove("maxResultPreview");
		localStorage.setItem("maxCodeSizePref", "false");
	}else{
		moreOptionsBtn.forEach((opBtn) => {
			opBtn.classList.add("maxOptionsBtn");
		});
		tabsToggles.forEach((tabToggle) => {
			tabToggle.classList.add("maxTabsToggle");
		});
		codeEditor.classList.add("maxCodeEditor");
		tabsBody.classList.add("maxTabsBody");
		tabsHead.classList.add("maxTabsHead");
		loggerWrapper.classList.add("maxLoggerWrapper");
		loggerBtnWrapperBox.classList.add("maxLoggerWrapper");
		headerWrapper.style.boxShadow = "none";
		sideNavigation.style.boxShadow = "none";
		resultPreviewWrapper.classList.add("maxResultPreview");
		localStorage.setItem("maxCodeSizePref", "true");
	}
	
}


/*function dashboardRedirect(event){
	event.preventDefault()
	const userId = localStorage.QJSID;
	const url = `${window.location.origin}/dashboard?id=${userId}`;
	dashW = window.open(url, "_top").focus();
}

function logoutRedirect(event){
	event.preventDefault()
	dashW = window.open(url, "_top");
	dashW.document.getElementById("logOutSideBarBtn").click();
	dashW.focus()
}


async function logOut() {
	const logOutDate = new Date().toISOString().slice(0, 10);
	const logOutUserAgent = navigator.userAgent;
	const userKey = localStorage.QJSKEY;
	const userId = localStorage.QJSID;
	const formData = {userKey, userId, logOutDate, logOutUserAgent}

    const response = await fetch (`${window.location.origin}/logOut`, { 
        	method: 'post', 
        	headers: {"Content-Type": 'application/json'},
        	body: JSON.stringify(formData) 
    	});
    const logOutResponse = await response.json();
    const logOutStatusResponse = JSON.parse(logOutResponse)[0].userSessionStatus.toString().toLowerCase();
    if(logOutStatusResponse === "loggedout") {
    	localStorage.clear();
    	window.open(`${window.location.origin}/login`, "_self")
    }
    else if (logOutStatusResponse === "logouterror") {
    	console.log(logOutResponse)
    }
    else if (logOutStatusResponse === "userNotFound") {
    	console.log(logOutResponse)
    }
}*/


function expandSideBarPref(sideBarToggle){ 
	const enableSideBar = localStorage.getItem("expandSideMenuPref");
	if(enableSideBar == "false"){
		if(sideBarToggle.classList.contains("sideBarVisible")){
			localStorage.setItem("expandSideMenuPref", "false");
			sideBarToggle.classList.remove("sideBarVisible");
			sideBarToggle.classList.remove("is-on");
		}else{
			localStorage.setItem("expandSideMenuPref", "true");
			sideBarToggle.classList.add("sideBarVisible");
		}
	}else{
		if(enableSideBar == "true"){
			localStorage.setItem("expandSideMenuPref", "false");
			sideBarToggle.classList.remove("sideBarVisible");
		}else{
			localStorage.setItem("expandSideMenuPref", "true");
			sideBarToggle.classList.add("sideBarVisible");
		}
	}
}



function autoRunJSDelay(timerInput){
	timerValue = Number(timerInput.value) * 1000;
	localStorage.setItem("runJSTiming", timerValue);
}

function enableAutocomplete(autocompleteToggle){
	const autocomplete = localStorage.getItem("enableAutocomplete");
	if(autocomplete == null){
		if(autocompleteToggle.classList.contains("is-on")){
			localStorage.setItem("enableAutocomplete", "false");
		}else{
			localStorage.setItem("enableAutocomplete", "true");
		}
	}else if(autocomplete != null){
		if(autocomplete == "true"){
			localStorage.setItem("enableAutocomplete", "false");
		}else{
			localStorage.setItem("enableAutocomplete", "true");
		}
	}
}



function autoRunJSPref(autoRunJSToggle){
	const autoRunJS = localStorage.getItem("autoRunJS");
	if(autoRunJS == null){
		if(autoRunJSToggle.classList.contains("is-on")){
			localStorage.setItem("autoRunJS", "false");
		}else{
			localStorage.setItem("autoRunJS", "true");
		}
	}else{
		if(autoRunJS == "true"){
			localStorage.setItem("autoRunJS", "false");
		}else{
			localStorage.setItem("autoRunJS", "true");
		}
	}
}




function setSearchPref(searchPref){
	const searchPrefValue = searchPref.innerText;
	localStorage.setItem("preferredSearch", searchPrefValue);
}



function enableWebSearch(searchToggle){
	const enableSearch = localStorage.getItem("enableWebSearch");
	if(enableSearch == null){
		if(searchToggle.classList.contains("is-on")){
			localStorage.setItem("enableWebSearch", "false");
		}else{
			localStorage.setItem("enableWebSearch", "true");
		}
	}else{
		if(enableSearch == "true"){
			localStorage.setItem("enableWebSearch", "false");
		}else{
			localStorage.setItem("enableWebSearch", "true");
		}
	}
}



function updateOsCss(){
	let userAgent = navigator.userAgent;
	let iFrameHead = document.getElementsByTagName('head')[0];
}



function openConsole(){
	/*let qodeIFrame = iframe.contentDocument;
  let qodeIFrameBody = qodeIFrame.getElementsByTagName('body').item(0);
  qodeIFrameBody.appendChild(consoleScript);	*/
	if(loggerWrapper.classList.contains("consoleVisible")){
		loggerWrapper.classList.remove("consoleVisible");
		loggerBtnWrapper.classList.remove("loggerBtnVisible");
		tabsBody.classList.remove("tabsBodyConsoleVisible");
	}else{
		loggerWrapper.classList.add("consoleVisible");
		loggerBtnWrapper.classList.add("loggerBtnVisible");
		tabsBody.classList.add("tabsBodyConsoleVisible");
	}
}
function clearConsole(){
	document.getElementById("logger").innerHTML = "";
}

function closeShortcuts(event){
	if(event.target.classList.contains("shortcutsWrapper")){
		openShortcuts();	
	}else{
		return
	}
}


function openShortcuts(){
	if(shortcutsWrapper.classList.contains("hiddenResults")){
		shortcutsWrapper.classList.remove("hiddenResults")
	}
	else{
		shortcutsWrapper.classList.add("hiddenResults")
	}
}

function runHtmlLines(){
	let htmlCodeEditHeight = htmlCodeEdit.scrollHeight;
	let trueLinesNumber = htmlCodeEdit.innerText.split(/\r?\n/).length; 
	if(htmlLineNumbers.scrollHeight/lineHeight != trueLinesNumber){
        let lines = trueLinesNumber;
        htmlLineNumbers.innerHTML = ` `;
        for (let codeLines = 1; codeLines < trueLinesNumber; codeLines++) {
            htmlLineNumbers.innerHTML += `<span> ${codeLines} </span>`;
        }
    }
}

function runCssLines(){
	let cssCodeEditHeight = cssCodeEdit.scrollHeight;
	if(cssLineNumbers.scrollHeight != cssCodeEditHeight){
        let lines = cssCodeEditHeight/lineHeight;
        cssLineNumbers.innerHTML = ` `;
        for (let codeLines = 1; codeLines < lines; codeLines++) {
            cssLineNumbers.innerHTML += `<span> ${codeLines} </span>`;
        }
    }
}

function runJsLines(){
	let jsCodeEditHeight = jsCodeEdit.scrollHeight;
	if(jsLineNumbers.scrollHeight != jsCodeEditHeight){
        let lines = jsCodeEditHeight/lineHeight;
        jsLineNumbers.innerHTML = ` `;
        for (let codeLines = 1; codeLines < lines; codeLines++) {
            jsLineNumbers.innerHTML += `<span> ${codeLines} </span>`;
        }
    }
}
function openPopupWindow() {
	codeEditor.classList.add("openPopupEditor");
	popupContainer.style.visibility = "visible";
	popupContainer.style.opacity = "1";
	popupWindow.style.visibility = "visible"; 
	popupWindow.style.opacity = "1";
};

function closePopupWindow() {
	codeEditor.classList.remove ("openPopupEditor");
	popupContainer.style.visibility = "hidden";
	popupContainer.style.opacity = "0";
	popupWindow.style.visibility = "hidden";
	popupWindow.style.opacity = "0";
}; popupEditorFontSize

function openPopupEditorFontSizeWindow() {
	popupContainer.style.visibility = "visible";
	popupContainer.style.opacity = "1";
	popupEditorFontSize.style.visibility = "visible";
	popupEditorFontSize.style.opacity = "1";
};

function closePopupEditorFontSizeWindow() {
	popupContainer.style.visibility = "hidden";
	popupContainer.style.opacity = "0";
	popupEditorFontSize.style.visibility = "hidden";
	popupEditorFontSize.style.opacity = "0";
};

function openPopupEditorThemeSelectionWindow() {
	popupContainer.style.visibility = "visible";
	popupContainer.style.opacity = "1";
	popupEditorThemeSelection.style.visibility = "visible";
	popupEditorThemeSelection.style.opacity = "1";
};

function closePopupEditorThemeSelectionWindow() {
	popupContainer.style.visibility = "hidden";
	popupContainer.style.opacity = "0";
	popupEditorThemeSelection.style.visibility = "hidden";
	popupEditorThemeSelection.style.opacity = "0";
};

function openPopupPreferencesWindow() {
	popupContainer.style.visibility = "visible";
	popupContainer.style.opacity = "1";
	mainSettingsWindow.classList.add("visibleSettingsWindow");
	mainSettingsWrapperBlur.classList.add("visibleSettingsWrapperBlur");
	mainSettingsWrapper.classList.add("visibleSettingsWrapper");
};

function closePopupPreferencesWindow() {
	popupContainer.style.visibility = "hidden";
	popupContainer.style.opacity = "0";
	mainSettingsWindow.classList.remove("visibleSettingsWindow");
	mainSettingsWrapperBlur.classList.remove("visibleSettingsWrapperBlur");
	mainSettingsWrapper.classList.remove("visibleSettingsWrapper");
};

function openTodoWindow() {
	codeEditor.classList.add("openPopupEditor");
	popupContainer.style.visibility = "visible";
	popupContainer.style.opacity = "1";
	popupTodo.style.visibility = "visible";
	popupTodo.style.opacity = "1";
};

function closeTodoWindow() {
	codeEditor.classList.remove ("openPopupEditor");
	popupContainer.style.visibility = "hidden";
	popupContainer.style.opacity = "0";
	popupTodo.style.visibility = "hidden";
	popupTodo.style.opacity = "0";
};


function initLibrariesOnLoad() {
	if(librariesData.innerText !== null && librariesData.innerText !== undefined) {
		let libraries = librariesData.innerText.split(",");
		libraries =  libraries.filter((item, index) => libraries.indexOf(item) === index);

		libraries.forEach(function(library){

			switch(library){
			case "bootstrap4Links":
			document.querySelector(".bootstrap4Links").click();
			document.querySelector('.bootstrap4LinksToggleElement').classList.add("activeLibrary");
			addBootstrap4Scripts();
			break;
			case "bootstrap5Links":
			document.querySelector(".bootstrap5Links").click();
			document.querySelector('.bootstrap5LinksToggleElement').classList.add("activeLibrary");
			addBootstrap5Scripts();
			break;
			case "reactLinks":
			document.querySelector(".reactLinks").click();
			document.querySelector('.reactLinksToggleElement').classList.add("activeLibrary");
			addReactScripts();
			break;
			case "jQueryLinks":
			document.querySelector(".jQueryLinks").click();
			document.querySelector('.jQueryLinksToggleElement').classList.add("activeLibrary");
			addJQueryScripts();
			break;
			case "tailwindLinks":
			document.querySelector(".tailwindLinks").click();
			document.querySelector('.tailwindLinksToggleElement').classList.add("activeLibrary");
			addTailwindScripts();
			break;
			case "vueLinks":
			document.querySelector(".vueLinks").click();
			document.querySelector('.vueLinksToggleElement').classList.add("activeLibrary");
			addVueScripts();
			}
		});
	}
}


function scriptValidator(element) {
	let validatedScript = iframe.contentDocument.getElementById(element.name);
	if(typeof(validatedScript) != 'undefined' && validatedScript != null){
		document.querySelector('.' + element.name + 'ToggleElement').classList.remove("activeLibrary");
		removeScripts(element)
	}
	else{
		let initScriptValue = element.name;
		switch(initScriptValue){
			case "bootstrap4Links":
			addBootstrap4Scripts();
			document.querySelector('.bootstrap4LinksToggleElement').classList.add("activeLibrary");
			librariesData.innerText += initScriptValue+",";
			break;
			case "bootstrap5Links":
			addBootstrap5Scripts();
			document.querySelector('.bootstrap5LinksToggleElement').classList.add("activeLibrary");
			librariesData.innerText += initScriptValue+",";
			
			break;
			case "reactLinks":
			addReactScripts();
			document.querySelector('.reactLinksToggleElement').classList.add("activeLibrary");
			
			librariesData.innerText += initScriptValue+",";
			break;
			case "jQueryLinks":
			addJQueryScripts();
			document.querySelector('.jQueryLinksToggleElement').classList.add("activeLibrary");
			
			librariesData.innerText += initScriptValue+",";
			break;
			case "tailwindLinks":
			addTailwindScripts();
			document.querySelector('.tailwindLinksToggleElement').classList.add("activeLibrary");
			librariesData.innerText += initScriptValue+",";
			break;
			case "vueLinks":
			addVueScripts();
			document.querySelector('.vueLinksToggleElement').classList.add("activeLibrary");
			librariesData.innerText += initScriptValue+",";
		}
	}
};

function saveCustomScripts() {
	const customHeadScriptBox = document.getElementById('customHeadScriptBox');
	const customBodyScriptsheetBox = document.getElementById('customBodyScriptsheetBox');
	const customScriptsButton = document.querySelector('.customScriptsButton');
	const qodeIFrame = iframe.contentDocument;
    let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
    let qodeIFrameBody = qodeIFrame.getElementsByTagName('body').item(0); 
    if(customHeadScriptBox.value.length > 0 && customBodyScriptsheetBox.value.length > 0){
    	qodeIFrameHead.append(customHeadScriptBox.value);
    	qodeIFrameBody.append(customBodyScriptsheetBox.value);
    }
    else if(customHeadScriptBox.value.length > 0 && customBodyScriptsheetBox.value.length <= 0) {
    	qodeIFrameHead.append(customHeadScriptBox.value);
	    }
	  else if(customHeadScriptBox.value.length <= 0 && customBodyScriptsheetBox.value.length > 0) {
    	qodeIFrameBody.append(customBodyScriptsheetBox.value);
    } 	
}



function changeFontSizeOnClick(fontSizeElement){
	let newTextSizeValue = fontSizeElement.id;
	localStorage.setItem("QJSTXTSIZE", newTextSizeValue);
	switch (newTextSizeValue) {
		case "1":
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "12px";
		    editElement.style.lineHeight = "15px";
		});
		highlightingElement.forEach(highlightElement => { 
			highlightElement.style.fontSize = "12px";
			highlightElement.style.lineHeight = "15px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "12px";
			allHighlightElement.style.lineHeight = "15px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "12px";
			highlightWordElement.style.lineHeight = "15px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "12px";
			lineNumberElement.style.lineHeight = "15px";
		});
		runHtmlLines();
		runCssLines();
		runJsLines();
		break;

		case "2":
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "13px";
		  editElement.style.lineHeight = "17px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "13px";
			highlightElement.style.lineHeight = "17px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "13px";
			allHighlightElement.style.lineHeight = "17px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "13px";
			highlightWordElement.style.lineHeight = "17px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "13px";
			lineNumberElement.style.lineHeight = "17px";
		});
		runHtmlLines();
		runCssLines();
		runJsLines();
		break;

		case "3":
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "14px";
		  editElement.style.lineHeight = "18px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "14px";
			highlightElement.style.lineHeight = "18px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "14px";
			allHighlightElement.style.lineHeight = "18px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "14px";
			highlightWordElement.style.lineHeight = "18px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "14px";
			lineNumberElement.style.lineHeight = "18px";
		});
		runHtmlLines();
		runCssLines();
		runJsLines();
		break;

		case "4":
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "15px";
		  editElement.style.lineHeight = "19px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "15px";
			highlightElement.style.lineHeight = "19px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "15px";
			allHighlightElement.style.lineHeight = "19px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "15px";
			highlightWordElement.style.lineHeight = "19px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "15px";
			lineNumberElement.style.lineHeight = "19px";
		});
		runHtmlLines();
		runCssLines();
		runJsLines();
		break;

		case "5":
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "16px";
		  editElement.style.lineHeight = "20px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "16px";
			highlightElement.style.lineHeight = "20px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "16px";
			allHighlightElement.style.lineHeight = "20px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "16px";
			highlightWordElement.style.lineHeight = "20px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "16px";
			lineNumberElement.style.lineHeight = "20px";
		});
		runHtmlLines();
		runCssLines();
		runJsLines();
		//break;
	}
}


function changeFontSizeOnLoad(){
	let newTextSizeValue = Number(localStorage.QJSTXTSIZE) || 2;
	document.querySelector(".fontSizeInputSlider").value = newTextSizeValue;
	switch (newTextSizeValue) {
		case 1:
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "12px";
		  editElement.style.lineHeight = "15px";
		});
		highlightingElement.forEach(highlightElement => { 
			highlightElement.style.fontSize = "12px";
			highlightElement.style.lineHeight = "15px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "12px";
			allHighlightElement.style.lineHeight = "15px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "12px";
			highlightWordElement.style.lineHeight = "15px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "12px";
			lineNumberElement.style.lineHeight = "15px";
		});
		break;

		case 2:
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "13px";
		  editElement.style.lineHeight = "17px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "13px";
			highlightElement.style.lineHeight = "17px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "13px";
			allHighlightElement.style.lineHeight = "17px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "13px";
			highlightWordElement.style.lineHeight = "17px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "13px";
			lineNumberElement.style.lineHeight = "17px";
		});
		lineHeight = 17;
		break;

		case 3:
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "14px";
		  editElement.style.lineHeight = "18px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "14px";
			highlightElement.style.lineHeight = "18px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "14px";
			allHighlightElement.style.lineHeight = "18px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "14px";
			highlightWordElement.style.lineHeight = "18px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "14px";
			lineNumberElement.style.lineHeight = "18px";
		});
		lineHeight = 18;
		break;

		case 4:
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "15px";
		  editElement.style.lineHeight = "19px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "15px";
			highlightElement.style.lineHeight = "19px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "15px";
			allHighlightElement.style.lineHeight = "19px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "15px";
			highlightWordElement.style.lineHeight = "19px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "15px";
			lineNumberElement.style.lineHeight = "19px";
		});
		lineHeight = 19;
		break;

		case 5:
		editingElement.forEach(editElement => {
			editElement.style.fontSize = "16px";
		  editElement.style.lineHeight = "20px";
		});
		highlightingElement.forEach(highlightElement => {
			highlightElement.style.fontSize = "16px";
			highlightElement.style.lineHeight = "20px";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontSize = "16px";
			allHighlightElement.style.lineHeight = "20px";
		});
		highlightWordElement.forEach(highlightWordElement => { 
			highlightWordElement.style.fontSize = "16px";
			highlightWordElement.style.lineHeight = "20px";
		});
		lineNumbersElement.forEach(lineNumberElement => { 
			lineNumberElement.style.fontSize = "16px";
			lineNumberElement.style.lineHeight = "20px";
		});
		lineHeight = 20;
	}
}

changeFontSizeOnLoad();

function changeFontWeight(fontWeightInputSlider){
	let newTextWeightValue = fontWeightInputSlider.value;
	switch (newTextWeightValue) {
		case 1:
		editingElement.forEach(editElement => {
			editElement.style.fontWeight = "100";
		});
		highlightingElement.forEach(highlightElement => { 
			highlightElement.style.fontWeight = "100";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontWeight = "100";
		});
		break;

		case 2:
		editingElement.forEach(editElement => {
			editElement.style.fontWeight = "300";
		});
		highlightingElement.forEach(highlightElement => { 
			highlightElement.style.fontWeight = "300";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontWeight = "300";
		});
		break;

		case 3:
		editingElement.forEach(editElement => {
			editElement.style.fontWeight = "700";
		});
		highlightingElement.forEach(highlightElement => { 
			highlightElement.style.fontWeight = "700";
		});
		allHighlightingElement.forEach(allHighlightElement => { 
			allHighlightElement.style.fontWeight = "700";
		});
	}
}
// End of range sliders JS logic //
// Beginning of dropdown settings logic //
//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');
//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  //Get inner elements from each dropdown
  const select = dropdown.querySelector('.selectFont');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  //Add a click event to the select element
  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  
  //Loop through all option elements
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
// End of dropdown loginc //
// Beginning of prism theme selection //
function changePrismTheme(selectionElement){
	const savedTheme = localStorage.getItem("theme");
	let selectedPrismTheme = event.target.value;//selectionElement.innerText;
	let prismThemeLink = document.getElementById('prismCssLink');
	localStorage.setItem("prismTheme", selectedPrismTheme);
	switch (selectedPrismTheme) {
		case "Tomorrow":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismTomorrowNight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismTomorrowNight.css"
		}
		break;

		case "Morning":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismDefaultLight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismDefaultLight.css"
		}
		break;

		case "Solarized":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismSolarLight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismSolarLight.css"
		}
		break;

		case "Funky":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismFunkyDark.css"
		}
		else{
			prismThemeLink.href = "css/lightprismFunkyDark.css"
		}
		break;

		case "Okaidia":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismOkaidiaDark.css"
		}
		else{
			prismThemeLink.href = "css/lightprismOkaidiaDark.css"
		}
		break;

		default:
			prismThemeLink.href = `css/${selectedPrismTheme.toLowerCase()}.css`;
	}
}

function changePrismThemeOnLoad(){
	const savedTheme = localStorage.getItem("theme");
	let selectedPrismTheme = localStorage.getItem("prismTheme") || "VSC-Dark";
	let prismThemeLink = document.getElementById('prismCssLink');
	switch (selectedPrismTheme) {
		case "Tomorrow":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismTomorrowNight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismTomorrowNight.css"
		}
		break;

		case "Morning":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismDefaultLight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismDefaultLight.css"
		}
		break;

		case "Solarized":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismSolarLight.css"
		}
		else{
			prismThemeLink.href = "css/lightprismSolarLight.css"
		}
		break;

		case "Funky":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismFunkyDark.css"
		}
		else{
			prismThemeLink.href = "css/lightprismFunkyDark.css"
		}
		break;

		case "Okaidia":
		if(savedTheme == "dark"){
			prismThemeLink.href = "css/prismOkaidiaDark.css"
		}
		else{
			prismThemeLink.href = "css/lightprismOkaidiaDark.css"
		}
		break;

		default:

			prismThemeLink.href = `css/${selectedPrismTheme.toLowerCase()}.css`;

	}

}




function changeFontTheme(selectionElement){

	let fontTheme = event.target.value;
	let fontThemeLink = document.getElementById('fontCssLink');
	
	localStorage.setItem("fontTheme", fontTheme);
	switch (fontTheme) {
		case "Hack":
			fontThemeLink.href = "css/fontThemeHack.css"
		break;

		case "Source Code Pro":
			fontThemeLink.href = "css/fontThemeSourceCode.css"
		break;

		case "Fira Mono":
			fontThemeLink.href = "css/fontThemeFiraMono.css"
		break;

		case "Ubuntu Mono":
			fontThemeLink.href = "css/fontThemeUbuntuMono.css"
		break;

		case "Courier New":
			fontThemeLink.href = "css/fontThemeCourierNew.css"
		break;

		case "MonoSpace":
			fontThemeLink.href = "css/fontThemeMonoSpace.css"
		break;

		case "Anonymous Pro":
			fontThemeLink.href = "css/fontThemeAnonymousPro.css"
	}
}
function changeFontThemeOnLoad(){

	let fontTheme = localStorage.getItem("fontTheme");
	let fontThemeLink = document.getElementById('fontCssLink');
	switch (fontTheme) {
		case "Hack":
			fontThemeLink.href = "css/fontThemeHack.css"
		break;

		case "Source Code Pro":
			fontThemeLink.href = "css/fontThemeSourceCode.css"
		break;

		case "Fira Mono":
			fontThemeLink.href = "css/fontThemeFiraMono.css"
		break;

		case "Ubuntu Mono":
			fontThemeLink.href = "css/fontThemeUbuntuMono.css"
		break;

		case "Courier New":
			fontThemeLink.href = "css/fontThemeCourierNew.css"
		break;

		case "MonoSpace":
			fontThemeLink.href = "css/fontThemeMonoSpace.css"
		break;

		case "Anonymous Pro":
			fontThemeLink.href = "css/fontThemeAnonymousPro.css"
	}
}


let targetEl;
function checkForClose(element, ev){

	if(ev.target.classList.contains("mainSettingsWindow") || ev.explicitOriginalTarget.classList.contains("mainSettingsWindow")){
		closePopupPreferencesWindow()	
	}else{
		return
	}
}

function closeAllPopups(element, ev){

	if(ev.target.classList.contains("popupContainer") || ev.explicitOriginalTarget.classList.contains("popupContainer")){
		closeTodoWindow();
		closePopupWindow()
	}else{
		return
	}
}






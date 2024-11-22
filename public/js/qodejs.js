let htmlSortedNames = htmlNames.sort((a, b)=> a.trim().length - b.trim().length);
let jsSortedNames = jsNames.sort((a, b)=> a.trim().length - b.trim().length);
let cssSortedNames = cssNames.sort((a, b)=> a.trim().length - b.trim().length);
let jsSortedMethods = methodsN.sort((a, b)=> a.trim().length - b.trim().length);
let cssSortedValues = css_values.sort((a, b)=> a.trim().length - b.trim().length);
let htmlVars;
let cssVars;
let jsVars;
let lastForkedFile;
let lastNewFile;
let lastSelection;
let lastSelectionClass;
let ogq;
let r;
let g;
let q;
let isMobileDevice;
let lastCodeWord;
let preceding;
let lineHeight = 20;
let htmlScriptTags;
let htmlCssLinks;
let updateToSelection;
let updateToSelectionChild;
let jsUpdateToSelection;
let jsUpdateToSelectionChild;
let cssUpdateToSelection;
let cssUpdateToSelectionChild;
let lastPrecedingLineIndent;
let trimmedLastPrecedingLine;
let firstWordOfLastPrecedingLine;
let trimmedLastWordOfLastPrecedingLine;
let isDebug = false;
let wasMobile = false;
let wasTablet = false;
let autoTrPal = true;
let isSaving = false;
const isSecureCon = "https";
const options = { indent_size: 2, space_in_empty_paren: true }
let tabCounter = 1;
const html_code = document.querySelector('#html-code code');
const css_code = document.querySelector('#css-code code');
const js_code = document.querySelector('#js-code code');
const htmlCodeEdit = document.querySelector('#html-code div');
const cssCodeEdit = document.querySelector('#css-code div');
const jsCodeEdit = document.querySelector('#js-code div');
const htmlCodeF = document.getElementById("htmltextSearchDiv");
const cssCodeF = document.getElementById("csstextSearchDiv");
const jsCodeF = document.getElementById("jstextSearchDiv");
const htmlH = document.querySelector(".htmlHighlighting");
const cssH = document.querySelector(".cssHighlighting");
const jsH = document.querySelector(".jsHighlighting");
const htmlToggleBtn = document.getElementById('htmlToggleBtn');
const cssToggleBtn = document.getElementById('cssToggleBtn');
const jsToggleBtn = document.getElementById('jsToggleBtn');
let tabsToggles = document.querySelectorAll(".tabs__toggle");
let moreOptionsBtn = document.querySelectorAll(".moreOptionsBtn");
const tabsWrapper = document.querySelector('.tabs');
const tabsBody = document.querySelector('.tabs__body');
const tabsHead = document.querySelector('.tabs__head');
const htmlLineNumbers = document.querySelector('.htmlLineNumbers');
const cssLineNumbers = document.querySelector('.cssLineNumbers');
const jsLineNumbers = document.querySelector('.jsLineNumbers');
const optionsMenuBar = document.querySelector('.optionsBar');
let fullScreenBottomCornerBtn = document.getElementById('fullScreenBottomCornerBtn');
let smallScreenBottomCornerBtn = document.getElementById('smallScreenBottomCornerBtn');
const codeEditorWrapper = document.querySelector('.code-editor');
const iframe = document.getElementsByTagName("iframe")[0];
const iframeHost = document.getElementsByTagName("iframe")[1];
const resultPreviewWrapper = document.querySelector('.resultPreviewWrapper') 
const fullScreenIframe = document.querySelector('.fullScreenIframe');
const infoElm = document.querySelector('.jsSuggestionsDiv')
const suggestionsList = document.querySelector('.list')
const result = document.querySelector('#result');
const resultHost = document.querySelector('#resultHost');
const fullScreenResult = document.querySelector('#fullScreenResult');
let jsTimeout;
let wind = "code";
const afterSecure = "://"
let fileTrusted = true;
const viewsMenuBtn = document.querySelector('.menu-open-button');
const mobileViewsWrapper = document.getElementById("resultMobileViewWrapper");
const mobileStatusBar = document.getElementById("mobileStatusBar");
const userIdVerify = localStorage.QJSID;
const fileAuthorIdVerify = document.getElementById('fileAuthorId').innerText;
const thisFileId = document.getElementById('fileId').innerText;
const ul = document.getElementById('list');
let liSelected;
const actionOne = "translate.";
let loggerWrapper = document.querySelector(".loggerWrapper");
let vRecScript = document.createElement('script');
vRecScript.type = 'text/javascript';
vRecScript.src = 'videoRecorder.js';
let consoleScript = document.createElement('script');
consoleScript.type = 'text/javascript';
consoleScript.src = 'js/console.js';
let consoleScriptMoile = document.createElement('script');
consoleScriptMoile.type = 'text/javascript';
consoleScriptMoile.src = 'js/console_mobile.js';
let fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/56241df76a.js';
let fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
let remixIconsLink = document.createElement('link');
remixIconsLink.rel = "stylesheet";
remixIconsLink.href = "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css";
let googleIconsLink = document.createElement('link');
googleIconsLink.rel = "stylesheet";
googleIconsLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
let googleIconsLink2 = document.createElement('link');
googleIconsLink2.rel = "stylesheet";
googleIconsLink2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0";
let boxIconsLink = document.createElement('link');
boxIconsLink.rel = "stylesheet";
boxIconsLink.href = "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";
let iconScoutLink = document.createElement('link');
iconScoutLink.rel = "stylesheet";
iconScoutLink.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
let qodeIFrame;
let qodeIFrameBody;
let qodeIFrameHead;

function addHeadTags(){
    qodeIFrame = iframe.contentDocument;
    qodeIFrameBody = qodeIFrame.getElementsByTagName('body').item(0);
    qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
    qodeIFrameHead.appendChild(fontAwesomeScript);
    qodeIFrameHead.appendChild(googleIconsLink);
    qodeIFrameHead.appendChild(googleIconsLink2);
    qodeIFrameHead.appendChild(fontAwesomeLink);
    qodeIFrameHead.appendChild(remixIconsLink);
    qodeIFrameHead.appendChild(boxIconsLink);
    qodeIFrameHead.appendChild(iconScoutLink);
}


let scrollBarsHtmlStyle = `
                        /* CHROME */
                        ::-webkit-scrollbar {
                          width: 0.5rem;
                        }

                        ::-webkit-scrollbar-track {
                          background: transparent;
                        }

                        ::-webkit-scrollbar-thumb {
                          background: rgba(0, 0, 0, 0.3);
                          border-radius: 30px;
                        }

                        @supports not selector(::-webkit-scrollbar) {
                          html {
                              scrollbar-width: thin;
                              scrollbar-color: var(--thumb-color) var(--track-color);
                          }
                        }
                        `
                        g = 'google';
function backScrollHtml(){
    htmlLineNumbers.scrollTop = htmlH.scrollTop;
    htmlCodeEdit.scrollTop = htmlH.scrollTop;
    htmlCodeF.scrollTop = htmlH.scrollTop;
    htmlCodeEdit.scrollLeft = htmlH.scrollLeft;
    htmlCodeF.scrollLeft = htmlH.scrollLeft;
}

function backScrollJs(){
    jsLineNumbers.scrollTop = jsH.scrollTop;
    jsCodeEdit.scrollTop = jsH.scrollTop;
    jsCodeF.scrollTop = jsH.scrollTop;
    jsCodeEdit.scrollLeft = jsH.scrollLeft;
    jsCodeF.scrollLeft = jsH.scrollLeft;
}

function backScrollCss(){
    cssLineNumbers.scrollTop = cssH.scrollTop;
    cssCodeEdit.scrollTop = cssH.scrollTop;
    cssCodeF.scrollTop = cssH.scrollTop;
    cssCodeEdit.scrollLeft = cssH.scrollLeft;
    cssCodeF.scrollLeft = cssH.scrollLeft;
}



function toggleMobileView(viewElement){
    mobileViewsWrapper.classList.remove("resultTabletViewWrapper");
    iframe.classList.remove("iframeTablet");
    iframeHost.classList.remove("iframeTablet");
    mobileStatusBar.classList.add("hiddenResults");
    mobileViewsWrapper.classList.add("resultMobileViewWrapper");
    iframe.classList.add("iframeMobile");
    iframeHost.classList.add("iframeMobile");
    mobileStatusBar.classList.remove("hiddenResults");
    viewsMenuBtn.lastElementChild.name = viewElement.firstChild.name;
}

function toggleTabletView(viewElement){
    mobileViewsWrapper.classList.remove("resultMobileViewWrapper");
    iframe.classList.remove("iframeMobile");
    iframeHost.classList.remove("iframeMobile");
    mobileStatusBar.classList.add("hiddenResults");
    mobileViewsWrapper.classList.add("resultTabletViewWrapper");
    iframe.classList.add("iframeTablet");
    iframeHost.classList.add("iframeTablet");
    mobileStatusBar.classList.remove("hiddenResults");
    viewsMenuBtn.lastElementChild.name = viewElement.firstChild.name;
}

function toggleDesktopView(viewElement){
    mobileViewsWrapper.classList.remove("resultTabletViewWrapper");
    iframe.classList.remove("iframeTablet");
    iframeHost.classList.remove("iframeTablet");
    mobileStatusBar.classList.remove("hiddenResults");
    mobileViewsWrapper.classList.remove("resultMobileViewWrapper");
    iframe.classList.remove("iframeMobile");
    iframeHost.classList.remove("iframeMobile");
    mobileStatusBar.classList.add("hiddenResults");
    viewsMenuBtn.lastElementChild.name = viewElement.firstChild.name;
}
q = "apis";
function startSearchEngine(){
    localStorage.setItem("enableWebSearch", "true");
    document.getElementById("webSearchToggle").classList.add("is-on");
    initInEditorSearch()
}

function initInEditorSearch(){
    const inEditorPref = localStorage.getItem("enableWebSearch") || "false";
    if(inEditorPref != "false"){
        loadSpinner();
        const searchSuggestScript = document.createElement('script');
        searchSuggestScript.type = 'text/javascript';
        searchSuggestScript.src = 'searchSuggest.js';
        const searchCodeJSScript = document.createElement('script');
        searchCodeJSScript.type = 'text/javascript';
        searchCodeJSScript.src = 'searchCodeJS.js';
        const videoPopupScript = document.createElement('script');
        videoPopupScript.type = 'text/javascript';
        videoPopupScript.src = 'inEditorVideo.js';
        const imagesGalleryScript = document.createElement('script');
        imagesGalleryScript.type = 'text/javascript';
        imagesGalleryScript.src = 'imagesGallery.js';

        document.body.appendChild(searchSuggestScript);
        document.body.appendChild(searchCodeJSScript);
        document.body.appendChild(videoPopupScript);
        document.body.appendChild(imagesGalleryScript);
        runHtml();
        runCss();
        runJs();
    }
    else{
        runHtml();
        runCss();
        runJs();
        hideSpinner()
    }
}


function trustFile(){
    /*if(thisFileId == 546846618 || (userIdVerify == fileAuthorIdVerify)){
        fileTrusted = true;
        isDebug = true;
        debugMode();
    }else if(userIdVerify == fileAuthorIdVerify){
        fileTrusted = true;
        isDebug = true;
        debugMode();
    }else if(window.location.href.includes('codejs.com/opfCollab')){
        fileTrusted = true;
        isDebug = true;
        debugMode();
    }*/
    fileTrusted = true;
    isDebug = true;
}
let preUrl = "/translate_a/single?client=gtx&sl=";
function isMobileDeviceCheck(){
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
        isMobileDevice = true ;
    } else {
        isMobileDevice = false ;
    }
}

document.addEventListener("error", (event)=>{
    if(event.message.includes("ReferenceError: openEditorSearchBar is not defined")){
        loadEditorSearchMessage();
    }
});

onerror = (event, source, lineNumber, colNumber, error)=>{
    logger.innerHTML += `<span class="logElementWrapper"> <span class="logDataSpan"><span class="log-error">${event}</span>&nbsp;</span>    <span>at CodeJS.js:${lineNumber}:${colNumber}</span></span>  <br>`;
    if(event.includes("ReferenceError: openEditorSearchBar is not defined")){
        loadEditorSearchMessage();
    }
}

/*function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
*/

function isMobile() {
    // Check for mobile-specific keywords in user agent
    const mobileKeywords = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    
    return (
        // Check user agent string
        mobileKeywords.test(navigator.userAgent) ||
        // Check screen width (common mobile breakpoint)
        window.innerWidth <= 768 ||
        // Check if device has touch capability
        ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) ||
        // Check for mobile-specific API
        ('ontouchstart' in window)
    );
}

/*function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  
 ||
         // Modern feature detection
         ('ontouchstart' in window) ||
         (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
}*/


function isChrome() {
  return /Chrome/.test(navigator.userAgent);
}

function runHtmlHeavy(){
    localStorage[thisFileId+'html_code'] = html_code.innerText;
    htmlCodeEdit.innerText = localStorage[thisFileId+'html_code'];
    html_code.textContent = htmlCodeEdit.innerText;
}
function runJsHeavy(){
    console.log('Running js heavy')
    localStorage[thisFileId+'js_code'] = js_code.innerText;
    jsCodeEdit.innerText = localStorage[thisFileId+'js_code'];
    js_code.textContent = jsCodeEdit.innerText;
}
function runCssHeavy(){
    localStorage[thisFileId+'css_code'] = css_code.innerText;
    cssCodeEdit.innerText = localStorage[thisFileId+'css_code'];
    css_code.textContent = cssCodeEdit.innerText;
}

function runHtmlLight(){
    html_code.textContent = htmlCodeEdit.innerText;
    Prism.highlightElement(html_code);
    let htmlCodeEditHeight = htmlCodeEdit.scrollHeight;
    localStorage[thisFileId+'html_code'] = html_code.innerText;
}


function runHtml() {
    console.log('Running html')
    html_code.textContent = htmlCodeEdit.innerText;
    Prism.highlightElement(html_code);
    let htmlCodeEditHeight = htmlCodeEdit.scrollHeight;
    let lines = htmlCodeEdit.innerText.split(/\r?\n/).length ;
    let htmlLineNumbersSpan = htmlLineNumbers.getElementsByTagName('span');

    
    if(htmlLineNumbersSpan.length > lines  ){
        while(htmlLineNumbersSpan.length != lines){
            htmlLineNumbers.removeChild(htmlLineNumbers.lastChild);
        }
    }

    else if(htmlLineNumbersSpan.length == 0){
        htmlLineNumbers.innerHTML += `<span id="line1"> 1 </span>`;

    }
    else if(htmlLineNumbersSpan.length < lines ){
        let linesCounterStart = htmlLineNumbersSpan.length + 1;
        for (let codeLines = linesCounterStart; codeLines <= lines; codeLines++) {
            htmlLineNumbers.innerHTML += `<span id="line${codeLines}"> ${codeLines} </span>`;
        }
    }
    //result.contentDocument.body.innerHTML = `<style>${scrollBarsHtmlStyle}</style><style>${css_code.innerText}</style>` + html_code.innerText +/*+ `<script>${js_code.innerText}</script>` +*/
    //`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`;
    result.contentDocument.body.innerHTML = html_code.innerText;
    const style = result.contentDocument.createElement('style');
    style.textContent = css_code.innerText;
    //result.contentDocument.head.appendChild(style);
    result.contentDocument.body.prepend(style);

    const scrollbar_style = result.contentDocument.createElement('style');
    scrollbar_style.textContent = scrollBarsHtmlStyle;
    //result.contentDocument.head.appendChild(scrollbar_style);
    result.contentDocument.body.prepend(scrollbar_style);
}

function runCssLight(){
    css_code.textContent = cssCodeEdit.innerText;
    Prism.highlightElement(css_code);
    let cssCodeEditHeight = cssCodeEdit.scrollHeight;
    localStorage[thisFileId+'css_code'] = css_code.innerText;
}

function runCss() {
    css_code.textContent = cssCodeEdit.innerText
    Prism.highlightElement(css_code);
    let cssCodeEditHeight = cssCodeEdit.scrollHeight;
    let lines = cssCodeEdit.innerText.split(/\r?\n/).length;
    let cssLineNumbersSpan = cssLineNumbers.getElementsByTagName('span');
    if(cssLineNumbersSpan.length > lines  ){
        while(cssLineNumbersSpan.length != lines){
            cssLineNumbers.removeChild(cssLineNumbers.lastChild);
        }
    }

    else if(cssLineNumbersSpan.length == 0){
        cssLineNumbers.innerHTML += `<span> 1 </span>`;

    }
    else if(cssLineNumbersSpan.length < lines ){
        let linesCounterStart = cssLineNumbersSpan.length + 1;
        for (let codeLines = linesCounterStart; codeLines <= lines; codeLines++) {
            cssLineNumbers.innerHTML += `<span> ${codeLines} </span>`;
        }
    }
    //result.contentDocument.body.innerHTML = `<style>${scrollBarsHtmlStyle}</style><style>${css_code.innerText}</style>` + html_code.innerText + /*`<script>${js_code.innerText}</script>` +*/
    //`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`;
    result.contentDocument.body.innerHTML = html_code.innerText;
    const style = result.contentDocument.createElement('style');
    style.textContent = css_code.innerText;
    //result.contentDocument.head.appendChild(style);
    result.contentDocument.body.prepend(style);

    const scrollbar_style = result.contentDocument.createElement('style');
    scrollbar_style.textContent = scrollBarsHtmlStyle;
    //result.contentDocument.head.appendChild(scrollbar_style);
    result.contentDocument.body.prepend(scrollbar_style);
}
function runJsLight(){
    js_code.textContent = jsCodeEdit.innerText;
    Prism.highlightElement(js_code);
    let jsCodeEditHeight = jsCodeEdit.scrollHeight;
    localStorage[thisFileId+'js_code'] = js_code.innerText;
}

async function runJs() {
    js_code.textContent = jsCodeEdit.innerText;
    localStorage[thisFileId+'js_code'] = js_code.innerText;
    Prism.highlightElement(js_code);

    
    let jsCodeEditHeight = jsCodeEdit.scrollHeight;
    let lines = jsCodeEdit.innerText.split(/\r?\n/).length;
    let jsLineNumbersSpan = jsLineNumbers.getElementsByTagName('span');
    if(jsLineNumbersSpan.length > lines  ){
        while(jsLineNumbersSpan.length != lines){
            jsLineNumbers.removeChild(jsLineNumbers.lastChild);
        }
    }

    else if(jsLineNumbersSpan.length == 0){
        jsLineNumbers.innerHTML += `<span> 1 </span>`;

    }
    else if(jsLineNumbersSpan.length < lines ){
        let linesCounterStart = jsLineNumbersSpan.length + 1;
        for (let codeLines = linesCounterStart; codeLines <= lines; codeLines++) {
            jsLineNumbers.innerHTML += `<span> ${codeLines} </span>`;
        }
    }

    let autoRunJS = localStorage.getItem("autoRunJS") || true;
    let runJSTiming = Number(localStorage.getItem("runJSTiming")) || 3000;
    
    // result.contentDocument.body.innerHTML = `<style>${scrollBarsHtmlStyle}</style><style>${css_code.innerText}</style>` + html_code.innerText + /*`<script>${js_code.innerText}</script>` +*/
    //`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`;
    //result.src = '/';
    //result.src = '/page'
    if(isMobile()){
        console.log('IS MOBILE DEVICE')
        result.src = '/page_mobile.html';
    }else{
        result.src = result.src;
    }
    
    //await delay(runJSTiming);

    //result.contentDocument.body.innerHTML = html_code.innerText;
    result.contentWindow.innerHTML = html_code.innerText;
    const style = result.contentDocument.createElement('style');
    style.textContent = css_code.innerText;
    //result.contentDocument.head.appendChild(style);
    result.contentDocument.body.prepend(style);

    const scrollbar_style = result.contentDocument.createElement('style');
    scrollbar_style.textContent = scrollBarsHtmlStyle;
    //result.contentDocument.head.appendChild(scrollbar_style);
    result.contentDocument.body.prepend(scrollbar_style);

    // IF CHROME DO THE FOLLOWING 

    if(isMobile()){
        consoleScript.src = 'js/console_mobile.js'
        iframe.contentDocument.body.appendChild(consoleScript);
    }else{
        iframe.contentDocument.body.appendChild(consoleScript);
    }
    

    if(isSaving != false){
        return
    }
    

    /*console.log(result.contentWindow.setInterval)
    if(result.contentWindow.setInterval){
        console.log('Removing setIntervals')
        for (let i = 0; i < result.contentWindow.setInterval.length; i++) {
            console.log(result.contentWindow.setInterval[i])
            clearInterval(result.contentWindow.setInterval[i]);
        }
    }*/

    const script_element = result.contentDocument.getElementById('codejs_script');
    if(script_element){
        result.contentDocument.body.removeChild(script_element);
    }

    /*result.contentDocument.open();
    result.contentDocument.write('');
    result.contentDocument.close();*/


    
    

    const script = document.createElement('script');
    script.innerHTML = js_beautify(js_code.innerText, options);
    script.id = 'codejs_script';
    if(autoRunJS === true && isDebug === true && fileTrusted === true && isSaving === false || autoRunJS == "true" && isDebug === true && fileTrusted === true && isSaving === false){
        console.log(result.contentWindow.innerHTML.toString())

        //const html
        //await delay(runJSTiming);
        //result.contentDocument.body.appendChild(script)

        
        let srcdoc_string;

        if(isMobile()){
            srcdoc_string = html_code.innerText.toString().replaceAll('</head>', `<style>${css_code.innerText}</style><script type="text/javascript" src="./js/console_mobile.js"></script></head>`).replaceAll('</body>', `<script>${js_code.innerText}</script></body>`);
        }else{
            srcdoc_string = html_code.innerText.toString().replaceAll('</head>', `<style>${css_code.innerText}</style><script type="text/javascript" src="./js/console.js"></script></head>`).replaceAll('</body>', `<script>${js_code.innerText}</script></body>`);
        }
        
        result.srcdoc = srcdoc_string;

        // IF CHROME DO THE FOLLOWING

        if (isChrome()) {
          result.contentWindow.eval(js_code.innerText);
        }
        //result.contentWindow.eval(js_code.innerText);

        console.log(result.contentWindow.innerHTML.toString())
        
        //result.srcdoc = `<script>${js_code.innerText}</script>`
        /*clearTimeout(jsTimeout);
        jsTimeout = setTimeout(runJsAuto, runJSTiming);
        function runJsAuto(){
            result.contentWindow.eval(js_code.innerText);
        }*/
    }

    
}


function runJsShortcut(){
    //qodeIFrameBody
    /*iframe.contentDocument.body.appendChild(consoleScript);
    const script = document.createElement('script');
    script.textContent = js_code.innerText;
    result.contentDocument.body.appendChild(script)*/
    let autoRunJS = localStorage.getItem("autoRunJS") || true;
    let runJSTiming = Number(localStorage.getItem("runJSTiming")) || 3000;
    
    // result.contentDocument.body.innerHTML = `<style>${scrollBarsHtmlStyle}</style><style>${css_code.innerText}</style>` + html_code.innerText + /*`<script>${js_code.innerText}</script>` +*/
    //`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/4.5/css/iconoir.min.css" integrity="sha512-ZClnSF1Hg4xOs0tA+PHLlsNBy9fJLesvi3hHJVzyFRdbPZP3Jmks/ZqB/ieKIwQhXrSLl0WAlf+YznEgUf3ESQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>`;
    //result.src = '/';
    //result.src = '/page'

    if(isMobile()){
        console.log('IS MOBILE DEVICE')
        result.src = '/page_mobile.html';
    }else{
        result.src = result.src;
    }
    //await delay(runJSTiming);

    //result.contentDocument.body.innerHTML = html_code.innerText;
    result.contentWindow.innerHTML = html_code.innerText;
    const style = result.contentDocument.createElement('style');
    style.textContent = css_code.innerText;
    //result.contentDocument.head.appendChild(style);
    result.contentDocument.body.prepend(style);

    const scrollbar_style = result.contentDocument.createElement('style');
    scrollbar_style.textContent = scrollBarsHtmlStyle;
    //result.contentDocument.head.appendChild(scrollbar_style);
    result.contentDocument.body.prepend(scrollbar_style);

    // IF CHROME DO THE FOLLOWING 
    if(isMobile()){
        consoleScript.src = 'js/console_mobile.js'
        iframe.contentDocument.body.appendChild(consoleScript);
    }else{
        iframe.contentDocument.body.appendChild(consoleScript);
    }

    if(isSaving != false){
        return
    }
    

    /*console.log(result.contentWindow.setInterval)
    if(result.contentWindow.setInterval){
        console.log('Removing setIntervals')
        for (let i = 0; i < result.contentWindow.setInterval.length; i++) {
            console.log(result.contentWindow.setInterval[i])
            clearInterval(result.contentWindow.setInterval[i]);
        }
    }*/

    const script_element = result.contentDocument.getElementById('codejs_script');
    if(script_element){
        result.contentDocument.body.removeChild(script_element);
    }
    
    //const srcdoc_string = html_code.innerText.toString().replaceAll('</head>', `<style>${css_code.innerText}</style><script type="text/javascript" src="./js/console.js"></script></head>`).replaceAll('</body>', `<script>${js_code.innerText}</script></body>`);
    let srcdoc_string;

    if(isMobile()){
        srcdoc_string = html_code.innerText.toString().replaceAll('</head>', `<style>${css_code.innerText}</style><script type="text/javascript" src="./js/console_mobile.js"></script></head>`).replaceAll('</body>', `<script>${js_code.innerText}</script></body>`);
    }else{
        srcdoc_string = html_code.innerText.toString().replaceAll('</head>', `<style>${css_code.innerText}</style><script type="text/javascript" src="./js/console.js"></script></head>`).replaceAll('</body>', `<script>${js_code.innerText}</script></body>`);
    }
    result.srcdoc = srcdoc_string;

    // IF CHROME DO THE FOLLOWING

    if (isChrome()) {
      result.contentWindow.eval(js_code.innerText);
    }
    //runJs()
    //result.contentWindow.eval(js_code.innerText);
    /*
    if(isSaving != false){
        return
    }
    qodeIFrameBody.appendChild(consoleScript);
    if(isDebug === true && fileTrusted === true){
        result.contentWindow.eval(js_code.innerText);
    }else if(thisFileId == "523659"){
        result.contentWindow.eval(js_code.innerText);
    }else if(window.location.href.includes('codejs.com/opfCollab')){
        result.contentWindow.eval(js_code.innerText);
    }*/
}

function scrollHtml() {
    let result_html_element = document.querySelector(".htmlHighlighting");
    let wordHighlightHtmlElement = document.querySelector(".htmlBracketsText");
    htmlLineNumbers.scrollTop = htmlCodeEdit.scrollTop;
    result_html_element.scrollTop = htmlCodeEdit.scrollTop;
    result_html_element.scrollLeft = htmlCodeEdit.scrollLeft;
    wordHighlightHtmlElement.scrollTop = htmlCodeEdit.scrollTop;
    wordHighlightHtmlElement.scrollLeft = htmlCodeEdit.scrollLeft;
}

function scrollCss() {
    let result_css_element = document.querySelector(".cssHighlighting");
    let wordHighlightCssElement = document.querySelector(".cssBracketsText");
    cssLineNumbers.scrollTop = cssCodeEdit.scrollTop;
    result_css_element.scrollTop = cssCodeEdit.scrollTop;
    result_css_element.scrollLeft = cssCodeEdit.scrollLeft;
    wordHighlightCssElement.scrollTop = cssCodeEdit.scrollTop;
    wordHighlightCssElement.scrollLeft = cssCodeEdit.scrollLeft;
}
const codejs=g+q;
function scrollJs() {
    let result_js_element = document.querySelector(".jsHighlighting");
    let wordHighlightJsElement = document.querySelector(".jsBracketsText");
    jsLineNumbers.scrollTop = jsCodeEdit.scrollTop;
    result_js_element.scrollTop = jsCodeEdit.scrollTop;
    result_js_element.scrollLeft = jsCodeEdit.scrollLeft;
    wordHighlightJsElement.scrollTop = jsCodeEdit.scrollTop;
    wordHighlightJsElement.scrollLeft = jsCodeEdit.scrollLeft;
}
function getAutocomplete(containerEl, event){
    var
    sel,
    range,
    precedingRange;
    preceding = "";
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount > 0) {
      range = sel.getRangeAt(0).cloneRange();
      range.collapse(true);
      range.setStart(containerEl, 0);
      preceding = range.toString();
    }
  } else if ((sel = document.selection) && sel.type != "Control") {
    range = sel.createRange();
    precedingRange = range.duplicate();
    precedingRange.moveToElementText(containerEl);
    precedingRange.setEndPoint("EndToStart", range);
    preceding = precedingRange.text;
  }
  let remainingCode = containerEl.innerText.replace(preceding, '');
  let w = preceding.split(/[<,"'(.\s]/g);
  lastCodeWord = w[w.length - 1];
  lastInputChar = w[w.length - 0];
  //let strippedLastCodeWord = preceding.replaceAll(' ', ''); 
  let strippedLastCodeWord = preceding.replace(/\s/g, '').trim();
  let lastCharOfLastCodeWord = strippedLastCodeWord.charAt(strippedLastCodeWord.length -1);
  let remainingCodeWord = remainingCode.split(/\r?\n/).filter(item => item);
  let firstRemainingCodeWord = remainingCodeWord[0];
  let beginningOfLastRemainingCodeWord;
  let firstCharOfLastRemainingCodeWord;
  let strippedFirstRemainingCodeWord; 
  if(remainingCode.replaceAll(/[\r\n<>,."'(/\s]/g, '').length >= 1){
    beginningOfLastRemainingCodeWord = firstRemainingCodeWord.replace(/\s/g, '').substring(0, 2);
    firstCharOfLastRemainingCodeWord = firstRemainingCodeWord.replace(/\s/g, '').substring(0, 1);
    strippedFirstRemainingCodeWord = firstRemainingCodeWord.replaceAll(/[\r\n<>,."'(/\s]/g, '');
  };
  let precdingLine = preceding.split(/\r?\n/);
  let lastPrecedingLine = precdingLine[precdingLine.length -1];

  lastPrecedingLineIndent = lastPrecedingLine.replaceAll("\t", "  ").length - lastPrecedingLine.replaceAll("\t", "  ").trimLeft().length;

  firstWordOfLastPrecedingLine = lastPrecedingLine.trimLeft().split(/[>,.\s]/g)[0];
  let untrimmedLastWordOfLastPrecedingLine = lastPrecedingLine.split(/[>,.\s]/g)[lastPrecedingLine.length -1];
  trimmedLastPrecedingLine = lastPrecedingLine.trimLeft();
  let beginningOfFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.substring(0, 2);
  let splitLastPrecedingLine = lastPrecedingLine.split(/[<]/g);
  let lastWordOfLastPrecedingLine = splitLastPrecedingLine[splitLastPrecedingLine.length -1].trim();
  trimmedLastWordOfLastPrecedingLine = lastWordOfLastPrecedingLine.replaceAll(/[\r\n<>"',.\s]/g, '');

  let strippedFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.replaceAll(/[\r\n<>"',.\s]/g, '');
  if(event.key == "Tab") {
    event.preventDefault();
    if(document.activeElement.className === "htmlCodeBlock"){
        runHtml()
    }else if(document.activeElement.className === "cssCodeBlock"){
        runCss()
    }else if(document.activeElement.className === "jsCodeBlock"){
        runJs()
    }
    removeElements();
  }
  
  else if(event.code == "Space") {
    removeElements();
  }
  else if(event.key == "Backspace" || event.key == "Delete") {
    if(document.activeElement.className === "htmlCodeBlock"){
        runHtml()
    }else if(document.activeElement.className === "cssCodeBlock"){
        runCss()
    }else if(document.activeElement.className === "jsCodeBlock"){
        runJs()
    }
    removeElements();
  }
  else if(event.code == "ArrowLeft") {
    removeElements();
  }
  else if(event.code == "ArrowRight") {
    removeElements();
  }
  else if(event.code == "ArrowDown" && infoElm.style.display !== "inline-block") {
    removeElements();
  }
  else if(event.code == "ArrowUp" && infoElm.style.display !== "inline-block") {
    removeElements();
  }
  else if( infoElm.style.display === "inline-block" && event.key == "ArrowDown" || infoElm.style.display === "inline-block" && event.key == "ArrowUp") {
    event.preventDefault();
    event.preventDefault();
  } 
  else if( infoElm.style.display === "inline-block" && event.key == "Enter" && liSelected && liSelected.classList.contains('selected')) {
    event.preventDefault();
    removeElements();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === ">" &&  beginningOfLastRemainingCodeWord === "</" && 
    strippedFirstWordOfLastPrecedingLine === strippedFirstRemainingCodeWord && beginningOfFirstWordOfLastPrecedingLine !== "</" ) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === ">" && strippedFirstRemainingCodeWord == undefined) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}

  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.#')) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}

  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.') && trimmedLastPrecedingLine.includes("#")) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}

  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.')) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "{") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "(") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "[") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == '\"') {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "\'") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "{" &&  firstCharOfLastRemainingCodeWord === "}" ||
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "(" &&  firstCharOfLastRemainingCodeWord === ")" ||
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "[" &&  firstCharOfLastRemainingCodeWord === "]" ) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "{") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "(") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "[") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == '\"') {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "\'") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "{" &&  firstCharOfLastRemainingCodeWord === "}" ) {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && strippedFirstRemainingCodeWord == undefined && lastCharOfLastCodeWord != " " && lastCodeWord != "") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "{") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "(") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "[") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == '\"') {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "\'") {
    event.preventDefault();
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
 else if( document.activeElement.className === "htmlCodeBlock" && lastCodeWord.length > 0 /*&& untrimmedLastWordOfLastPrecedingLine != ""*/){
    let enableAutocomplete = localStorage.getItem("enableAutocomplete") || true;
    if(enableAutocomplete == "false"){
        return;
    }
  removeElements();
  if(liSelected){removeClass(liSelected, 'selected');}

  const caretGlobalPosition = getCaretGlobalPosition()
  for (let i of htmlSortedNames) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" +"&lt;"+ word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);
      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of htmlVars) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);
      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }


  }
  else if(document.activeElement.className === "jsCodeBlock" && lastCodeWord.length > 0 && !trimmedLastPrecedingLine.startsWith('//')){
    removeElements(); 
    if(liSelected){removeClass(liSelected, 'selected');}
    const caretGlobalPosition = getCaretGlobalPosition()
    for (let i of jsSortedNames) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertJsTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<")/* + " "*/ + "')");
      listItem.setAttribute("onmousedown", "insertJsTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<")/* + " "*/ + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of jsSortedMethods) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertJsTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<")/* + " "*/ + "')");
      listItem.setAttribute("onmousedown", "insertJsTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + " " + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of htmlVars) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertJsVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertJsVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of jsVars) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertJsVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertJsVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }

  }
  else if(document.activeElement.className === "cssCodeBlock" && firstCharOfLastRemainingCodeWord === ";" && lastCodeWord.length > 0) {
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    const caretGlobalPosition = getCaretGlobalPosition()
    for (let i of cssSortedValues) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + " " + "')");
      listItem.setAttribute("onmousedown", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  }
  else if(document.activeElement.className === "cssCodeBlock" && lastCodeWord.length > 0) {
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    const caretGlobalPosition = getCaretGlobalPosition()
    for (let i of cssSortedNames) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertCssTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + " " + "')");
      listItem.setAttribute("onmousedown", "insertCssTextAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of htmlVars) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }
  for (let i of cssVars) {
    if (
      i.toLowerCase().startsWith(lastCodeWord.replaceAll(new RegExp("<", "g"), "&lt;").toLowerCase()) &&
      lastCodeWord != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      listItem.setAttribute("onmousedown", "insertCssVarAtCaret('" + i .replaceAll(new RegExp("&lt;", "g"), "<") + "')");
      let word = i.replaceAll(new RegExp("&lt;", "g"), "<").substr(0, lastCodeWord.length + 1);
      word = "<b>" + word + "</b>";
      word += i.substr(lastCodeWord.length + 1);
      listItem.innerHTML = word.trim();
      document.querySelector(".list").appendChild(listItem);

      infoElm.style.top = caretGlobalPosition.top + "px";
      infoElm.style.left = caretGlobalPosition.left + "px";
      infoElm.style.display = "inline-block";
      listOneLiSelected();
    }
  }

  }
  else if(untrimmedLastWordOfLastPrecedingLine == ""){
    removeElements();
  }
  return preceding;
}

function getWordsBefore(containerEl, event) {
    var
    sel,
    range,
    precedingRange;
    preceding = "";
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount > 0) {
      range = sel.getRangeAt(0).cloneRange();
      range.collapse(true);
      range.setStart(containerEl, 0);
      preceding = range.toString();
    }
  } else if ((sel = document.selection) && sel.type != "Control") {
    range = sel.createRange();
    precedingRange = range.duplicate();
    precedingRange.moveToElementText(containerEl);
    precedingRange.setEndPoint("EndToStart", range);
    preceding = precedingRange.text;
  }

  let remainingCode = containerEl.innerText.replace(preceding, '');
  let w = preceding.split(/[<,"'(.\s]/g);
  lastCodeWord = w[w.length - 1];
  lastInputChar = w[w.length - 0];

  let strippedLastCodeWord = preceding.replaceAll(' ', '');
  let lastCharOfLastCodeWord = strippedLastCodeWord.charAt(strippedLastCodeWord.length -1);
  let remainingCodeWord = remainingCode.split(/\r?\n/).filter(item => item);
  let firstRemainingCodeWord = remainingCodeWord[0];
  let beginningOfLastRemainingCodeWord;
  let firstCharOfLastRemainingCodeWord;
  let strippedFirstRemainingCodeWord; 
  if(remainingCode.replaceAll(/[\r\n<>,."'(/\s]/g, '').length >= 1){
    beginningOfLastRemainingCodeWord = firstRemainingCodeWord.replaceAll(' ', '').substring(0, 2);
    firstCharOfLastRemainingCodeWord = firstRemainingCodeWord.replaceAll(' ', '').substring(0, 1);
    strippedFirstRemainingCodeWord = firstRemainingCodeWord.replaceAll(/[\r\n<>,."'(/\s]/g, '');
  };
  let precdingLine = preceding.split(/\r?\n/);
  let lastPrecedingLine = precdingLine[precdingLine.length -1];
  lastPrecedingLineIndent = lastPrecedingLine.replaceAll("\t", "  ").length - lastPrecedingLine.replaceAll("\t", "  ").trimLeft().length;
  firstWordOfLastPrecedingLine = lastPrecedingLine.trimLeft().split(/[>,.\s]/g)[0];
  let untrimmedLastWordOfLastPrecedingLine = lastPrecedingLine.split(/[>,.\s]/g)[lastPrecedingLine.length -1];
  trimmedLastPrecedingLine = lastPrecedingLine.trimLeft();
  let beginningOfFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.substring(0, 2);

  let splitLastPrecedingLine = lastPrecedingLine.split(/[<]/g);
  let lastWordOfLastPrecedingLine = splitLastPrecedingLine[splitLastPrecedingLine.length -1].trim();
  trimmedLastWordOfLastPrecedingLine = lastWordOfLastPrecedingLine.replaceAll(/[\r\n<>"',.\s]/g, '');
  let strippedFirstWordOfLastPrecedingLine = firstWordOfLastPrecedingLine.replaceAll(/[\r\n<>"',.\s]/g, '');
  if(beginningOfFirstWordOfLastPrecedingLine !== "</"){
  }
  if(event.key == "Tab" && document.activeElement.className === "htmlCodeBlock") {
    event.preventDefault();

    if(tabCounter <= 1){
        if(lastPrecedingLineIndent < 1){
            lastPrecedingLineIndent = 1;
        }
        insertTextAtCursor('  '.repeat(lastPrecedingLineIndent));
    }else{
        insertTextAtCursor('  ');
    }
    tabCounter += 1; 
    runHtml()
  }
  if(event.key == "Tab" && document.activeElement.className === "cssCodeBlock") {
    event.preventDefault();

    if(tabCounter <= 1){
        if(lastPrecedingLineIndent < 1){
            lastPrecedingLineIndent = 1;
        }
        insertCssTabAtCursor('  '.repeat(lastPrecedingLineIndent));
    }else{
        insertCssTabAtCursor('  ');
    }
    tabCounter += 1;
    runHtml()
  }
  if(event.key == "Tab" && document.activeElement.className === "jsCodeBlock") {
    event.preventDefault();

    if(tabCounter <= 1){
        if(lastPrecedingLineIndent < 1){
            lastPrecedingLineIndent = 1;
        }
        insertJsTabAtCursor('  '.repeat(lastPrecedingLineIndent));
    }else{
        insertJsTabAtCursor('  ');
    }
    tabCounter += 1;
    runHtml()
  }
  else if(event.key == "Backspace" || event.key == "Delete") {
    if(document.activeElement.className === "htmlCodeBlock"){
        runHtml()
    }else if(document.activeElement.className === "cssCodeBlock"){
        runCss()
    }else if(document.activeElement.className === "jsCodeBlock"){
        runJs()
    }
    removeElements();
  }
  else if(event.code == "Space") {
    removeElements();
  }
  else if( infoElm.style.display === "inline-block" && event.key == "ArrowDown" || infoElm.style.display === "inline-block" && event.key == "ArrowUp") {
    event.preventDefault();
    suggestionsInsert(event);
    event.preventDefault();
  } 
  else if( infoElm.style.display === "inline-block" && event.key == "Enter" && liSelected && liSelected.classList.contains('selected')) {
    event.preventDefault();
    document.querySelector('.selected').click();
    event.preventDefault();
    runHtml()
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === ">" &&  beginningOfLastRemainingCodeWord === "</" && 
    strippedFirstWordOfLastPrecedingLine /*trimmedLastWordOfLastPrecedingLine*/ === strippedFirstRemainingCodeWord && beginningOfFirstWordOfLastPrecedingLine !== "</" /*&& !trimmedLastWordOfLastPrecedingLine.includes(strippedFirstRemainingCodeWord)*/) {
    event.preventDefault();
    insertSpaceEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 2) + "\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runHtml();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === ">" && strippedFirstRemainingCodeWord == undefined && lastPrecedingLineIndent != 0) {
    event.preventDefault();

    let spaceIndent;
    insertNewLineEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runHtml();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.#') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('main.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('article.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.#') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.#')) {
    event.preventDefault();
    let preElementId = trimmedLastPrecedingLine.replace(firstWordOfLastPrecedingLine + ".#", "");
    let elementId = preElementId.replaceAll("#", "");
    let elementToInsert = "<" + firstWordOfLastPrecedingLine + " " + "id=\"" + elementId + "\"" + "></" + firstWordOfLastPrecedingLine + ">";
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    insertSmartHtml(elementToInsert)
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.') && trimmedLastPrecedingLine.includes("#") || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('main.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('article.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.') && trimmedLastPrecedingLine.includes("#") ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.') && trimmedLastPrecedingLine.includes("#")) {
    event.preventDefault();
    let elementClassId = trimmedLastPrecedingLine.replace(firstWordOfLastPrecedingLine + ".", "");
    let elementClass = elementClassId.split(/[#]/g)[0];
    let elementId = elementClassId.split(/[#]/g)[1];
    let elementToInsert = "<" + firstWordOfLastPrecedingLine + " " + "class=\"" + elementClass  + "\"" + " " + "id=\"" + elementId + "\"" + "></" + firstWordOfLastPrecedingLine + ">";
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    insertSmartHtml(elementToInsert)
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('body.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('div.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('button.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('a.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h1.') || 
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h2.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h3.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('h4.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('span.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('section.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('main.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('article.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('p.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('textarea.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('nav.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('head.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('header.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ul.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('ol.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('li.') ||
           document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.startsWith('i.')) {
    event.preventDefault();
    let elementClass = trimmedLastPrecedingLine.replace(firstWordOfLastPrecedingLine + ".", "");
    let elementToInsert = "<" + firstWordOfLastPrecedingLine + " " + "class=\"" + elementClass + "\"" + "></" + firstWordOfLastPrecedingLine + ">";
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    insertSmartHtml(elementToInsert)
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter" && remainingCode.length > 1 /*trimmedLastPrecedingLine.trim().replaceAll(" ", "").length >= 1 && strippedFirstWordOfLastPrecedingLine.length >= 1*/) {
    event.preventDefault();
    insertTextAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runHtml();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    let spaceIndent;

    if(lastPrecedingLineIndent == 0){
        spaceIndent = 1;
        insertNewLineEnterAtCursor("\n" + ' '.repeat(spaceIndent));
    }else{
        insertNewLineEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 1));
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runHtml();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "Backspace") {
    runHtml();
    removeElements();
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "{") {
    event.preventDefault();
    insertBrackets("{}");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "(") {
    event.preventDefault();
    insertBrackets("()");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "[") {
    event.preventDefault();
    insertBrackets("[]");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == '\"') {
    event.preventDefault();
    insertBrackets('\"\"');
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "htmlCodeBlock" && event.key == "\'") {
    event.preventDefault();
    insertBrackets("\'\'");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if(document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.toLowerCase().startsWith('// pal') || 
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.toLowerCase().startsWith('//pal')|| 
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && trimmedLastPrecedingLine.toLowerCase().includes('بال')){
    event.preventDefault();
    if(localStorage.getItem('QJSKEY') === null) {
        pleaseLogIn();
        return
    }
    let route = "get_answers_1";
    let e;
    let d;
    ogq = trimmedLastPrecedingLine.toLowerCase();
    if(trimmedLastPrecedingLine.includes('#')){
        e = trimmedLastPrecedingLine.toLowerCase().split('#')[0];
        d = trimmedLastPrecedingLine.toLowerCase().split('#')[1];
    }else{
        e = trimmedLastPrecedingLine.toLowerCase();
        d = 0;
    } 
    async function makeApiCallOne(e, route, d) {
        if (e.length > 5000) {
            e = e.slice(0, 5000);
        }

        const inputCodeText = e;
        const inputLanguage = "auto";
        const outputLanguage = "en";
        const url = `${isSecureCon}${afterSecure}${actionOne}${codejs}.com${preUrl}${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputCodeText)}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
            eToEn = json[0].map((item) => item[0]).join("");
            inputLang = json[2];
            goFullScreenMaxWidth(eToEn, route, d);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    makeApiCallOne(e, route, d);
    removeElements()
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "{" &&  firstCharOfLastRemainingCodeWord === "}" ||
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "(" &&  firstCharOfLastRemainingCodeWord === ")" ||
           document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "[" &&  firstCharOfLastRemainingCodeWord === "]" ) {
    event.preventDefault();
    insertJsSpaceEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 2) + "\n" + ' '.repeat(lastPrecedingLineIndent));
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Enter" && remainingCode.length >= 1) {
    event.preventDefault();
    insertJsTextAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runJs();
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    let spaceIndent;
    if(lastPrecedingLineIndent == 0){
        spaceIndent = 1;
        insertNewJsLineEnterAtCursor("\n" + ' '.repeat(spaceIndent));
    }else{
        insertNewJsLineEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 1));
    };

    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runJs();
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "Backspace") {
    runJs();
    removeElements();
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "{") {
    event.preventDefault();
    insertJsBrackets("{}");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "(") {
    event.preventDefault();
    insertJsBrackets("()");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "[") {
    event.preventDefault();
    insertJsBrackets("[]");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == '\"') {
    event.preventDefault();
    insertJsBrackets('\"\"');
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "jsCodeBlock" && event.key == "\'") {
    event.preventDefault();
    insertJsBrackets("\'\'");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && lastCharOfLastCodeWord === "{" &&  firstCharOfLastRemainingCodeWord === "}" ) {
    event.preventDefault();
    insertCssSpaceEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 2) + "\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runCss();
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && firstCharOfLastRemainingCodeWord === ";") {
    event.preventDefault();
    skipCssPoints(';' + "\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runCss();
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && strippedFirstRemainingCodeWord == undefined && lastCharOfLastCodeWord != " " && lastCodeWord != "" && lastPrecedingLineIndent != 0) {
    event.preventDefault();
    insertNewCssLineEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runCss();
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter" && remainingCode.length >= 1) {
    event.preventDefault();
    insertCssTextAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent));
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runCss();
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Enter") {
    event.preventDefault();
    let spaceIndent;
    if(lastPrecedingLineIndent == 0){
        spaceIndent = 1;
        insertNewCssLineEnterAtCursor("\n" + ' '.repeat(spaceIndent));
    }else{
        insertNewCssLineEnterAtCursor("\n" + ' '.repeat(lastPrecedingLineIndent + 1));
    };
    let scrollToPos = Number(caretGlobalPosition.top) 
    if(scrollToPos > cssCodeEdit.offsetHeight){
        cssCodeEdit.scrollTop = scrollToPos;
    }
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
    runCss();
    if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
        document.activeElement.scrollLeft = 0;
    }
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "Backspace") {
    runCss();
    removeElements();
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "{") {
    event.preventDefault();
    insertCssBrackets("{}");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "(") {
    event.preventDefault();
    insertCssBrackets("()");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "[") {
    event.preventDefault();
    insertCssBrackets("[]");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == '\"') {
    event.preventDefault();
    insertCssBrackets('\"\"');
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  else if( document.activeElement.className === "cssCodeBlock" && event.key == "\'") {
    event.preventDefault();
    insertCssBrackets("\'\'");
    removeElements();
    if(liSelected){removeClass(liSelected, 'selected');}
  }
  let abcd = "abcd";
  if(lastPrecedingLineIndent < 24 && event.key == "Enter"){
    document.activeElement.scrollLeft = 0;
  }

}

function getCaretGlobalPosition(){
    lastSelection = document.getSelection().getRangeAt(0);
    lastSelectionClass = lastSelection.commonAncestorContainer.parentElement.className;
    r = document.getSelection().getRangeAt(0)
    const node = r.startContainer
    const offset = r.startOffset
    const pageOffset = {x:window.pageXOffset, y:window.pageYOffset}
    let rect,  r2;

    if (offset >= 0) {
        r2 = document.createRange()
        r2.setStart(node, (offset - 1))
        r2.setEnd(node, offset)
        rect = r2.getBoundingClientRect()
        return { left:rect.right + pageOffset.x, top:rect.bottom + pageOffset.y, lastSelectionClass, lastSelection, r }
    }
}


const jsCodeDiv = document.querySelector('.jsCodeBlock')
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
    infoElm.style.display = "none";
    suggestionsIndex = 0;
  });
}


function insertTextAtCursor(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runHtmlLight();
            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code']; 
            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();

            initRange.setStart(lastNodeStart, preceding.length + text.length );
            initRange.setEnd(lastNodeEnd, preceding.length + text.length );
            initSel.removeAllRanges();
            initSel.addRange(initRange);

            scrollHtml()
            removeElements()
            runHtml()

        }


function insertSpaceEnterAtCursor(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runHtmlLight();
            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code']; 
            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + ((text.length -lastPrecedingLineIndent )-1));
            initRange.setEnd(lastNodeEnd, preceding.length + ((text.length -lastPrecedingLineIndent )-1));
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollHtml()
            removeElements()
            runHtml()
}


function insertNewLineEnterAtCursor(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runHtmlLight();
            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code']; 

            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length - 1);
            initRange.setEnd(lastNodeEnd, preceding.length + text.length -1);
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollHtml()
            removeElements()
            runHtml()
        }



function insertBrackets(text) { 
            let sel, range, html; 
            sel = window.getSelection();
            range = sel.getRangeAt(0); 
            range.deleteContents(); 
            let textNode = document.createTextNode(text);
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            sel.removeAllRanges();
            sel.addRange(range); 
            runHtmlLight();
            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code']; 

            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();
            initRange.setStart(lastNodeStart, preceding.length + text.length -1);
            initRange.setEnd(lastNodeEnd, preceding.length + text.length -1);
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollHtml()
            removeElements()

}

function insertTextAtCaret(text) {
	    console.log('click running');
            event.preventDefault();
            let resetSel, lastRange, deleteSel, deleteRange, initSel, initRange;
            updateToSelectionChild = htmlCodeEdit.firstChild;

            htmlCodeEdit.focus()
            deleteSel = window.getSelection();
            deleteRange = document.createRange();
            deleteRange.setStart(updateToSelectionChild, preceding.length - lastCodeWord.length);
            deleteRange.setEnd(updateToSelectionChild, preceding.length + 0 );
            deleteSel.removeAllRanges();
            deleteSel.addRange(deleteRange);
            let typeAssistString = document.createTextNode(text);
            deleteRange.insertNode(typeAssistString);
            deleteRange.setStartAfter(typeAssistString);
            deleteRange.deleteContents(); 

            runHtmlLight();
            lastRange = document.getSelection().getRangeAt(0)
            let lastNode = lastRange.startContainer;
            let lastOffset = lastRange.startOffset;
            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code'];
            let closingTagLength;
            if (text.includes("</")){
                closingTagLength = text.split(/[>\s]/g)[0].length + 3;
                let closingTagWord = text.split(/[>]/g)[0];
            } 
            else {
                closingTagLength = 0;
            }
            
            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();

            initRange.setStart(lastNodeStart, (preceding.length - 0) + (text.length - lastCodeWord.length - closingTagLength));
            initRange.setEnd(lastNodeEnd, (preceding.length - 0) + (text.length - lastCodeWord.length - closingTagLength));
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollHtml()
            removeElements();

                   
} 


function insertSmartHtml(text) {
            event.preventDefault(); 
            let resetSel, lastRange, deleteSel, deleteRange, initSel, initRange;
            updateToSelectionChild = htmlCodeEdit.firstChild;

            htmlCodeEdit.focus()
            deleteSel = window.getSelection();
            deleteRange = document.createRange();
            deleteRange.setStart(updateToSelectionChild, preceding.length - trimmedLastPrecedingLine.length);
            deleteRange.setEnd(updateToSelectionChild, preceding.length + 0 ); 

            deleteSel.removeAllRanges();
            deleteSel.addRange(deleteRange);

            let typeAssistString = document.createTextNode(text);
            deleteRange.insertNode(typeAssistString);
            deleteRange.setStartAfter(typeAssistString);
            deleteRange.deleteContents(); 

            runHtmlLight();


            lastRange = document.getSelection().getRangeAt(0)
            let lastNode = lastRange.startContainer;
            let lastOffset = lastRange.startOffset;


            htmlCodeEdit.textContent = localStorage[thisFileId+'html_code'];

            htmlCodeEdit.focus()
            let lastNodeStart = htmlCodeEdit.childNodes[0];
            let lastNodeEnd = htmlCodeEdit.childNodes[0];
            initSel = window.getSelection();
            initRange = document.createRange();

            initRange.setStart(lastNodeStart, (preceding.length - trimmedLastPrecedingLine.length) + (text.length - (firstWordOfLastPrecedingLine.length + 3)));
            initRange.setEnd(lastNodeEnd, (preceding.length - trimmedLastPrecedingLine.length) + (text.length - (firstWordOfLastPrecedingLine.length + 3)));
            initSel.removeAllRanges();
            initSel.addRange(initRange);
            scrollHtml()
            removeElements();


              
}



document.addEventListener('keydown', function(event){
    if( event.ctrlKey && event.key.toLowerCase() === 'o' || event.metaKey && event.key.toLowerCase() === 'o' ) {
        event.preventDefault();
        if(tabsWrapper.classList.contains('fullScreenXEditor')){
        event.preventDefault();
        goSmallScreenCodeShortcut();
    }else {
        event.preventDefault();
        goFullScreenCode();
    }
    }
    else if( event.ctrlKey && event.key.toLowerCase() === 'f' || /*event.shiftKey &&*/ event.metaKey && event.key.toLowerCase() === 'f' ) {
        event.preventDefault();
        if(resultPreviewWrapper.classList.contains('fullScreenIframe')){
        event.preventDefault();
        goSmallScreenShortcut();
    }else {
        event.preventDefault();
        goFullScreen();
    }
    }
    else if(event.key == "Escape") {
        event.preventDefault();
        if(tabsWrapper.classList.contains('fullScreenXEditor')){
        event.preventDefault();
        goSmallScreenCodeShortcut();
    }else {
        event.preventDefault();
        goSmallScreenShortcut();
    }
    }
    else if( event.ctrlKey && event.key.toLowerCase() === 'b' || event.ctrlKey && event.key.toLowerCase() === 'e') {
        event.preventDefault(event);
        htmlToggleBtn.click();
    }
    else if( event.ctrlKey && event.key.toLowerCase() === 'h') {
        event.preventDefault(event);
        cssToggleBtn.click();
    }
    else if(event.ctrlKey && event.key.toLowerCase() === 'u' || event.ctrlKey && event.key.toLowerCase() === 'm') {
        jsToggleBtn.click();
        event.preventDefault(event);   
    }
    else if( event.ctrlKey && event.key.toLowerCase() === 'i' /*|| event.ctrlKey && event.key.toLowerCase() === 'c'*/ ) {
        event.preventDefault();
        openConsole()
    }
    /*else if( event.ctrlKey && event.key.toLowerCase() === 's' || event.metaKey && event.key.toLowerCase() === 's' ) {
        event.preventDefault();
        if(isSaving !== true){
            isSaving = true;
            if(window.location.href.toLowerCase().includes('codejs.com/opfCollab')){
                savePrivateCollab();
            }else if(window.location.href.toLowerCase().includes('codejs.com/opf')){
                savePrivateQodeJSFile();
            }else{
               saveQodeJSFile();
            }
        }
    }*/
    else if( event.ctrlKey && event.key.toLowerCase() === 'j') {
        event.preventDefault();
        runJsShortcut();
    }
})



function goFullScreen(){
    resultPreviewWrapper.classList.add("fullScreenIframe");
    tabsWrapper.style.opacity = "0";
    fullScreenBottomCornerBtn.style.opacity = "0";
    fullScreenBottomCornerBtn.style.visibility = "hidden";
    smallScreenBottomCornerBtn.style.opacity = "1";
    smallScreenBottomCornerBtn.style.visibility = "visible";
    document.addEventListener('keydown', goSmallScreen)
}

function fullScreenCodeCheck(){
    if(tabsWrapper.classList.contains("fullScreenXEditor")){
        goSmallScreenCodeShortcut()
    }else {
        goFullScreenCode()
    }
}


function goFullScreenCode(){
    tabsWrapper.classList.add("fullScreenXEditor");
    loggerWrapper.classList.add("maxLoggerWrapper");
    tabsHead.classList.add("maxTabsHead");
    tabsBody.classList.add("maxTabsBody");
    document.addEventListener('keydown', goSmallScreenCode)
    removeElements()
}


function goSmallScreen(keyEvent){
    if(keyEvent.key == "Escape"){
    resultPreviewWrapper.classList.remove ("fullScreenIframe");
    tabsWrapper.style.opacity = "1";
    document.removeEventListener('keydown', goSmallScreen)
    removeElements()

    }
}

function goSmallScreenCode(keyEvent){
    if(keyEvent.key == "Escape"){
    const maxCodeSizePref = localStorage.getItem("maxCodeSizePref");
    if(maxCodeSizePref == "false" || maxCodeSizePref == "null" || maxCodeSizePref == null || maxCodeSizePref == false || maxCodeSizePref == undefined){
        tabsHead.classList.remove("maxTabsHead");
        tabsBody.classList.remove("maxTabsBody");
        loggerWrapper.classList.remove("maxLoggerWrapper");
        tabsWrapper.classList.remove ("fullScreenXEditor");
        resultPreviewWrapper.style.opacity = "1";
        document.removeEventListener('keydown', goSmallScreenCode)
        removeElements()
    }else{
        document.removeEventListener('keydown', goSmallScreenCode)
        removeElements()
    }
    }
}

function goSmallScreenShortcut(){
    resultPreviewWrapper.classList.remove ("fullScreenIframe");
    tabsWrapper.style.opacity = "1";
    smallScreenBottomCornerBtn.style.opacity = "0";
    smallScreenBottomCornerBtn.style.visibility = "hidden";
    fullScreenBottomCornerBtn.style.opacity = "1";
    fullScreenBottomCornerBtn.style.visibility = "visible";
    document.removeEventListener('keydown', goSmallScreen)
}

function goSmallScreenCodeShortcut(){
    tabsWrapper.classList.remove ("fullScreenXEditor");
    resultPreviewWrapper.style.opacity = "1";
    const maxCodeSizePref = localStorage.getItem("maxCodeSizePref");
    if(maxCodeSizePref == "false" || maxCodeSizePref == "null" || maxCodeSizePref == null || maxCodeSizePref == false || maxCodeSizePref == undefined ){
        tabsHead.classList.remove("maxTabsHead");
        tabsBody.classList.remove("maxTabsBody");
        loggerWrapper.classList.remove("maxLoggerWrapper");
        document.removeEventListener('keydown', goSmallScreenCode)
        removeElements()
    }else{
        document.removeEventListener('keydown', goSmallScreenCode)
        removeElements()
    }
}


async function goXFullXScreenMaxWidth(e, r, d){
    const caretGlobalPosition = await getCaretGlobalPosition();
    const pqUrl = `https://hint.code-javascript.com/getPalRes`;
    const formData = {e, d};
    const response = await fetch (pqUrl, {
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    const palRes = JSON.parse(data)[0].queryRes.toString();
    const palResTxt = JSON.parse(data)[0].queryRes;
    if(palRes === "noquery") {
        setTimeout(()=> {
            hideSpinner()
            noPalRes()
        }, 500)
    }
    else{
        runJs()
        let palJSInsert;
        let palTrArray = [];
        let palComTrArray = [];
        if(inputLang != "en" && autoTrPal === true && palRes.includes(' //') && palRes.includes('\n')||
           inputLang != "en" && autoTrPal === true && palRes.includes('// ') && palRes.includes('\n') ){
            palResToTr = palRes.split('\n');
            for(let l = 0; l < palResToTr.length; l++){
                if(palResToTr[l].trim().startsWith('//')){
                    let comLiNum = '_ö_ö_ö_' + l;
                    palTrArray.push(comLiNum);
                    palComTrArray.push(comLiNum + palResToTr[l]);
                }else if(palResToTr[l].trim().includes(' //') || palResToTr[l].includes('// ')){
                    let comLiNum = '_ö_ö_ö_' + l;
                    let cmtToPush = '// ' + palResToTr[l].split('//')[1];
                    let lineToPush = palResToTr[l].split('//')[0];
                    palTrArray.push(lineToPush);
                    palTrArray.push(comLiNum);
                    palComTrArray.push(comLiNum + cmtToPush);
                }else{
                    palTrArray.push(palResToTr[l]);
                }
            }
            await waitAlwaysForMs(100);
            let cmts = palComTrArray.join('\n');
            const newTrCmt = await cmtTr(cmts);
            const newComTr = eToEn = newTrCmt[0].map((item) => item[0]).join("");
            const finalCmtArray = newComTr.split('\n');
            let recompPalC;
            let recompPalCPre;
            await waitAlwaysForMs(100);
            finalCmtArray.forEach((cmt)=>{
                let newCleanCmt = '// '+ cmt.split('//')[1].trim();
                let cmtPos1 = cmt.split('//')[0];
                let cmtPos = cmtPos1.trim();
                const index = palTrArray.indexOf(cmtPos);
                palTrArray.splice(index, 1, newCleanCmt);
                recompPalCPre = palTrArray.join('\n');
            });
            recompPalC = await cleanArrayTr(recompPalCPre);
            await waitAlwaysForMs(100);
            palJSInsert = js_beautify(recompPalC.trim(), options) 
        }else{
            palJSInsert = js_beautify(palRes.trim(), options)
        }
        const splitPalJSInsert = palJSInsert.split('\n').join('\n' + ' '.repeat(lastPrecedingLineIndent));
        insertPalJsTextAtCursor('\n' + ' '.repeat(lastPrecedingLineIndent) + splitPalJSInsert);
        let scrollToPos = Number(caretGlobalPosition.top) + (palJSInsert.split('\n').length * lineHeight);
        if(scrollToPos > jsCodeEdit.offsetHeight){
            jsCodeEdit.scrollTop = scrollToPos;
        }
        let xpalquestionqjs = ogq.replaceAll('//pal', '').replaceAll('// pal', '').trim();
        let xpalquestionscodejs = palRes;
        let xpalquestionscodeHtml = "";
        let xpalquestionscodeCss = "";
        let xpalquestionsourcejs = "";
        let xpalquestionscorejs = "";
        let xpalquestionsourceurljs = "";
        let xpalquestionsourcePwd = userIdVerify;
        const formData = {xpalquestionqjs, xpalquestionscodejs, xpalquestionscodeHtml, xpalquestionscodeCss, xpalquestionsourcejs, xpalquestionscorejs, xpalquestionsourceurljs, xpalquestionsourcePwd};
            const response = await fetch (`${window.location.origin}/insertQuestionByUser`, { 
            method: 'post', 
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(formData) 
        });
        hideSpinner()
    }
}

async function cmtTr(cmts){
    const inputLanguage = "auto";
    const outputLanguage = inputLang;
    const globalUrl = `${isSecureCon}${afterSecure}${actionOne}${codejs}.com${preUrl}${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(cmts)}`;
    try {
        let response = await fetch(globalUrl);
        return await response.json();
    } 
    catch (error) {
        console.log(error);
    }
}

function removeEmptyLines(txt){
    return txt.split(/\r?\n/) 
    .filter(line => line.trim() !== "")
    .join("\n");
}

function cleanArrayTr(txt){
    return txt.split(/\r?\n/) 
    .filter(line => !line.trim().startsWith('_ö_ö_ö_'))
    .join("\n");
}


function setRangeToEnd(){
    const selection = window.getSelection();
    const range = document.createRange();
    selection.removeAllRanges();
    range.selectNodeContents(jsCodeEdit);
    range.collapse(false);
    selection.addRange(range);
    jsCodeEdit.focus();
    jsCodeEdit.scrollTop = jsCodeEdit.scrollHeight;
    runJs();
}

async function goFullScreenMaxWidth(e, r, d){
    loadSpinner();
    runJs()
    const caretGlobalPosition = await getCaretGlobalPosition();
    const pqUrl = `${window.location.origin}/getPalJSCodexvv398jjudjnsnnxg334HJD777JJ83xnnhhdJKKI93382kjUIodbhvoai85983t45hancqJJH8889kjfffd2344JDKKj4`;
    const formData = {e};
    const response = await fetch (pqUrl, {
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    const palRes = JSON.parse(data)[0].queryRes.toString();
    const palResTxt = JSON.parse(data)[0].queryRes;
    if(palRes === "noquery") {
        goXFullXScreenMaxWidth(e, r, d);
    }
    else{
        hideSpinner()
        runJs()
        const palJSInsert = js_beautify(palResTxt[0].questionscode.trim(), options)
        const splitPalJSInsert = palJSInsert.split('\n').join('\n' + ' '.repeat(lastPrecedingLineIndent));
        insertPalJsTextAtCursor('\n' + ' '.repeat(lastPrecedingLineIndent) + splitPalJSInsert);
        let scrollToPos = Number(caretGlobalPosition.top) + (palJSInsert.split('\n').length * lineHeight);
        if(scrollToPos > jsCodeEdit.offsetHeight){
            jsCodeEdit.scrollTop = scrollToPos;
        }
    }  
}


function addBootstrap4Scripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0); 

   let bootstrap4JQueryScript = qodeIFrame.createElement('script');
   bootstrap4JQueryScript.type = "text/javascript";
   bootstrap4JQueryScript.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js";
   bootstrap4JQueryScript.id = "bootstrap4Links";
   qodeIFrameHead.appendChild(bootstrap4JQueryScript);

   let bootstrap4Link = qodeIFrame.createElement('link');
   bootstrap4Link.rel = "stylesheet";
   bootstrap4Link.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css";
   bootstrap4Link.id = "bootstrap4Links";
   qodeIFrameHead.appendChild(bootstrap4Link); 


   let bootstrap4Script = qodeIFrame.createElement('script');
   bootstrap4Script.type = "text/javascript";
   bootstrap4Script.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js";
   bootstrap4Script.id = "bootstrap4Links"
   qodeIFrameHead.appendChild(bootstrap4Script);
   runJs();
}

function addBootstrap5Scripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
   let qodeIFrameBody = qodeIFrame.getElementsByTagName('body').item(0); 

   let bootstrap5JQueryScript = qodeIFrame.createElement('script');
   bootstrap5JQueryScript.type = "text/javascript";
   bootstrap5JQueryScript.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js";
   bootstrap5JQueryScript.id = "bootstrap5Links";
   qodeIFrameBody.appendChild(bootstrap5JQueryScript);

   let bootstrap5Link = qodeIFrame.createElement('link');
   bootstrap5Link.rel = "stylesheet";
   bootstrap5Link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
   bootstrap5Link.id = "bootstrap5Links";
   qodeIFrameHead.appendChild(bootstrap5Link); 

   let bootstrap5Script = qodeIFrame.createElement('script');
   bootstrap5Script.type = "text/javascript";
   bootstrap5Script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
   bootstrap5Script.id = "bootstrap5Links"
   qodeIFrameBody.appendChild(bootstrap5Script);
   runJs();
}

function addReactScripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
   let qodeIFrameBody = qodeIFrame.getElementsByTagName('body').item(0); 

   let reactScriptOne = qodeIFrame.createElement('script');
   reactScriptOne.type = "text/javascript";
   reactScriptOne.src = "https://unpkg.com/react@18/umd/react.development.js";
   reactScriptOne.id = "reactLinks";
   qodeIFrameBody.appendChild(reactScriptOne);

   let reactScriptTwo = qodeIFrame.createElement('script');
   reactScriptTwo.type = "text/javascript";
   reactScriptTwo.src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js";
   reactScriptTwo.id = "reactLinks"
   qodeIFrameBody.appendChild(reactScriptTwo);
   runJs();
}
function addJQueryScripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
   let jQueryScript = qodeIFrame.createElement('script');
   jQueryScript.type = "text/javascript";
   jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
   jQueryScript.id = "jQueryLinks";
   qodeIFrameHead.appendChild(jQueryScript);
   runJs();
}

function addTailwindScripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
   let tailwindScript = qodeIFrame.createElement('script');
   tailwindScript.type = "text/javascript";
   tailwindScript.src = "https://cdn.tailwindcss.com";
   tailwindScript.id = "tailwindLinks";
   qodeIFrameHead.appendChild(tailwindScript);
   runJs();
}

function addVueScripts() {
   const qodeIFrame = iframe.contentDocument;
   let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0); 

   let vueScriptOne = qodeIFrame.createElement('script');
   vueScriptOne.type = "text/javascript";
   vueScriptOne.src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
   vueScriptOne.id = "vueLinks";
   qodeIFrameHead.appendChild(vueScriptOne);

   let vueScriptTwo = qodeIFrame.createElement('script');
   vueScriptTwo.type = "text/javascript";
   vueScriptTwo.src = "https://unpkg.com/vuex";
   vueScriptTwo.id = "vueLinks"

   qodeIFrameHead.appendChild(vueScriptTwo);
   runJs();

}

function removeScripts(scriptId){
    const qodeIFrame = iframe.contentDocument;
    let removeLinks = qodeIFrame.querySelectorAll('#'+scriptId.name);
    const librariesDataNew = librariesData.innerText.replaceAll(`${scriptId.name},`, "");
    librariesData.innerText = librariesDataNew;

    removeLinks.forEach(function(removableLink){

        removableLink.remove();
    });
    let qodeIFrameHead = qodeIFrame.getElementsByTagName('head').item(0);
}

const html_boilerplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Code JS</title>
  </head>
  <body>

  </body>
</html>
`


function loadCode() {
html_code.textContent = html_beautify(localStorage[thisFileId+'html_code'], options);
css_code.textContent =  css_beautify(localStorage[thisFileId+'css_code'], options);
js_code.textContent =  js_beautify(localStorage[thisFileId+'js_code'], options);

htmlCodeEdit.textContent =  html_beautify(localStorage[thisFileId+'html_code'], options);
cssCodeEdit.textContent =  css_beautify(localStorage[thisFileId+'css_code'], options);
jsCodeEdit.textContent =  js_beautify(localStorage[thisFileId+'js_code'], options);
/*resultHost.src = `https://code-javascript.com/projects?file=${thisFileId}`;*/

changeFontSizeOnLoad();
changePrismThemeOnLoad();
changeFontThemeOnLoad();
runPreferencesOnLoad();
initInEditorSearch();
runHtml();
runCss();
runJs();
trustFile();
addHeadTags();
initLibrariesOnLoad();
isMobileDeviceCheck();
runHtml();
runCss();
runJs();
}
const htmlData = 'null';
const cssData = 'null';
const jsData = 'null';
function loadData() {
    if(htmlData.startsWith("null") && htmlData.length < 5){
        localStorage[thisFileId+'html_code'] = html_boilerplate; //"<div>\n "+ "  \n" + "</div>";
    }else if(htmlData.length <= 1 && Array.from(htmlData)[0] == " "){
        localStorage[thisFileId+'html_code'] = html_boilerplate; //"<div>\n "+ "  \n" + "</div>";
    }else{
        localStorage[thisFileId+'html_code'] = htmlData;
    }

    if(cssData.startsWith("null") && cssData.length < 5){
        localStorage[thisFileId+'css_code'] = "body{\n"+"  \n"+"}";
    }else if(cssData.length <= 1 && Array.from(cssData)[0] == " "){
        localStorage[thisFileId+'css_code'] = "body{\n"+"  \n"+"}";
    }else{
        localStorage[thisFileId+'css_code'] = cssData;
    }

    if(jsData.startsWith("null") && jsData.length < 5){
        localStorage[thisFileId+'js_code'] = "";
    }else{
        localStorage[thisFileId+'js_code'] = jsData;
    }
    if(jsData.length > htmlData.length){
        jsToggleBtn.click();
    }
    loadCode();
}
window.onload = function(){
    loadData();
}

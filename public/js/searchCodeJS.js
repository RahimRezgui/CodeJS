function prePlayVideo(video) {
	video.play();
}

let offsetResults = -1;
const projectsContainer = document.getElementById("gridResults");
const webWrapper = document.getElementById("webResultWrapper");
const webMainContainer = document.getElementById("webResultMain");
const resultsMainSection = document.getElementById("resultSectionWrapper");
const resultsWrapper = document.getElementById("resultContainer");
const webImagesGrid = document.getElementById("webImagesGrid");
const webImagesWrapper = document.getElementById("webImagesResultWrapper");
const webVideosContainer = document.getElementById("videoResultMain");
const videoResultsWrapper = document.getElementById("videoResultWrapper");
const soResultsWrapper = document.getElementById("soResultWrapper");
const soResultsContainer = document.getElementById("soResultsContainer");
const snippetsResultsWrapper = document.getElementById("snippetsResults");
const snippetsFrame = document.getElementById("snippetsFrame");
const searchBar = document.getElementById("searchBar");
const searchBarOpen = document.getElementById("searchBarOpen");
const relatedWebWrapper = document.getElementById("relatedWebWrapper");
const relatedSOWrapper = document.getElementById("relatedSOWrapper");
const suggestListElement = document.getElementById("suggestListElement");
const searchSuggestListOpen = document.querySelector(".searchSuggestListOpen");
const inEditorSearchBar = document.querySelector(".searchPopUpContainer");
const inEditorResultWrapper = document.querySelector(".inEditorResultsWrapper");
const loadMoreBtn = document.getElementById("loadMoreResultsBtn");
let filterArray = ["","to","in","a","and","or","the","they"];
//const elementsToHide = document.querySelectorAll(".hiddenElement");
const features = 'menubar=yes,location=yes,resizeable=yes,scrollbars=yes,status=yes'
const windowFeatures = 'menubar=no,location=yes,resizeable=yes,scrollbars=yes,status=yes,height=820,width=720'


const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"), 
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");

    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

function waitForMs(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
};

function removeSuggest(){
    suggestListElement.classList.add("hiddenResults");
    searchSuggestListOpen.classList.add("hiddenResults");
}

async function getHeaderStyles(element){

    event.preventDefault();
                
    offsetResults++;
    removeSuggest();
    const formData = {offsetResults};

    const response = await fetch (`${window.location.origin}/get${element}Templates`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    console.log("OK FETCH RUNNING")
    
    const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();
    console.log(projectsResponse)

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }else if(projectsResponse === "fetchresult") {

        projectsContainer.classList.add('headerGridResults');
        const results = JSON.parse(data)[0].results
        results.forEach(function(element) {
        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement" onclick="openThisElement(this)" id="${element.qodejs_public_file_id}top"> 
                            <span class="fileWrapper fileWrapperLargeHeader">
                                <iframe src="https://code-javascript.com/projects?file=${element.qodejs_public_file_id}"  onclick="openThisElement(this)" class="fileDisplay headerDisplay ${element.qodejs_public_file_id}" id="${element.qodejs_public_file_id}" ></iframe>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                        //await waitForMs(50);
                        //document.getElementById(element.qodejs_public_file_id).contentWindow.eval(`document.getElementById('adBannerContentCodeJS').getElementsByTagName('span')[0].click()`);
                        //document.getElementById(element.qodejs_public_file_id).contentDocument.body.innerHTML = `<style> * {box-sizing: border-box; margin:0; padding:0;}${element.css_data}</style><body>${element.html_Data}</body>`;
                    })
                    //console.log(data)
                    //closeIframeAds();
                    searchBarOpen.value = "UI Styles";
                    //console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
    }
}

async function getFormsStyles(){

    event.preventDefault();
                
    offsetResults++;
    removeSuggest();
    const formData = {offsetResults};

    const response = await fetch (`${window.location.origin}/getFormsTemplates`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    console.log("OK FETCH RUNNING")
    
    const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();
    console.log(projectsResponse)

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }else if(projectsResponse === "fetchresult") {

        projectsContainer.classList.add('formGridResults');
        const results = JSON.parse(data)[0].results
        results.forEach(function(element) {
        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement" onclick="openThisElement(this)" id="${element.qodejs_public_file_id}top"> 
                            <span class="fileWrapper fileWrapperLarge">
                                <iframe src="https://code-javascript.com/projects?file=${element.qodejs_public_file_id}"  onclick="openThisElement(this)" class="fileDisplay formDisplay ${element.qodejs_public_file_id}" id="${element.qodejs_public_file_id}" ></iframe>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                        //await waitForMs(50);
                        //document.getElementById(element.qodejs_public_file_id).contentWindow.eval(`document.querySelector('.wrapperAdCodejsDiv').getElementsByTagName('span')[0].click()`);
                        //document.getElementById(element.qodejs_public_file_id).contentDocument.body.innerHTML = `<style> * {box-sizing: border-box; margin:0; padding:0;}${element.css_data}</style><body>${element.html_Data}</body>`;
                    })
                    //console.log(data)
                    //closeIframeAds();
                    searchBarOpen.value = "UI Styles";
                    //console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
    }
}


async function getCardsStyles(){

    event.preventDefault();
                
    offsetResults++;
    removeSuggest();
    const formData = {offsetResults};

    const response = await fetch (`${window.location.origin}/getCardsTemplates`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    console.log("OK FETCH RUNNING")
    
    const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();
    console.log(projectsResponse)

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }else if(projectsResponse === "fetchresult") {

        projectsContainer.classList.add('tallGridResult');
        const results = JSON.parse(data)[0].results
        results.forEach(function(element) {
        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement" onclick="openThisElement(this)" id="${element.qodejs_public_file_id}top"> 
                            <span class="fileWrapper">
                                <iframe src="https://code-javascript.com/projects?file=${element.qodejs_public_file_id}"  onclick="openThisElement(this)" class="fileDisplay cardDisplay ${element.qodejs_public_file_id}" id="${element.qodejs_public_file_id}" ></iframe>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                        //await waitForMs(50);
                        //document.getElementById(element.qodejs_public_file_id).contentWindow.eval(`document.querySelector('.wrapperAdCodejsDiv').getElementsByTagName('span')[0].click()`);
                        //document.getElementById(element.qodejs_public_file_id).contentDocument.body.innerHTML = `<style> * {box-sizing: border-box; margin:0; padding:0;}${element.css_data}</style><body>${element.html_Data}</body>`;
                    })
                    //console.log(data)
                    //closeIframeAds();
                    searchBarOpen.value = "UI Styles";
                    //console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
    }
}

async function getBtnStyles(element){
    console.log(element.replaceAll(" ", ""))
    event.preventDefault();
    let route = element.replaceAll(" ", "");           
    offsetResults++;
    removeSuggest();
    const formData = {offsetResults};

    const response = await fetch (`${window.location.origin}/get${route}Templates`, { 
        method: 'post', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(formData) 
    });

    const data = await response.json();
    console.log("OK FETCH RUNNING")
    
    const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();
    console.log(projectsResponse)

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }else if(projectsResponse === "fetchresult") {


        const results = JSON.parse(data)[0].results
        results.forEach(function(element) {
        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement" onclick="openThisElement(this)" id="${element.qodejs_public_file_id}top"> 
                            <span class="fileWrapper">
                                <iframe src="https://code-javascript.com/projects?file=${element.qodejs_public_file_id}"  onclick="openThisElement(this)" class="fileDisplay ${element.qodejs_public_file_id}" id="${element.qodejs_public_file_id}" ></iframe>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                        //await waitForMs(50);
                        //document.getElementById(element.qodejs_public_file_id).contentDocument.body.innerHTML = `<style> * {box-sizing: border-box; margin:0; padding:0;}${element.css_data}</style><body>${element.html_Data}</body>`;
                        //document.getElementById(element.qodejs_public_file_id).contentWindow.eval(`document.querySelector('.wrapperAdCodejsDiv').getElementsByTagName('span')[0].click()`);
                    })
                    //console.log(data)
                    
                    searchBarOpen.value = "UI Styles";
                    //console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
    }
}


async function searchProjects(event){
                

                event.preventDefault();
                
                offsetResults++;
                /*if(offsetResults == 0){
                    offsetResults++
                }*/
                removeSuggest();
                console.log(offsetResults)
                const searchTerm = searchBar.value;
                const formData = {searchTerm, offsetResults}
                console.log(formData, offsetResults)
                const response = await fetch (`${window.location.origin}/searchProjects`, { 
                method: 'post', 
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(formData) 
                });

                const data = await response.json();
                console.log("OK FETCH RUNNING")
                //console.log(data)
                const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();

                if(projectsResponse === "nodatatofetch") {
                    console.log("no data to fetch")
                }
                else if(projectsResponse === "fetchresult") {
                    const results = JSON.parse(data)[0].results
                    results.forEach(function(element) {
                        /*const projectDate = new Date(element.date_last_saved).toString();
                        projectDate = projectDate.slice(0, 14)*/

                        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement"> 
                            <span class="fileWrapper">
                                <a href="https://codejs.com/qodejs?file=${element.qodejs_public_file_id}" target="_blank"><img class="fileImg" id="${element.qodejs_public_file_id}" src="${element.preview_image_data}" alt="${element.public_file_name}"></a>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                    })
                    console.log(data)
                    searchBarOpen.value = searchTerm;
                    console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
                    
                    
                }

                removeSuggest();
}

async function searchJSLogic(event){
                

                event.preventDefault();
                
                offsetResults++;
                /*if(offsetResults == 0){
                    offsetResults++
                }*/
                removeSuggest();
                console.log(offsetResults)
                const searchTerm = searchBar.value;
                const formData = {searchTerm, offsetResults}
                console.log(formData, offsetResults)
                const response = await fetch (`${window.location.origin}/getJSCodeRes`, { 
                method: 'post', 
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(formData) 
                });

                const data = await response.json();
                console.log("OK FETCH RUNNING")
                //console.log(data)
                const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();

                if(projectsResponse === "nodatatofetch") {
                    console.log("no data to fetch")
                }
                else if(projectsResponse === "fetchresult") {
                    const results = JSON.parse(data)[0].results
                    results.forEach(function(element) {
                        /*const projectDate = new Date(element.date_last_saved).toString();
                        projectDate = projectDate.slice(0, 14)*/

                        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement"> 
                            <span class="fileWrapper">
                                <a href="https://codejs.com/qodejs?file=${element.qodejs_public_file_id}" target="_blank"><img class="fileImg" id="${element.qodejs_public_file_id}" src="/img/JavaScript-logo.png" alt="${element.public_file_name}"></a>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                    })
                    console.log(data)
                    searchBarOpen.value = searchTerm;
                    console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
                    
                    
                }

                removeSuggest();
}

async function searchInCodeRes(event){
                

                event.preventDefault();
                
                offsetResults++;
                /*if(offsetResults == 0){
                    offsetResults++
                }*/
                removeSuggest();
                console.log(offsetResults)
                const searchTerm = searchBar.value;
                const formData = {searchTerm, offsetResults}
                console.log(formData, offsetResults)
                const response = await fetch (`${window.location.origin}/getInCodeRes`, { 
                method: 'post', 
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(formData) 
                });

                const data = await response.json();
                console.log("OK FETCH RUNNING")
                //console.log(data)
                const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();

                if(projectsResponse === "nodatatofetch") {
                    console.log("no data to fetch")
                }
                else if(projectsResponse === "fetchresult") {
                    const results = JSON.parse(data)[0].results
                    results.forEach(function(element) {
                        /*const projectDate = new Date(element.date_last_saved).toString();
                        projectDate = projectDate.slice(0, 14)*/

                        const projectDate = element.date_last_saved.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }

                            return displayDate
                        } 

                        let formattedDate = calcDate(today,past)
                        console.log(formattedDate) //
                        console.log(preDate)
                        console.log(element)




                        const projectElement = 
                        ` <div class="resultElement"> 
                            <span class="fileWrapper">
                                <a href="https://codejs.com/qodejs?file=${element.qodejs_public_file_id}" target="_blank"><img class="fileImg" id="${element.qodejs_public_file_id}" src="/img/JavaScript-logo.png" alt="${element.public_file_name}"></a>
                                    <span class="fileDataWrapper">
                                        <span class="fileData">
                                            <h2 class="fileName">${element.public_file_name}</h2>
                                            <p class="fileAuthorName">${element.user_name_public_table}</p>
                                        </span>
                                        <span class="fileDataNext">
                                            <h5 class="fileDateLabel">Last updated</h5>
                                            <h6 class="fileDateTime">${formattedDate}</h6>
                                        </span>
                                    </span>
                            </span>
                         </div>`
                        projectsContainer.insertAdjacentHTML('beforeend', projectElement);
                    })
                    console.log(data)
                    searchBarOpen.value = searchTerm;
                    console.log(document.querySelector(".active").innerText)
                    resultsWrapper.classList.remove("hiddenResults");
                    projectsContainer.classList.remove("hiddenResults");
                    resultsMainSection.classList.remove("hiddenResults");
                    
                    
                }

                removeSuggest();
}





async function searchCJSWeb(event){
                if(localStorage.QJSSUB === undefined){
                    loadSubMessageDeny()
                    return;
                }

                if(Number(localStorage.QJSSUB) < 3){
                    loadSubMessageDeny()
                    return;
                }

                event.preventDefault();
                offsetResults++;
                console.log(offsetResults)
                const searchQuery = searchBar.value;
                const searchMarket = " ";
                const formData = {searchQuery, offsetResults, searchMarket}
                console.log(formData, offsetResults)
                const response = await fetch (`${window.location.origin}/searchCJSWeb`, { 
                method: 'post', 
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(formData) 
                });

                const data = await response.json();
                console.log("OK FETCH RUNNING")
                //console.log(data)
                const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();

                if(projectsResponse === "nodatatofetch") {
                    console.log("no data to fetch")
                }
                else if(projectsResponse === "fetchresult") {
                    resultsLenght = JSON.parse(data)[0].results.webPages.value;
                    resultsLenght.forEach(function(element){
                        console.log(element)
                    let websiteName = element.url.replaceAll("https://", "/");
                    let websiteSplitName = websiteName.split("/")[1];
                    //let faviconUrl = `https://icons.duckduckgo.com/ip3/"${websiteSplitName}.ico`https://icons.duckduckgo.com/ip3/"${websiteSplitName}.ico
                    console.log(websiteName)
                    console.log(websiteSplitName)
                    const projectElement = 
                      ` <div id="${element.url}" onclick="openWebResult(this)"  class="webResutElement">
                            <span class="webResultUrlWrapper"><img class="webResultFavicon" src="https://icons.duckduckgo.com/ip3/${websiteSplitName}.ico"><p class="webResultUrl" >${element.displayUrl}</p></span>
                                <a onclick="openWebLink(event)" class="webResultLink" href="${element.url}" target="_blank">${element.name}</a>
                                <p class="webResultText">${element.snippet}</p>
                        </div>`
                    webMainContainer.insertAdjacentHTML('beforeend', projectElement);
                    })

                    searchBarOpen.value = searchQuery;
                    console.log(document.querySelector(".active").innerText)
                    webMainContainer.classList.remove("hiddenResults");
                    resultsWrapper.classList.remove("hiddenResults");
                    webWrapper.classList.remove("hiddenResults");
                    
                    setTimeout(()=>{
                        sideSearchSuggestInsert()
                    }, 500);

                    function sideSearchSuggestInsert(){
                    
                    console.log("now beginning side related search suggest")
                    let term = searchQuery;
                    term = term.replaceAll("    ", " ");
                    term = term.replaceAll("   ", " ");
                    term = term.replaceAll("  ", " ");
                    let lowerTerm = term.trim().toLowerCase();
                    let searchTermSuggestions = lowerTerm.split(" ");
                    let filteredKeywords = searchTermSuggestions.filter(item => !filterArray.includes(item));
                    let suggestListLength = 1;
                    let oldList = document.querySelectorAll(".relatedElement");
                    oldList.forEach(function(listEl){
                        listEl.remove();
                    });

                    for (let qwery of sortedQwery) {

                    //var str = "initcall7773107b start-7273-464d javascript -9374-1bff75accc15TopCenter";
                    //var sub1 = ["initcall","TopCenter","javascript"];
                    //var sub2 = ["start"]
                    qwery = qwery.toLowerCase();
                    var acceptedSuggestion = filteredKeywords.map(string => qwery.includes(string)).every(Boolean);
                    //&& sub2.map(string => str.includes(string)).every(Boolean);

                    if(acceptedSuggestion === true && suggestListLength <= 7){
                    let sideSearch = `
                    <span onclick="sideSearch(this)" class="relatedElement">
                    <span class="relatedSearchIcon"><i class="fas fa-search"></i></span>
                    <h4 class="relatedText">${qwery}</h4>
                    </span>`



                    relatedWebWrapper.insertAdjacentHTML('beforeend', sideSearch);
                    console.log(qwery)
                    suggestListLength++;
                    }

                    //console.log(acceptedSuggestion);
                    }
                }


                    /*searchBarOpen.value = searchQuery;
                    console.log(document.querySelector(".active").innerText)
                    webMainContainer.classList.remove("hiddenResults");
                    resultsWrapper.classList.remove("hiddenResults");
                    webWrapper.classList.remove("hiddenResults");*/
                    
                    //projectsContainer.classList.remove("hiddenResults");
                    //resultsMainSection.classList.remove("hiddenResults");
                }

removeSuggest();
}


async function searchCJSImages(event){
    if(localStorage.QJSSUB === undefined){
        loadSubMessageDeny()
        return;
    }

    if(Number(localStorage.QJSSUB) < 3){
        loadSubMessageDeny()
        return;
    }
    console.log("search images")
    event.preventDefault();
    offsetResults++;
    if(offsetResults == 0){
        offsetResults++
    }
    console.log(offsetResults)
    const searchQuery = searchBar.value;
    const searchMarket = " ";
    const formData = {searchQuery, offsetResults, searchMarket}
    console.log(formData, offsetResults)
    const response = await fetch (`${window.location.origin}/searchCJSImages`, { 
    method: 'post', 
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(formData) 
    });

    const data = await response.json();
    console.log("OK FETCH RUNNING")
    //console.log(data)
    const projectsResponse = JSON.parse(data)[0].projectsDataFetch.toString().toLowerCase();

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }
    else if(projectsResponse === "fetchresult") {
        if(!JSON.parse(data)[0].results.value){
            document.getElementById("webImagesTabBtn").click()
        }
        resultsLenght = JSON.parse(data)[0].results.value;
        resultsLenght.forEach(function(element){
        console.log(element)

        const projectElement = 
        ` <div onclick="openModal()" class="webImgElement">
            <img class="webImg" src="${element.contentUrl}" alt="${element.name}">
          </div>`
        webImagesGrid.insertAdjacentHTML('beforeend', projectElement);
    })
    searchBarOpen.value = searchQuery;
    console.log(document.querySelector(".active").innerText)
    //webMainContainer.classList.remove("hiddenResults");
    resultsWrapper.classList.remove("hiddenResults");
    webImagesWrapper.classList.remove("hiddenResults");
    removeSuggest();
}

}


async function searchCJSVideos(event){
    if(localStorage.QJSSUB === undefined){
        loadSubMessageDeny()
        return;
    }

    if(Number(localStorage.QJSSUB) < 3){
        loadSubMessageDeny()
        return;
    }
    console.log("search videos")
    event.preventDefault();
    offsetResults++;
    if(offsetResults == 0){
        offsetResults++
    }
    console.log(offsetResults)
    const searchQuery = searchBar.value;
    const searchMarket = " ";
    const formData = {searchQuery, offsetResults, searchMarket}
    console.log(formData, offsetResults)
    const response = await fetch (`${window.location.origin}/searchCJSVideos`, { 
    method: 'post', 
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(formData) 
    });

    const videoData = await response.json();
    console.log("OK FETCH RUNNING")
    //console.log(data)
    const projectsResponse = JSON.parse(videoData)[0].projectsDataFetch.toString().toLowerCase();

    if(projectsResponse === "nodatatofetch") {
        console.log("no data to fetch")
    }
    else if(projectsResponse === "fetchresult") {
        resultsLenght = JSON.parse(videoData)[0].results.value;
        resultsLenght.forEach(function(element){
        console.log(element)
        console.log(element.hostPageUrl)
        let hostString = element.hostPageUrl;
                if(!element.hostPageUrl){
                    return;
                }

                else if(element.hostPageUrl.includes("youtube")){
                        console.log("HOST IS YOUTUBE")

                        const projectDate = element.datePublished.slice(0, 10).toString();
                        const date = new Date(projectDate);
                        date.setDate(date.getDate() + 1).toString();
                        //const displayDate = new Date(`${projectDate}` + 1);
                        //projectDate.setDate(projectDate.getDate()).toString().trim(0,14);
                        const preDate = date.toISOString().slice(0, 10);

                        let today = new Date()
                        let past = new Date(preDate) // remember this is equivalent to 06 01 2010
                        //dates in js are counted from 0, so 05 is june

                        function calcDate(date1,date2) {
                            let diff = Math.floor(date1.getTime() - date2.getTime());
                            let day = 1000 * 60 * 60 * 24;
                            let hour = 1000 * 60 * 60;
                            let minute = 1000 * 60;
 
                            let minutes = Math.floor(diff/minute);
                            let hours = Math.floor(minutes/60);
                            let days = Math.floor(hours/24);
                            let months = Math.floor(days/31);
                            let years = Math.floor(months/12);

                            let message = date2.toDateString();
                            let displayDate;
    
                            if(minutes <= 59){
                                displayDate = minutes + " minutes ago"
                            }else if (hours <= 24){
                                displayDate = hours + " hours ago"
                            }else if (days <= 30){
                                displayDate = days + " days ago"
                            }else if (months <= 12){
                                displayDate = months + " months ago"
                            }else {
                                displayDate = years + " years ago"
                            }
                            
                            return displayDate;

                        }
                        const viewCount = element.viewCount;
                        function calcViews(viewCount){
                            let displayViews;
                            if(viewCount >= 10000000000){ //BILLION
                                displayViews = (viewCount / 1000000000).toFixed(0) + "B views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000000000){ //BILLION
                                displayViews = (viewCount / 1000000000).toFixed(1) + "B views";
                                console.log(displayViews)
                            }else if(viewCount >= 100000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(0) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 10000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(0) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(1) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 10000){ //THOUSANDS
                                displayViews = (viewCount / 1000).toFixed(0) + "K views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000){ //THOUSANDS
                                displayViews = (viewCount / 1000).toFixed(1) + "K views";
                                console.log(displayViews)
                            }else if(viewCount >= 100){ //UNLABELED FROM 999 AND BELOW
                                displayViews = viewCount + " views";
                                console.log(displayViews)
                            }
                            return displayViews;
                        }
                        let formattedViews = calcViews(viewCount);
                        let formattedDate = calcDate(today,past);
                        console.log(formattedDate) //
                        console.log(formattedViews)
                        console.log(preDate)
        const projectElement = 
        ` <div  class="videoResutElement">

        <div class="videoFlexElement">
        <div onclick="openVideoModal(this)" class="videoImgElement" id="${element.hostPageUrl}">
          <img class="videoImg" src="${element.thumbnailUrl}">
          <video class="videoPrePlay" onmouseover="prePlayVideo(this)" src="${element.motionThumbnailUrl || element.thumbnailUrl}"  muted></video>
        </div>

        <div class="videoTextElement">
          <div class="videoTextTop">
          <h2 class="videoResultTitle">${element.name}</h2>
          <span class="videoQuestionDetails"><span class="soAnswerCount">${formattedViews}</span><span class="middot">&middot</span><span class="soLastActivity soScore">${formattedDate}</span></span>
          <span class="videoChannelWrapper"><span class="channelName">${element.creator.name || " "}</span></span>

          <div class="videoDescription">${element.description}</div>
          <span class="videoDetailsBottom"><span class="videoSubtitle"><i class="fa-regular fa-closed-captioning"></i><span class="videoSubtitleText">Subtitles</span></span><span class="videoLastActivity"><a href="${element.hostPageUrl}" target="_blank">Visit channel</a></span></span>
          </div>
        </div>
        </div>

        <div class="videoOptionsWrapper">
          <span class="videoFavoriteBtn"><i class="fa-regular fa-star"></i></span>
        </div>

      </div>`
        webVideosContainer.insertAdjacentHTML('beforeend', projectElement);
    }
    

    });
    


    }


    searchBarOpen.value = searchQuery;
    console.log(document.querySelector(".active").innerText)
    //webMainContainer.classList.remove("hiddenResults");
    resultsWrapper.classList.remove("hiddenResults");
    videoResultsWrapper.classList.remove("hiddenResults");
    removeSuggest();
}

//}




async function searchSO() {
    const searchQuery = searchBar.value.trim().split(" ").join("%20");
    const originalQuery = searchBar.value.trim();
    offsetResults++;
    if(offsetResults == 0){
        offsetResults++
    }
    console.log(searchQuery)
    //const response = await fetch (`https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=${searchQuery}&site=stackoverflow`, { 
    const response = await fetch (`https://api.stackexchange.com/2.3/search/advanced?page=${offsetResults}&pagesize=100&order=desc&sort=relevance&q=${searchQuery}&site=stackoverflow`, { 
            method: 'get', 
            headers: {"Content-Type": 'application/json'},
    });

    const soResults = await response.json();
    soResults.items.forEach(function(item){
        let viewCount = item.view_count;
        function calcViews(viewCount){
                            let displayViews;
                            if(viewCount < 1000){
                                displayViews = viewCount + " views";
                                console.log(displayViews)
                            }else if(viewCount >= 10000000000){ //BILLION
                                displayViews = (viewCount / 1000000000).toFixed(0) + "B views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000000000){ //BILLION
                                displayViews = (viewCount / 1000000000).toFixed(1) + "B views";
                                console.log(displayViews)
                            }else if(viewCount >= 100000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(0) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 10000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(0) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000000){ //MILLION
                                displayViews = (viewCount / 1000000).toFixed(1) + "M views";
                                console.log(displayViews)
                            }else if(viewCount >= 10000){ //THOUSANDS
                                displayViews = (viewCount / 1000).toFixed(0) + "K views";
                                console.log(displayViews)
                            }else if(viewCount >= 1000){ //THOUSANDS
                                displayViews = (viewCount / 1000).toFixed(1) + "K views";
                                console.log(displayViews)
                            }else if(viewCount >= 100){ //UNLABELED FROM 999 AND BELOW
                                displayViews = viewCount + " views";
                                console.log(displayViews)
                            }
                            return displayViews;
                        }
                        
                        let itemDate = item.creation_date * 1000;
                        let formattedDate = new Date(itemDate).toLocaleDateString("en-US");
                        let formattedViews = calcViews(viewCount);
                        console.log(formattedViews)

        let soElement = `<div onclick="openSOResult(this)"  class="soResutElement" id="${item.link}">
        <span class="webResultUrlWrapper"><img class="webResultFavicon" src="https://icons.duckduckgo.com/ip3/stackoverflow.com.ico"><p class="webResultUrl" >${item.link}</p></span>
        <a onclick="openSOLink(event)" class="webResultLink " href="${item.link}">${item.title}</a>
        <span class="soQuestionDetails"><span class="soAnswerCount">${item.answer_count} Answers</span><span class="middot">&middot</span><span class="soLastActivity soScore">Score: ${item.score}</span><span class="middot">&middot</span><span class="soLastActivity">${formattedViews}</span><span class="middot">&middot</span><span class="soLastActivity">First published ${formattedDate}</span></span>
      </div>`
      soResultsContainer.insertAdjacentHTML('beforeend', soElement);      
    })
    let term = originalQuery;
    term = term.replaceAll("    ", " ");
    term = term.replaceAll("   ", " ");
    term = term.replaceAll("  ", " ");
    let lowerTerm = term.trim().toLowerCase();
    let searchTermSuggestions = lowerTerm.split(" ");
    let filteredKeywords = searchTermSuggestions.filter(item => !filterArray.includes(item));
    let suggestListLength = 1;
    let oldList = document.querySelectorAll(".relatedElement");
    oldList.forEach(function(listEl){
        listEl.remove();
    });

    for (let qwery of sortedQwery) {

        //var str = "initcall7773107b start-7273-464d javascript -9374-1bff75accc15TopCenter";
        //var sub1 = ["initcall","TopCenter","javascript"];
        //var sub2 = ["start"]
        qwery = qwery.toLowerCase();
        var acceptedSuggestion = filteredKeywords.map(string => qwery.includes(string)).every(Boolean);
        //&& sub2.map(string => str.includes(string)).every(Boolean);

        if(acceptedSuggestion === true && suggestListLength <= 7){
            let sideSearch = `
            <span onclick="sideSearch(this)" class="relatedElement">
            <span class="relatedSearchIcon"><i class="fas fa-search"></i></span>
            <h4 class="relatedText">${qwery}</h4>
            </span>`



            relatedSOWrapper.insertAdjacentHTML('beforeend', sideSearch);
            console.log(qwery)
            suggestListLength++;
        }

        console.log(acceptedSuggestion);
    }

    soResultsWrapper.classList.remove("hiddenResults");
    searchBarOpen.value = originalQuery;
    resultsWrapper.classList.remove("hiddenResults");
    //const soItems = JSON.parse(soResults);
    console.log(soResults);
    console.log(soResults.items);
    removeSuggest();
}


function searchSnippets(){
    const searchQuery = searchBar.value.trim().split(" ").join("%20");
    const originalQuery = searchBar.value.trim();
    const snippetsUrl = "https://www.codegrepper.com/search.php?q=" + searchQuery;
    window.open(snippetsUrl, 'snippetsFrame');


    searchBarOpen.value = originalQuery;
    snippetsResultsWrapper.classList.remove("hiddenResults");
    resultsWrapper.classList.remove("hiddenResults");
    removeSuggest();
}
//function searchDirectingReturn(){

//}


function searchDirecting(event) {
    event.preventDefault();

    resultsWrapper.classList.remove("hiddenResults");
    resultsMainSection.classList.remove("hiddenResults");
    projectsContainer.classList.remove('tallGridResult');
    projectsContainer.classList.remove('formGridResults');
    projectsContainer.classList.remove('headerGridResults');

    offsetResults = -1;
    removeSuggest();
    removeSuggestElementsOpen()
    const searchType = document.querySelector(".searchTabBtn.active").innerText;
    const elementsToHide = document.querySelectorAll(".hiddenElement");
    elementsToHide.forEach(function(element){
        element.classList.add("hiddenResults")
    });
    if(searchType === "CodeJS Projects"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchProjects(event)
    }else if(searchType === "JavaScript Logic"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchJSLogic(event)
    }else if(searchType === "In Code"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchInCodeRes(event)
    }else if(searchType === "Web Search"){
        searchBar.value = searchBarOpen.value;
        webMainContainer.innerHTML = "";
        removeSuggest();
        searchCJSWeb(event)
    }else if(searchType === "Web Images"){
        searchBar.value = searchBarOpen.value;
        webImagesGrid.innerHTML = "";
        removeSuggest();
        searchCJSImages(event)
    }else if(searchType === "Videos"){
        searchBar.value = searchBarOpen.value;
        webVideosContainer.innerHTML = "";
        removeSuggest();
        searchCJSVideos(event)
    }else if(searchType === "StackOverflow"){
        searchBar.value = searchBarOpen.value;
        soResultsContainer.innerHTML = "";
        removeSuggest();
        searchSO()
    }else if(searchType === "Snippets"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        searchSnippets()
    }else if(searchType === "Buttons"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles()
    }else if(searchType === "Cards"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getCardsStyles()
    }else if(searchType === "Forms"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getFormsStyles()
    }else if(searchType === "Toggles"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getTogglesStyles()
    }else if(searchType === "Loaders"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getLoadersStyles()
    }else if(searchType === "Inputs"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getInputsStyles()
    }else if(searchType === "Radio Buttons"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getRadioBtnStyles()
    }else if(searchType === "Checkboxes"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getCheckboxesStyles()
    }else if(searchType === "Website Templates"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getWebsiteStyles()
    }
}


function searchDirectingClick(el) {
    event.preventDefault();

    resultsWrapper.classList.remove("hiddenResults");
    resultsMainSection.classList.remove("hiddenResults");
    projectsContainer.classList.remove('tallGridResult');
    projectsContainer.classList.remove('formGridResults');
    projectsContainer.classList.remove('headerGridResults');

    offsetResults = -1;
    removeSuggest();
    removeSuggestElementsOpen()
    const searchType = el.target.innerText;
    const elementsToHide = document.querySelectorAll(".hiddenElement");
    console.log(el)
    elementsToHide.forEach(function(element){
        element.classList.add("hiddenResults")
    });
    if(searchType === "CodeJS Projects"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchProjects(event)
    }else if(searchType === "JavaScript Logic"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchJSLogic(event)
    }else if(searchType === "In Code"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        searchInCodeRes(event)
    }else if(searchType === "Web Search"){
        searchBar.value = searchBarOpen.value;
        webMainContainer.innerHTML = "";
        removeSuggest();
        searchCJSWeb(event)
    }else if(searchType === "Web Images"){
        searchBar.value = searchBarOpen.value;
        webImagesGrid.innerHTML = "";
        removeSuggest();
        searchCJSImages(event)
    }else if(searchType === "Videos"){
        searchBar.value = searchBarOpen.value;
        webVideosContainer.innerHTML = "";
        removeSuggest();
        searchCJSVideos(event)
    }else if(searchType === "StackOverflow"){
        searchBar.value = searchBarOpen.value;
        soResultsContainer.innerHTML = "";
        removeSuggest();
        searchSO()
    }else if(searchType === "Snippets"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        searchSnippets()
    }else if(searchType === "Buttons"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles(searchType)
    }
    else if(searchType === "Headers"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }
    else if(searchType === "Footers"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }else if(searchType === "Cards"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getCardsStyles()
    }else if(searchType === "Forms"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getFormsStyles()
    }else if(searchType === "Website Templates"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getWebsiteStyles()
    }else{
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles(searchType)
    }


    /*else if(searchType === "Toggles"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getTogglesStyles()
    }else if(searchType === "Loaders"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getLoadersStyles()
    }else if(searchType === "Inputs"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getInputsStyles()
    }else if(searchType === "Radio Buttons"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getRadioBtnStyles()
    }else if(searchType === "Checkboxes"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getCheckboxesStyles()
    }*/
}

function searchDirectingMain(event) {
    event.preventDefault();
    removeSuggest();
    removeSuggestElementsOpen()
    searchBarOpen.value = searchBar.value;
    inEditorSearchBar.classList.remove("searchPopUpContainerOpen");
    projectsContainer.classList.remove('tallGridResult');
    projectsContainer.classList.remove('formGridResults');
    projectsContainer.classList.remove('headerGridResults');
    let preferredSearch = localStorage.getItem("preferredSearch");
    if(preferredSearch == null){
        removeSuggest();
        searchDirecting(event);
    }else{
        let searchTabsBtn = document.querySelectorAll(".searchTabBtn");
        searchTabsBtn.forEach(function(stBtn){
            stBtn.classList.remove("active");
            if(stBtn.innerText == preferredSearch){
                stBtn.classList.add("active");
            }
        });

        resultsWrapper.classList.remove("hiddenResults");
        resultsMainSection.classList.remove("hiddenResults");
        const searchType = preferredSearch;
        const elementsToHide = document.querySelectorAll(".hiddenElement");
        console.log(preferredSearch)
        elementsToHide.forEach(function(element){
            element.classList.add("hiddenResults")
        });
        if(searchType === "CodeJS Projects"){
            searchBar.value = searchBarOpen.value;
            projectsContainer.innerHTML = "";
            removeSuggest();
            searchProjects(event)
        }else if(searchType === "JavaScript Logic"){
            searchBar.value = searchBarOpen.value;
            projectsContainer.innerHTML = "";
            removeSuggest();
            searchJSLogic(event)
        }else if(searchType === "In Code"){
            searchBar.value = searchBarOpen.value;
            projectsContainer.innerHTML = "";
            removeSuggest();
            searchInCodeRes(event)
        }else if(searchType === "Web Search"){
            searchBar.value = searchBarOpen.value;
            webMainContainer.innerHTML = "";
            removeSuggest();
            searchCJSWeb(event)
        }else if(searchType === "Web Images"){
            searchBar.value = searchBarOpen.value;
            webImagesGrid.innerHTML = "";
            removeSuggest();
            searchCJSImages(event)
        }else if(searchType === "Videos"){
            searchBar.value = searchBarOpen.value;
            webVideosContainer.innerHTML = "";
            removeSuggest();
            searchCJSVideos(event)
        }else if(searchType === "StackOverflow"){
            searchBar.value = searchBarOpen.value;
            soResultsContainer.innerHTML = "";
            removeSuggest();
            searchSO()
        }else if(searchType === "Snippets"){
            searchBar.value = searchBarOpen.value;
            //soResultsContainer.innerHTML = "";
            removeSuggest();
            searchSnippets()
        }else if(searchType === "Buttons"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles(searchType)
    }
    else if(searchType === "Headers"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }
    else if(searchType === "Footers"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }else if(searchType === "Cards"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getCardsStyles()
    }else if(searchType === "Forms"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getFormsStyles()
    }else if(searchType === "Website Templates"){
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getWebsiteStyles()
    }else{
        searchBar.value = searchBarOpen.value;
        projectsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles(searchType)
    }
    }
    removeSuggest();
}





function loadMoreResults(){
    let searchType = document.querySelector(".searchTabBtn.active").innerText;
    console.log(searchType)
    if(searchType === "CodeJS Projects"){
            searchBar.value = searchBarOpen.value;
            //projectsContainer.innerHTML = "";
            //removeSuggest();
            searchProjects(event)
        }else if(searchType === "JavaScript Logic"){
            searchBar.value = searchBarOpen.value;
            //projectsContainer.innerHTML = "";
            //removeSuggest();
            searchJSLogic(event)
        }else if(searchType === "In Code"){
            searchBar.value = searchBarOpen.value;
            //projectsContainer.innerHTML = "";
            //removeSuggest();
            searchInCodeRes(event)
        }else if(searchType === "Web Search"){
            searchBar.value = searchBarOpen.value;
            //webMainContainer.innerHTML = "";
            //removeSuggest();
            searchCJSWeb(event)
        }else if(searchType === "Web Images"){
            searchBar.value = searchBarOpen.value;
            //webImagesGrid.innerHTML = "";
            //removeSuggest();
            searchCJSImages(event)
        }else if(searchType === "Videos"){
            searchBar.value = searchBarOpen.value;
            //webVideosContainer.innerHTML = "";
            //removeSuggest();
            searchCJSVideos(event)
        }else if(searchType === "StackOverflow"){
            searchBar.value = searchBarOpen.value;
            //soResultsContainer.innerHTML = "";
            //removeSuggest();
            searchSO()
        }else if(searchType === "Snippets"){
            searchBar.value = searchBarOpen.value;
            //soResultsContainer.innerHTML = "";
            //removeSuggest();
            searchSnippets()
        }else if(searchType === "Buttons"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getBtnStyles(searchType)
    }
    else if(searchType === "Headers"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }
    else if(searchType === "Footers"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getHeaderStyles(searchType)
    }else if(searchType === "Cards"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getCardsStyles()
    }else if(searchType === "Forms"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getFormsStyles()
    }else if(searchType === "Website Templates"){
        searchBar.value = searchBarOpen.value;
        //soResultsContainer.innerHTML = "";
        removeSuggest();
        getWebsiteStyles()
    }else{
        searchBar.value = searchBarOpen.value;
        removeSuggest();
        getBtnStyles(searchType)
    }

    //loadMoreBtn
}



function openWebResult(openElement) {
    const url = openElement.id;
    let opened = window.open(url, '_blank', features);
}

function openWebLink(event) {
    event.preventDefault();
    //let opened = window.open(url, '_blank', features);
}

function openSOResult(openElement) {
    const url = openElement.id;
    let opened = window.open(url, '_blank', windowFeatures);
}

function openSOLink(event) {
    event.preventDefault();
    //let opened = window.open(url, '_blank', features);
}

function openEditorSearchBar(event){

    console.log("opening search...")
    if(inEditorSearchBar.classList.contains("searchPopUpContainerOpen")){
        inEditorSearchBar.classList.remove("searchPopUpContainerOpen");
        inEditorResultWrapper.classList.remove("InEditorResultOpen");
        removeSuggestElements()
    }else{
        inEditorSearchBar.classList.add("searchPopUpContainerOpen");
        inEditorResultWrapper.classList.add("InEditorResultOpen");
    }
}


function closeResultSection(){
    const elementsToHide = document.querySelectorAll(".hiddenElement");
    elementsToHide.forEach(function(element){
        element.classList.add("hiddenResults")
    });
    resultsMainSection.classList.add("hiddenResults");
    inEditorResultWrapper.classList.add("InEditorResultOpen");
    inEditorSearchBar.classList.add("searchPopUpContainerOpen");
}



function sideSearch(element){
    searchBar.value = element.innerText.trim();
    searchBarOpen.value = element.innerText.trim();
    searchDirecting(event);
    console.log(element.innerText);

}


function openThisElement(element){
    window.open(`https://codejs.com/qodejs?file=${element.id}`, '_blank')
}



function joinRedirection(){
    window.open(`${window.location.origin}/login`, "_blank")
}

function initVideoDrag(){initDragElement(),initResizeElement()}const videoModalContainer=document.getElementById("videoModalContainer"),videoModal=document.getElementById("videoModal"),videoPopup=document.getElementById("videoPopup"),videoSubContent=document.getElementById("videoSubContentWrapper"),videoPopupHeader=document.getElementById("videoPopupHeader"),videoPopupBtn=document.getElementById("videoPopupBtn"),dockVideoBtn=document.getElementById("dockVideoBtn"),streamElement=document.getElementById("streamElement"),inEditorWrapper=document.getElementById("inEditorResultsWrapper");function initDragElement(){for(var e=0,t=0,n=0,d=0,o=document.getElementsByClassName("videoPopup"),s=null,i=10210,l=0;l<o.length;l++){var a=o[l],u=p(a);a.onmousedown=function(){this.style.zIndex=""+ ++i},u&&(u.parentPopup=a,u.onmousedown=m)}function m(e){(s=this.parentPopup).style.zIndex=""+ ++i,e=e||window.event,n=e.clientX,d=e.clientY,document.onmouseup=r,document.onmousemove=c}function c(o){s&&(o=o||window.event,e=n-o.clientX,t=d-o.clientY,n=o.clientX,d=o.clientY,s.style.top=s.offsetTop-t+"px",s.style.left=s.offsetLeft-e+"px")}function r(){document.onmouseup=null,document.onmousemove=null}function p(e){var t=e.getElementsByClassName("videoPopupHeader");return 1===t.length?t[0]:null}}function initResizeElement(){for(var e,t,n,d=document.getElementsByClassName("videoPopup"),o=null,s=0;s<d.length;s++){var i=d[s],l=document.createElement("div");l.className="resizer-right",i.appendChild(l),l.addEventListener("mousedown",r,!1),l.parentPopup=i;var a=document.createElement("div");a.className="resizer-bottom",i.appendChild(a),a.addEventListener("mousedown",g,!1),a.parentPopup=i;var u=document.createElement("div");u.className="resizer-both",i.appendChild(u),u.addEventListener("mousedown",r,!1),u.parentPopup=i;var m=document.createElement("div");m.className="resizer-left",i.prepend(m),m.addEventListener("mousedown",E,!1),m.parentPopup=i;var c=document.createElement("div");c.className="resizer-both-left",i.prepend(c),c.addEventListener("mousedown",E,!1),c.parentPopup=i}function r(d){o=this.parentPopup,e=d.clientX,t=d.clientY,n=parseInt(document.defaultView.getComputedStyle(o).width,10),parseInt(document.defaultView.getComputedStyle(o).height,10),document.documentElement.addEventListener("mousemove",p,!1),document.documentElement.addEventListener("mouseup",v,!1)}function p(t){o.style.width=n+t.clientX-e+"px",o.style.height=(o.style.width-30)/1.6}function v(){document.documentElement.removeEventListener("mousemove",p,!1),document.documentElement.removeEventListener("mouseup",v,!1)}function E(d){o=this.parentPopup,e=d.clientX,t=d.clientY,n=parseInt(document.defaultView.getComputedStyle(o).width,10),parseInt(document.defaultView.getComputedStyle(o).height,10),document.documentElement.addEventListener("mousemove",h,!1),document.documentElement.addEventListener("mouseup",L,!1)}function h(t){o.style.width=n-t.clientX+e+"px",o.style.height=(o.style.width-30)/1.6}function L(){document.documentElement.removeEventListener("mousemove",h,!1),document.documentElement.removeEventListener("mouseup",L,!1)}function g(d){o=this.parentPopup,e=d.clientX,t=d.clientY,n=parseInt(document.defaultView.getComputedStyle(o).width,10),parseInt(document.defaultView.getComputedStyle(o).height,10),document.documentElement.addEventListener("mousemove",f,!1),document.documentElement.addEventListener("mouseup",y,!1)}function f(e){o.style.width=n+e.clientY-t+"px",o.style.height=(o.style.width-30)/1.6}function y(){document.documentElement.removeEventListener("mousemove",f,!1),document.documentElement.removeEventListener("mouseup",y,!1)}}function videoOGPageRedirect(e){let t=e.id;window.open(t,"_blank")}function openVideoModal(e){let t=e.parentElement.innerText.split("\n")[0],n=e.parentElement.innerText.split("\n")[1];inEditorWrapper.classList.add("hiddenResults");let d=e.id,o=e.id.replaceAll("watch?v=","embed/")+"?autoplay=1";document.querySelector(".videoPageRedirect").id=d,document.getElementById("videoSubViews").innerText=n,document.getElementById("videoSubTitle").innerText=t,window.open(o,"streamElement"),streamElement.classList.remove("hiddenResults"),streamElement.classList.remove("hiddenElement"),videoModalContainer.classList.remove("hiddenResults"),videoModalContainer.classList.remove("hiddenElement"),videoModal.classList.remove("hiddenResults"),videoModal.classList.remove("hiddenElement"),videoPopup.classList.remove("hiddenResults"),videoPopup.classList.remove("hiddenElement"),resultsMainSection.classList.add("hiddenResults")}function closeVideo(){inEditorWrapper.classList.remove("hiddenResults");window.open("about:blank","streamElement"),streamElement.classList.add("hiddenResults"),streamElement.classList.add("hiddenElement"),videoModalContainer.classList.add("hiddenResults"),videoModalContainer.classList.add("hiddenElement"),videoModal.classList.add("hiddenResults"),videoModal.classList.add("hiddenElement"),videoPopup.classList.add("hiddenResults"),videoPopup.classList.add("hiddenElement"),resultsMainSection.classList.remove("hiddenResults")}function popOutVideo(){streamElement.classList.add("noMarginTop"),videoPopup.classList.add("maxHeight750"),videoPopupHeader.classList.remove("hiddenResults"),dockVideoBtn.classList.remove("hiddenResults"),videoModal.classList.add("eventsDisabled"),videoModalContainer.classList.add("hiddenVideoModal"),videoSubContent.classList.add("hiddenResults"),resultsMainSection.classList.add("hiddenResults")}function dockVideo(){videoPopup.style.top="20px",videoPopup.style.left="calc((100% - 1280px)/2",videoPopup.style.width="100%",streamElement.classList.remove("noMarginTop"),videoPopup.classList.remove("maxHeight750"),videoPopupHeader.classList.add("hiddenResults"),dockVideoBtn.classList.add("hiddenResults"),videoModal.classList.remove("eventsDisabled"),videoModalContainer.classList.remove("hiddenVideoModal"),videoSubContent.classList.remove("hiddenResults")}function closeInEditorResultsOrBar(e){inEditorSearchBar.classList.contains("searchPopUpContainerOpen")&&resultsMainSection.classList.contains("hiddenResults")?(inEditorSearchBar.classList.remove("searchPopUpContainerOpen"),resultsMainSection.classList.add("hiddenResults"),inEditorResultWrapper.classList.remove("InEditorResultOpen")):!resultsMainSection.classList.contains("hiddenResults")&&e.target.parentElement.classList.contains("codeEditorOuterWrapper")&&(resultsMainSection.classList.add("hiddenResults"),inEditorSearchBar.classList.add("searchPopUpContainerOpen"))}initVideoDrag();
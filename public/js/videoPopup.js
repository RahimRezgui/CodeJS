window.onload = function() {
  initDragElement();
  initResizeElement();
};

const videoModalContainer = document.getElementById("videoModalContainer");
const videoModal = document.getElementById("videoModal");
const videoPopup = document.getElementById("videoPopup");
const videoSubContent = document.getElementById("videoSubContentWrapper");
const videoPopupHeader = document.getElementById("videoPopupHeader");
const videoPopupBtn = document.getElementById("videoPopupBtn");
const dockVideoBtn = document.getElementById("dockVideoBtn");
const streamElement = document.getElementById("streamElement");


function initDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var popups = document.getElementsByClassName("videoPopup");
  var elmnt = null;
  var currentZIndex = 10210; //TODO reset z index when a threshold is passed

  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);

    popup.onmousedown = function() {
      this.style.zIndex = "" + ++currentZIndex;
    };

    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = "" + ++currentZIndex;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!elmnt) {
      return;
    }

    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    var headerItems = element.getElementsByClassName("videoPopupHeader");

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }
}

function initResizeElement() {
  var popups = document.getElementsByClassName("videoPopup");
  var element = null;
  var startX, startY, startWidth, startHeight;

  for (var i = 0; i < popups.length; i++) {
    var p = popups[i];

    var right = document.createElement("div");
    right.className = "resizer-right";
    p.appendChild(right);
    right.addEventListener("mousedown", initDrag, false);
    right.parentPopup = p;

    var bottom = document.createElement("div");
    bottom.className = "resizer-bottom";
    p.appendChild(bottom);
    bottom.addEventListener("mousedown", initDragBottom, false);
    bottom.parentPopup = p;

    var both = document.createElement("div");
    both.className = "resizer-both";
    p.appendChild(both);
    both.addEventListener("mousedown", initDrag, false);
    both.parentPopup = p;

    var left = document.createElement("div");
    left.className = "resizer-left";
    p.prepend(left);
    left.addEventListener("mousedown", initDragLeft, false);
    left.parentPopup = p;

    var bothLeft = document.createElement("div");
    bothLeft.className = "resizer-both-left";
    p.prepend(bothLeft);
    bothLeft.addEventListener("mousedown", initDragLeft, false);
    bothLeft.parentPopup = p;
  }

  

  function initDrag(e) {
    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDrag, false);
    document.documentElement.addEventListener("mouseup", stopDrag, false);
  }

  function doDrag(e) {
    element.style.width = startWidth + e.clientX - startX + "px";
    element.style.height = (element.style.width - 30) / 1.6; //startHeight + e.clientY - startY + "px";
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }

  function initDragLeft(e) {
    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDragLeft, false);
    document.documentElement.addEventListener("mouseup", stopDragLeft, false);
  }

  function doDragLeft(e) {
    element.style.width = startWidth - e.clientX + startX + "px";
    element.style.height = (element.style.width - 30) / 1.6; //startHeight + e.clientY - startY + "px";
  }

  function stopDragLeft() {
    document.documentElement.removeEventListener("mousemove", doDragLeft, false);
    document.documentElement.removeEventListener("mouseup", stopDragLeft, false);
  }

  function initDragBottom(e) {
    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDragBottom, false);
    document.documentElement.addEventListener("mouseup", stopDragBottom, false);
  }

  function doDragBottom(e) {
    //element.style.height = startHeight + e.clientY - startY + "px";
    //element.style.width = (element.style.height + 30) * 1.6 + "px";

    element.style.width = startWidth + e.clientY - startY + "px";
    element.style.height = (element.style.width - 30) / 1.6; //startHeight + e.clientY - startY + "px";
  }

  function stopDragBottom() {
    document.documentElement.removeEventListener("mousemove", doDragBottom, false);
    document.documentElement.removeEventListener("mouseup", stopDragBottom, false);
  }
}

function videoOGPageRedirect(element){
  let link = element.id;
  window.open(link, "_blank")
}


function openVideoModal(element){
  let videoTitle = element.parentElement.innerText.split("\n")[0];
  let videoViewsCount = element.parentElement.innerText.split("\n")[1];
  let inEditorWrapper = document.getElementById("inEditorResultsWrapper");
  inEditorWrapper.classList.add("hiddenResults");
  let redirectLink = element.id;
  let link = element.id.replaceAll("watch?v=", "embed/") + "?autoplay=1";
  document.querySelector(".videoPageRedirect").id = redirectLink;
  document.getElementById("videoSubViews").innerText = videoViewsCount;
  document.getElementById("videoSubTitle").innerText = videoTitle;
  window.open(link, 'streamElement');
  streamElement.classList.remove("hiddenResults");
  streamElement.classList.remove("hiddenElement");
  //streamElement.classList.remove("noMarginTop");
  videoModalContainer.classList.remove("hiddenResults");
  videoModalContainer.classList.remove("hiddenElement");
  videoModal.classList.remove("hiddenResults");
  videoModal.classList.remove("hiddenElement");
  videoPopup.classList.remove("hiddenResults");
  videoPopup.classList.remove("hiddenElement");
  resultsMainSection.classList.add("hiddenResults");
  //videoPopup.classList.remove("maxHeight750");
}

function closeVideo(){
  let inEditorWrapper = document.getElementById("inEditorResultsWrapper");
  inEditorWrapper.classList.remove("hiddenResults");
  let link = "about:blank";
  window.open(link, 'streamElement');
  streamElement.classList.add("hiddenResults");
  streamElement.classList.add("hiddenElement");
  //streamElement.classList.remove("noMarginTop");
  videoModalContainer.classList.add("hiddenResults");
  videoModalContainer.classList.add("hiddenElement");
  videoModal.classList.add("hiddenResults");
  videoModal.classList.add("hiddenElement");
  videoPopup.classList.add("hiddenResults");
  videoPopup.classList.add("hiddenElement");
  resultsMainSection.classList.remove("hiddenResults");
  //videoPopup.classList.remove("maxHeight750");
}





function popOutVideo(){
  streamElement.classList.add("noMarginTop");
  videoPopup.classList.add("maxHeight750");
  videoPopupHeader.classList.remove("hiddenResults");
  dockVideoBtn.classList.remove("hiddenResults");
  videoModal.classList.add("eventsDisabled");
  videoModalContainer.classList.add("hiddenVideoModal");
  videoSubContent.classList.add("hiddenResults");
  resultsMainSection.classList.add("hiddenResults");

}

function dockVideo(){
  videoPopup.style.top = "20px";
  videoPopup.style.left = "calc((100% - 1280px)/2";
  videoPopup.style.width = "100%";
  streamElement.classList.remove("noMarginTop");
  videoPopup.classList.remove("maxHeight750");
  videoPopupHeader.classList.add("hiddenResults");
  dockVideoBtn.classList.add("hiddenResults");
  videoModal.classList.remove("eventsDisabled");
  videoModalContainer.classList.remove("hiddenVideoModal");
  videoSubContent.classList.remove("hiddenResults");
  //resultsMainSection.classList.add("hiddenResults");


}



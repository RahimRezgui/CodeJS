window.onload = function() {
  docInitDragElement();
  docInitResizeElement();
};

function docInitDragElement() {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var docPopups = document.getElementsByClassName("docPopup");
  var docElmnt = null;
  var currentZIndex = 1021; //TODO reset z index when a threshold is passed

  for (var i = 0; i < docPopups.length; i++) {
    var popup = docPopups[i];
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
    docElmnt = this.parentPopup;
    docElmnt.style.zIndex = "" + ++currentZIndex;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!docElmnt) {
      return;
    }

    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    docElmnt.style.top = docElmnt.offsetTop - pos2 + "px";
    docElmnt.style.left = docElmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    var headerItems = element.getElementsByClassName("docPopupHeader");

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }
}

function docInitResizeElement() {
  var docPopups = document.getElementsByClassName("docPopup");
  var element = null;
  var startX, startY, startWidth, startHeight;

  for (var i = 0; i < docPopups.length; i++) {
    var p = docPopups[i];

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

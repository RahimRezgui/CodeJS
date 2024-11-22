/*// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let sideBarNavigationToggle = document.querySelector(".sideBarNavigationToggle");
let navigation = document.querySelector(".navigation");
let mainContainerQodeJS = document.querySelector(".mainContainerQodeJS");

sideBarNavigationToggle.onclick = function () {
  navigation.classList.toggle("active");
  mainContainerQodeJS.classList.toggle("active");
};*/
let navigation = document.querySelector(".navigation");
let mainContainerQodeJS = document.querySelector(".mainContainerQodeJS");
let sideBarIcons = document.querySelectorAll(".iconSide");
let sideBarLinks = document.querySelectorAll(".sideMenuItem");


function toggleSideBarNavigationView() {
  let expandSideMenuPref = localStorage.getItem("expandSideMenuPref") || "false";
  if(expandSideMenuPref == "false"){
    return;
  };
  sideBarIcons.forEach(sideIcon => {
        sideIcon.classList.remove("iconHover");
  });
  sideBarLinks.forEach(sideLink => {
        sideLink.classList.add("sideMenuItemHover");
  });
  console.log("sideBar running")
  navigation.style.width = "220px";
  mainContainerQodeJS.style.width = "calc(100% - 220px)";
  mainContainerQodeJS.style.left = "220px";
}

function toggleSideBarNavigationHide() {
  sideBarIcons.forEach(sideIcon => {
        sideIcon.classList.add("iconHover");
  });
  sideBarLinks.forEach(sideLink => {
        sideLink.classList.remove("sideMenuItemHover");
  });
  navigation.style.width = "60px";
  mainContainerQodeJS.style.width = "calc(100% - 60px)";
  mainContainerQodeJS.style.left = "60px";
}
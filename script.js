var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".side-bar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
  sideBar.classList.toggle("small-sideBar");
  container.classList.toggle("large-container");
};

console.log("Javascript is working!!");

const menuIcon = document.getElementById("menu-icon");
const sideBar = document.getElementsByClassName("sidebar")[0];
const closingIcon = document.getElementsByClassName("closing-icon")[0];

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "block";
  menuIcon.style.display = "none";
  closingIcon.style.display = "block";
});

closingIcon.addEventListener("click", () => {
  closingIcon.style.display = "none";
  sideBar.style.display = "none";
  menuIcon.style.display = "block";
});

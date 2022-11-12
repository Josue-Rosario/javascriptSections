const bars = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".sidebar");
const closignBtn = document.querySelector(".fa-sharp");

bars.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});

closignBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});

const  navtoggle = document.querySelector(".nav-toggle");
const  navbar = document.querySelector(".navbar");

navtoggle.addEventListener("click", () => {
    navbar.classList.toggle("nav-menu_visible");
});
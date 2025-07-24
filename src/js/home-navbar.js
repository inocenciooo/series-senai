const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", ativarMenu);


function ativarMenu(){
    navList.classList.toggle("active")
     mobileMenu.classList.toggle("active")
}
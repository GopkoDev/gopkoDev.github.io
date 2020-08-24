const menuIcon = document.querySelector(".header__humburger_lines");
const navbar = document.querySelector(".header__humburger");

menuIcon.addEventListener("click",function(){
    navbar.classList.toggle("change");
});
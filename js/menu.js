const buttonMenu = document.querySelector(".button-menu");
const iconHamburger = buttonMenu.querySelector(".menu-hamburger");
const iconClose = buttonMenu.querySelector(".menu-close");

buttonMenu.onclick= function(){
    const menu = document.querySelector("nav");
    menu.classList.toggle("menu-active");
    iconHamburger.classList.toggle("button-inactive");
    iconClose.classList.toggle("button-active");
}

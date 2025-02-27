// Your code here.

function toggleMenu(){
    const nav = document.querySelector(".nav-links");
    const navToggle = document.querySelector(".menu-toggle"); //question why this works
    //shortcut:
    nav.classList.toggle("active");
    navToggle.classList.toggle("active");
}
const navbar = document.querySelector("nav > ul")
const openBtnNavbar = document.querySelector(".fa-bars");
const closeBtnNavbar = document.querySelector(".fa-times");

openBtnNavbar.addEventListener("click", () =>{
    openBtnNavbar.classList.remove("active")
    closeBtnNavbar.classList.add("active");
    navbar.classList.add("nav-active")
})

closeBtnNavbar.addEventListener("click", () => {
    closeBtnNavbar.classList.remove("active")
    openBtnNavbar.classList.add("active")
    navbar.classList.remove("nav-active")
})
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
})

menu.querySelectorAll("click", () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
}
)
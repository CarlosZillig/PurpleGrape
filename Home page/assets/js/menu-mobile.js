const menu = document.querySelector(".menu-mobile")
const menuOpenBtn = document.querySelector(".header-menu--btn");
const menuCloseBtn = document.querySelector(".menu-close")

menuOpenBtn.addEventListener("click", () => {
    toggleMenu(menu)
})

menuCloseBtn.addEventListener("click", () => {
    toggleMenu(menu)
})

function toggleMenu(element) {
    element.classList.toggle("active-menu")
}

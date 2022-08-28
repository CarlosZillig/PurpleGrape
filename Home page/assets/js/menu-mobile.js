const menu = document.querySelector(".menu-mobile")
const menuOpenBtn = document.querySelector(".header-menu--btn");
const menuCloseBtn = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".header-link")

menuOpenBtn.addEventListener("click", () => {
    toggleMenu(menu)
});

menuCloseBtn.addEventListener("click", () => {
    toggleMenu(menu)
});

menuLinks.forEach(item => {
    item.addEventListener("click", _ => {
        toggleMenu(menu)
    })
})


function toggleMenu(element) {
    element.classList.toggle("active-menu")
}

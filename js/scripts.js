const menuToggle = document.querySelector(".c-button__menu-bar");
const navMenu = document.querySelector(".l-header__nav-and-utilities");
const navLinks = document.querySelectorAll(".l-global-nav__link");


menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});


document.addEventListener("click", (event) => {
    if (
        !menuToggle.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {
        closeMenu();
    }
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


function closeMenu() {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
}
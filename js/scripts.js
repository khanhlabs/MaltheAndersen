const menuToggle = document.querySelector(".c-button__menu-bar");
const navMenu = document.querySelector(".l-header__nav-and-utilities");
const navLinks = document.querySelectorAll(".l-global-nav__link");
const button = document.querySelectorAll(".c-button");

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

button.forEach(button => {
    button.addEventListener("click", () => {
        closeMenu();
    });
});

function closeMenu() {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
}

// ---------------------------------Testimonials Slider---------------------------------

const testimonialSection = document.querySelector(".p-section-testimonials");

if (testimonialSection) {
  const slides = testimonialSection.querySelectorAll(
    ".c-section-testimonials__quote"
  );

  const users = testimonialSection.querySelectorAll(
    ".c-section-testimonials__user"
  );

  const nextButton = testimonialSection.querySelector(
    ".c-section-testimonials__next"
  );

  let currentIndex = 0;

  const showTestimonial = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", i !== index);
    });

    users.forEach((user, i) => {
      const isActive = i === index;
      user.classList.toggle("is-active", isActive);
      const button = user.querySelector("button");
      button.setAttribute("aria-pressed", isActive);
    });
    currentIndex = index;
  };

  users.forEach((user, index) => {
    const button = user.querySelector("button");

    button.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % slides.length;

    showTestimonial(nextIndex);
  });
  
  showTestimonial(currentIndex);
}

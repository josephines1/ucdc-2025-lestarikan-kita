// Navbar
const checkbox = document.querySelector(".nav-mobile input");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const navToggle = document.querySelector(".nav-mobile");

checkbox.addEventListener("click", function () {
  navLinksMobile.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY === 0) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});

document.addEventListener("click", function (e) {
  if (!navToggle.contains(e.target) && !navLinksMobile.contains(e.target)) {
    navLinksMobile.classList.remove("active");
    checkbox.checked = false;
  }
});

// Realita
const swiper = new Swiper(".realita-swiper", {
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

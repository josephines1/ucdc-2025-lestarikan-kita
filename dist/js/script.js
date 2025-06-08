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

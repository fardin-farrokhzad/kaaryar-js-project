// Sticky Navbar
const navbar = document.getElementById("navbar");
const stickyOffset = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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
const menuToggle = document.querySelector("#toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const animated = document.querySelectorAll(".animated");
// Observer to detect when an element enters the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Apply animation
    }
  });
});

//  Observe each element
animated.forEach((element) => observer.observe(element));

// navlinks color toggle
const links = document.querySelectorAll(".nav-links > li > a");
const linkPage = location.href;

links.forEach((link) => {
  if (linkPage.includes(link.dataset.href)) {
    link.classList.add("activate-color");
    console.log("we're in");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector("#hamburger-btn .hamburger");
  const navLinks = document.querySelector("#hamburger-btn .nav-links");

  if (!hamburgerBtn || !navLinks) return;

  // Toggle menu when hamburger is clicked
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("show");
    hamburgerBtn.classList.toggle("is-active");
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#hamburger-btn")) {
      navLinks.classList.remove("show");
      hamburgerBtn.classList.remove("is-active");
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      hamburgerBtn.classList.remove("is-active");
    });
  });
});

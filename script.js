window.onload = () => {
  const hamburgerBtn = document.querySelector("#hamburger-btn .hamburger");
  const navLinks = document.querySelector("#hamburger-btn .nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("show");
      hamburgerBtn.classList.toggle("is-active");
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("#hamburger-btn")) {
        navLinks.classList.remove("show");
        hamburgerBtn.classList.remove("is-active");
      }
    });

    const navLinksItems = navLinks.querySelectorAll("a");
    navLinksItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburgerBtn.classList.remove("is-active");
      });
    });
  }
};

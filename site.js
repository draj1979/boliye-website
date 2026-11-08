// Mobile menu and footer year. Nothing else on the site needs JavaScript.
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}
const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

// Fade the header background in once the page is scrolled.
const header = document.querySelector(".site-header");
if (header) {
  const update = () => header.classList.toggle("scrolled", window.scrollY > 10);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

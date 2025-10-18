// ===== Sticky Header =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ===== Mobile Menu =====
const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}


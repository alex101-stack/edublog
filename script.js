// =============================
// EduBlog Main Script
// =============================

// ✅ Sticky Header on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }
});

// =============================
// ✅ Mobile Menu Toggle
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
      nav.classList.toggle("active");
    });
  }
});

// =============================
// ✅ Sidebar Interactions (optional animation for tags)
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const tagBlocks = document.querySelectorAll(".tag-block");

  if (tagBlocks.length > 0) {
    tagBlocks.forEach((tag) => {
      tag.addEventListener("mouseenter", () => {
        tag.classList.add("active");
      });
      tag.addEventListener("mouseleave", () => {
        tag.classList.remove("active");
      });
    });
  }
});

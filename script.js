// Fade-in animation on scroll
document.addEventListener("scroll", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// 페이지 로드시 첫 화면 요소 바로 보이게
window.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => el.classList.add("visible"));
});

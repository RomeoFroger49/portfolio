document.addEventListener("DOMContentLoaded", function () {
  const parallaxContent = document.querySelector(".parallax-content");
  let scrollY = 0;

  function updateParallax() {
    const targetY = window.scrollY || window.pageYOffset;
    const diff = (targetY - scrollY) * 0.1; // Adjust the factor for more or less smoothness
    scrollY += diff;

    parallaxContent.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust the factor for more or less scroll effect

    requestAnimationFrame(updateParallax);
  }

  updateParallax();

  window.addEventListener("resize", function () {
    scrollY = window.scrollY || window.pageYOffset;
  });
});

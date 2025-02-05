function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});

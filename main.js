// lear
// Phelx

window.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".back-btn");
  const switchBtn = document.querySelector(".switch-btn");
  const linksBtn = document.querySelector(".links-btn");
  const navLinks = document.querySelector(".nav-links");

  // Showing Back Button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      backBtn.classList.add("active");
    } else {
      backBtn.classList.remove("active");
    }
  });

  // Switching Background Theme
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchBtn.className =
      switchBtn.className == "fa fa-moon-o switch-btn"
        ? "fa fa-sun-o switch-btn"
        : "fa fa-moon-o switch-btn";
  });

  // Show Navigation Links
  linksBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
    linksBtn.classList.toggle("change-links-btn");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle dropdown menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });

    // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show or hide the button when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show when scrolled 300px down
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Scroll to the top smoothly when button is clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll effect
    });
  });
});

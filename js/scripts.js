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
});

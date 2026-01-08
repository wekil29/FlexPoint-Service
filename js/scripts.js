// =========================
// 2) JS/SCRIPTS.JS (updated)
// Keep your existing logic and add the modal logic at the bottom.
// =========================

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
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // Scroll to the top smoothly when button is clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Add Smooth Scrolling for Services Section
  function scrollServices(direction) {
    const container = document.querySelector(".service-container");
    const scrollAmount = 350;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  // Add Event Listeners for Scroll Buttons
  const leftScrollBtn = document.querySelector(".scroll-button.left");
  const rightScrollBtn = document.querySelector(".scroll-button.right");

  if (leftScrollBtn && rightScrollBtn) {
    leftScrollBtn.addEventListener("click", () => scrollServices("left"));
    rightScrollBtn.addEventListener("click", () => scrollServices("right"));
  }

  // =========================
  // ✅ Modal logic for 2025 Tax Upload (Option 1)
  // Requires the modal HTML in index.html and CSS in styles.css
  // =========================
  const taxModal = document.getElementById('taxModal');

  const openTaxModalBtn = document.getElementById('openTaxModal');
  const openTaxModalBtn2 = document.getElementById('openTaxModal2');
  const openTaxModalFromBar = document.getElementById('openTaxModalFromBar');

  function openTaxModal() {
    if (!taxModal) return;
    taxModal.classList.add('is-open');
    taxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTaxModal() {
    if (!taxModal) return;
    taxModal.classList.remove('is-open');
    taxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  [openTaxModalBtn, openTaxModalBtn2, openTaxModalFromBar].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTaxModal();
    });
  });

  // Close on backdrop or X button
  if (taxModal) {
    taxModal.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.dataset && target.dataset.close === 'true') {
        closeTaxModal();
      }
    });
  }

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && taxModal && taxModal.classList.contains('is-open')) {
      closeTaxModal();
    }
  });
});

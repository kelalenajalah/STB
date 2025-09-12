//Hide navbar
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('hidden');
  });
});

// Ambil semua tombol accordion
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.parentElement.nextElementSibling;

      content.classList.toggle("hidden");

      btn.textContent = content.classList.contains("hidden") ? "+" : "−";
    });
  });
});

// Logo Sponsor
// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// JavaScript for Accordion Toggle
const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('.toggle');

        // Close all other accordions
        accordionToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.nextElementSibling.classList.add('hidden');
                otherToggle.querySelector('.toggle').textContent = '+';
                otherToggle.querySelector('.toggle').classList.remove('rotate-45');
            }
        });

        // Toggle the clicked accordion
        content.classList.toggle('hidden');
        if (content.classList.contains('hidden')) {
            icon.textContent = '+';
            icon.classList.remove('rotate-45');
        } else {
            icon.textContent = '+'; // Keep it as + and just rotate it
            icon.classList.add('rotate-45');
        }
    });
});

// UKM Lebih Lanjut
    const btn = document.getElementById('moreBtn');
    const menu = document.getElementById('moreMenu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Tutup menu jika klik di luar
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });


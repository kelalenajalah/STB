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


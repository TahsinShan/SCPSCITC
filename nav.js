document.addEventListener('DOMContentLoaded', () => {
  // Toggle hamburger menu
  function toggleMenu() {
    const navRight = document.querySelector('.nav-right');
    navRight.classList.toggle('open');
  }

  window.toggleMenu = toggleMenu; // 👈 Make it global for inline HTML onclick

  // Dropdown delay
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-mega');
    let showTimer, hideTimer;

    menu.style.display = 'none';

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
      showTimer = setTimeout(() => {
        menu.style.display = 'flex';
      }, 100);
    });

    dropdown.addEventListener('mouseleave', () => {
      clearTimeout(showTimer);
      hideTimer = setTimeout(() => {
        menu.style.display = 'none';
      }, 400);
    });

    menu.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
    });

    menu.addEventListener('mouseleave', () => {
      hideTimer = setTimeout(() => {
        menu.style.display = 'none';
      }, 400);
    });
  });
});

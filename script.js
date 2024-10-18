
  document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
      const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isOpen);
      mobileMenu.classList.toggle('hidden');
    });

    // User menu dropdown
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = userMenuButton.nextElementSibling;

    userMenuButton.addEventListener('click', function () {
      const isOpen = userMenuButton.getAttribute('aria-expanded') === 'true';
      userMenuButton.setAttribute('aria-expanded', !isOpen);
      userMenu.classList.toggle('hidden');
    });

    // Close the user menu if clicked outside
    document.addEventListener('click', function (event) {
      if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
        userMenuButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
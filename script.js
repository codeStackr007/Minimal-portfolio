// Toggle mobile menu with slide-in animation
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  // Toggle menu when hamburger icon is clicked
  toggleButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent event from bubbling to the document
    mobileMenu.classList.toggle('active');
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      mobileMenu.classList.remove('active'); // Slide out
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll'); // Add the class for scrolling effect
  } else {
    navbar.classList.remove('navbar-scroll'); // Remove class when at top
  }
});
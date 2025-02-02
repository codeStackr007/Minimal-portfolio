
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
  const menuLinks = document.querySelectorAll('.navbar .mobile-menu-items a'); // Select all links in the mobile menu

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

  // Close mobile menu when a link is clicked
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
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

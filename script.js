window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  
  // Check scroll position
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll'); // Add the class for scrolling effect
  } else {
    navbar.classList.remove('navbar-scroll'); // Remove class when at top
  }
});

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();
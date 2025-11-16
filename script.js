// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Hero slider toggle
const slides = document.querySelectorAll('.hero-slide');
const slideToggle = document.getElementById('slideToggle');
let currentSlide = 0;

slideToggle.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});
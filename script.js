// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Hero slider toggle
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

const slideToggle = document.getElementById('slideToggle');
if (slideToggle) {
  slideToggle.addEventListener('click', nextSlide);
  setInterval(nextSlide, 5000); // auto-switch every 5 seconds
}

// Top bar interaction
const contactToggle = document.getElementById('contactToggle');
const contactOptions = document.getElementById('contactOptions');

contactToggle.addEventListener('click', (e) => {
  e.preventDefault();
  contactOptions.style.display = contactOptions.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!contactToggle.contains(e.target) && !contactOptions.contains(e.target)) {
    contactOptions.style.display = 'none';
  }
});
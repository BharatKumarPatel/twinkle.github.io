// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
  });
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

// Auto slide every 5 seconds
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000);

// Form submission handling
const form = document.getElementById('admissionForm');
const formMessage = document.getElementById('formMessage');

// Check if form was already submitted today
function canSubmitForm() {
  const lastSubmit = localStorage.getItem('lastFormSubmit');
  if (!lastSubmit) return true;
  
  const lastSubmitDate = new Date(lastSubmit);
  const today = new Date();
  
  // Check if last submission was more than 24 hours ago
  return (today - lastSubmitDate) > (24 * 60 * 60 * 1000);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (!canSubmitForm()) {
    formMessage.textContent = 'You have already submitted a form today. Please try again tomorrow.';
    formMessage.className = 'form-message error';
    return;
  }
  
  const formData = new FormData(form);
  
  // Simulate form submission (replace with actual Formspree submission)
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Store submission time in localStorage
      localStorage.setItem('lastFormSubmit', new Date().toISOString());
      
      // Show success message
      formMessage.textContent = 'Thank you! Your form has been submitted successfully.';
      formMessage.className = 'form-message success';
      
      // Reset form
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    formMessage.textContent = 'There was an error submitting your form. Please try again.';
    formMessage.className = 'form-message error';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});
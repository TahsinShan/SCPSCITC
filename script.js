
// Testimonial Carousel
const carousel = document.querySelector('.testimonial-carousel');
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.testimonial-dots');

let currentIndex = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

// Show slide
function showSlide(index) {
  currentIndex = index;
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 6000);

// Initialize
showSlide(0);


// Force dropdown links to scroll correctly
document.querySelectorAll('.mega-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // Close menu if needed (optional)
    document.querySelector('.dropdown-mega').style.display = 'none';

    // Scroll smoothly
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault(); // Prevent default anchor behavior
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

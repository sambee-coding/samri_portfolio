const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Handle contact form safely
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = document.getElementById('contactMessage').value;
  window.location.href = `mailto:samrisamrawit30@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`;
});

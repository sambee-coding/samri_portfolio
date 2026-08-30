/* ─── Theme Toggle ─────────────────────────────────────────── */
(function () {
  const html = document.documentElement;
  const STORAGE_KEY = 'samri-theme';

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    const icon = document.querySelector('#theme-toggle .toggle-icon');
    if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem(STORAGE_KEY, theme);
  }

  applyTheme(getInitialTheme());

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const current = html.getAttribute('data-theme') || 'dark';
    const icon = btn.querySelector('.toggle-icon');
    if (icon) icon.textContent = current === 'dark' ? '🌙' : '☀️';

    btn.addEventListener('click', function () {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();

/* ─── Header Scroll Effect ──────────────────────────────────── */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ─── Hamburger Menu ────────────────────────────────────────── */
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle && header) {
  menuToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
    });
  });
}

/* ─── Scroll Spy (Active Links) ─────────────────────────────── */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
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

/* ─── Typewriter Effect ─────────────────────────────────────── */
const typewriterElement = document.querySelector('.typewriter-text');
if (typewriterElement) {
  const words = ['Samri', 'a Developer', 'a Creator', 'an Innovator'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing new word
    }

    setTimeout(type, typeSpeed);
  }

  // Start the effect
  setTimeout(type, 1000);
}

/* ─── Reveal Animations on Scroll ───────────────────────────── */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // observer.unobserve(entry.target); // Uncomment if you only want it to animate once
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

/* ─── Contact Form ──────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('contactMessage').value;
    window.location.href = `mailto:samrisamrawit30@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`;
  });
}

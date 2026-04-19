/* ─── Theme Toggle ─────────────────────────────────────────── */
(function () {
  const html = document.documentElement;
  const STORAGE_KEY = 'samri-theme';

  // Resolve initial theme: saved preference → OS preference → dark
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

  // Apply saved / OS theme immediately
  applyTheme(getInitialTheme());

  // Script is at the bottom of <body> so DOM is already ready —
  // no need to wait for DOMContentLoaded (it already fired).
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    // Sync icon to current theme
    const current = html.getAttribute('data-theme') || 'dark';
    const icon = btn.querySelector('.toggle-icon');
    if (icon) icon.textContent = current === 'dark' ? '🌙' : '☀️';

    btn.addEventListener('click', function () {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();

/* ─── Scroll-spy active nav link ───────────────────────────── */
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

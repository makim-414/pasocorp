// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.mobile-overlay');
if (toggle && overlay) {
  toggle.addEventListener('click', () => {
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal, .brand-row, .svc-item, .case-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Stagger brand rows
document.querySelectorAll('.brand-row').forEach((row, i) => {
  row.style.transitionDelay = `${i * 0.06}s`;
});

// Nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 100) {
    nav.style.borderBottomColor = '#222';
  } else {
    nav.style.borderBottomColor = '';
  }
  lastScroll = y;
}, { passive: true });

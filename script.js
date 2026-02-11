document.addEventListener('DOMContentLoaded', () => {
  // ===== Hamburger Menu =====
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== Hero Slider =====
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow.prev');
  const nextBtn = document.querySelector('.hero-arrow.next');
  let current = 0;
  let autoplayTimer;

  if (slides.length > 1) {
    const goTo = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, j) => {
        s.classList.toggle('active', j === current);
        s.style.animation = j === current ? 'fadeIn 0.7s cubic-bezier(0.16,1,0.3,1)' : 'none';
      });
      dots.forEach((d, j) => d.classList.toggle('active', j === current));
    };
    const resetAutoplay = () => {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => goTo(current + 1), 6000);
    };
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAutoplay(); }));
    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
    resetAutoplay();
  }

  // ===== Scroll Animations =====
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // ===== Smooth Nav Background =====
  const nav = document.querySelector('.nav');
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.style.borderBottomColor = window.scrollY > 20
            ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)';
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ===== Mouse Glow Effect on Cards =====
  document.querySelectorAll('.glass, .brand-card, .service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(124,106,255,0.04), transparent 60%), rgba(255,255,255,0.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  // ===== Forms =====
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = '✓ Submitted';
      btn.style.background = '#34d399';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
        form.reset();
      }, 2000);
    });
  });
});

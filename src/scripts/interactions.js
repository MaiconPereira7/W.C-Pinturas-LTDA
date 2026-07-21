import { gsap } from 'gsap';

export function initTiltAndMagnetic(reduceMotion) {
  if (reduceMotion) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.2, y: y * 0.2, scale: 1.02, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

export function initRipple(reduceMotion) {
  if (reduceMotion) return;

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

export function initFabEntrance(reduceMotion) {
  if (reduceMotion) {
    gsap.set('#fab', { scale: 1, opacity: 1 });
    return;
  }
  gsap.fromTo(
    '#fab',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, delay: 3, ease: 'back.out(1.7)' }
  );
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function handleClick(e) {
      const href = this.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 72 },
        duration: 1,
        ease: 'power3.inOut',
      });
    });
  });
}

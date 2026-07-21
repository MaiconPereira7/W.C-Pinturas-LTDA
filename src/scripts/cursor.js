import { gsap } from 'gsap';

export function initCursor(reduceMotion) {
  if (reduceMotion) return;

  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  if (!cursor || !cursorDot) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.body.classList.add('custom-cursor-active');

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.1 });
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document
    .querySelectorAll(
      'a, button, .service-card, .diff-card, .test-card, .faq-item summary, .ba-range'
    )
    .forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

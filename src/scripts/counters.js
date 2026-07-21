import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initCounters(reduceMotion) {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length) return;

  counters.forEach((el) => {
    const target = Number(el.dataset.countTo);
    const suffix = el.dataset.suffix || '';

    if (reduceMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hero-stats',
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`;
      },
    });
  });
}

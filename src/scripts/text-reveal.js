import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initTextReveals(reduceMotion) {
  const titles = document.querySelectorAll('.section-title');
  if (!titles.length) return;

  if (reduceMotion) {
    gsap.set(titles, { clipPath: 'inset(0 0% 0 0)' });
    return;
  }

  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: title, start: 'top 85%' },
      }
    );
  });
}

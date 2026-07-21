import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initParallax(reduceMotion) {
  if (reduceMotion) return;

  const images = document.querySelectorAll('.service-detail-media img');
  images.forEach((img) => {
    const frame = img.closest('.service-detail-media');
    if (!frame) return;

    gsap.set(img, { scale: 1.12 });
    gsap.fromTo(
      img,
      { y: -10 },
      {
        y: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: frame,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

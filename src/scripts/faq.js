import { gsap } from 'gsap';

export function initFaqAccordion(reduceMotion) {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const summary = item.querySelector('summary');
    const answer = item.querySelector('p');
    if (!summary || !answer) return;

    summary.addEventListener('click', (e) => {
      e.preventDefault();

      if (reduceMotion) {
        item.open = !item.open;
        return;
      }

      if (item.open) {
        gsap.to(answer, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            item.open = false;
            gsap.set(answer, { clearProps: 'height,opacity,marginTop' });
          },
        });
      } else {
        item.open = true;
        const targetHeight = answer.scrollHeight;
        gsap.fromTo(
          answer,
          { height: 0, opacity: 0, marginTop: 0 },
          {
            height: targetHeight,
            opacity: 1,
            marginTop: '1rem',
            duration: 0.35,
            ease: 'power2.out',
            onComplete: () => gsap.set(answer, { clearProps: 'height' }),
          }
        );
      }
    });
  });
}

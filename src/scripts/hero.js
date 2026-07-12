import { gsap } from 'gsap';

/**
 * Timeline de entrada do hero (badge → título → sublinhado dourado →
 * parágrafo → botões → card de estatísticas). Chamada após o loader sumir.
 */
export function animateHero(reduceMotion) {
  if (reduceMotion) {
    gsap.set(['.hero-badge', '.line-inner', '.hero-sub', '.hero-buttons', '.hero-stats'], {
      opacity: 1,
      y: 0,
      scale: 1,
    });
    gsap.set('.highlight-stroke path', { strokeDashoffset: 0 });
    gsap.set('.hero-watermark', { opacity: 1 });
    return;
  }

  const tl = gsap.timeline();

  tl.fromTo(
    '.hero-watermark',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 2, ease: 'power1.out' },
    0
  );

  tl.to(
    '.hero-badge',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    0
  )
    .to(
      '.line-inner',
      {
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    .to(
      '.highlight-stroke path',
      {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.3'
    )
    .to(
      '.hero-sub',
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )
    .to(
      '.hero-buttons',
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )
    .fromTo(
      '.hero-stats',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    );
}

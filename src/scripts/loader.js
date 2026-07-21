import { gsap } from 'gsap';

export function initLoader(reduceMotion, onComplete) {
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderLogo = document.querySelector('.loader-logo');

  if (reduceMotion) {
    loader.style.display = 'none';
    onComplete();
    return;
  }

  const tl = gsap.timeline();

  tl.to(loaderLogo, {
    opacity: 1,
    scale: 1.08,
    duration: 0.9,
    delay: 0.15,
    ease: 'back.out(1.8)',
  })
    .to(loaderLogo, { scale: 1, duration: 0.35, ease: 'power2.out' })
    .to(
      loaderFill,
      {
        width: '100%',
        duration: 1.4,
        ease: 'power2.inOut',
      },
      '<'
    )
    .to(loaderFill.closest('.loader-bar'), { opacity: 0, duration: 0.25 })
    .to(
      loaderLogo,
      {
        scale: 1.6,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '<-=0.1'
    )
    .to(
      loader,
      {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 0.85,
        ease: 'power3.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          onComplete();
        },
      },
      '<+=0.1'
    );
}

import { gsap } from 'gsap';

/**
 * Tela de carregamento inicial. Ao terminar (ou imediatamente, se o usuário
 * pediu "reduzir movimento"), chama `onComplete` para disparar a animação
 * de entrada do hero.
 */
export function initLoader(reduceMotion, onComplete) {
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderLogo = document.querySelector('.loader-logo');

  if (reduceMotion) {
    loader.style.display = 'none';
    onComplete();
    return;
  }

  gsap.to(loaderLogo, { opacity: 1, duration: 0.6, delay: 0.2 });
  gsap.to(loaderFill, {
    width: '100%',
    duration: 1.8,
    delay: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.to(loader, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          onComplete();
        },
      });
    },
  });
}

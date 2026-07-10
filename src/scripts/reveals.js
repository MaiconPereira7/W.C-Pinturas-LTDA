import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Anima elementos ao entrarem na tela, ou já mostra no estado final se
 * `reduceMotion` estiver ativo.
 *
 * gsap.from() infere o valor final ("auto") lendo o estilo computado no
 * momento da chamada; em itens de CSS Grid isso pode capturar um valor
 * (ex: opacity 0) que nunca é corrigido, deixando o elemento invisível para
 * sempre mesmo com a animação "concluída". gsap.fromTo() com valor final
 * explícito elimina essa ambiguidade.
 */
function revealFrom(reduceMotion, targets, vars) {
  if (reduceMotion) {
    gsap.set(targets, { opacity: 1, x: 0, y: 0, rotation: 0 });
    return;
  }
  const { scrollTrigger, duration, stagger, ease, delay, ...fromProps } = vars;
  const toProps = { scrollTrigger, duration, stagger, ease, delay };
  Object.keys(fromProps).forEach((key) => {
    toProps[key] = key === 'opacity' ? 1 : 0;
  });
  gsap.fromTo(targets, fromProps, toProps);
}

export function initScrollReveals(reduceMotion) {
  // Sobre
  revealFrom(reduceMotion, '.about-media', {
    scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.about-content > *', {
    scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Serviços
  revealFrom(reduceMotion, '.service-card', {
    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.services-header > div > *', {
    scrollTrigger: { trigger: '.services-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Trabalhos (portfólio)
  revealFrom(reduceMotion, '.work-item', {
    scrollTrigger: { trigger: '.works-grid', start: 'top 80%' },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.works-header > *', {
    scrollTrigger: { trigger: '.works-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Antes e depois
  revealFrom(reduceMotion, '.ba-slider', {
    scrollTrigger: { trigger: '.ba-slider', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.ba-header > *', {
    scrollTrigger: { trigger: '.ba-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Diferenciais
  revealFrom(reduceMotion, '.diff-card', {
    scrollTrigger: { trigger: '.diff-grid', start: 'top 80%' },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.diff-header > *', {
    scrollTrigger: { trigger: '.diff-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Como funciona (passo a passo)
  document.querySelectorAll('.process-step').forEach((step, i) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 80%',
      onEnter: () => step.classList.add('active'),
    });
    revealFrom(reduceMotion, step, {
      x: -40,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power3.out',
    });
  });

  const processLineFill = document.getElementById('processLineFill');
  if (reduceMotion) {
    processLineFill.style.height = '100%';
  } else {
    ScrollTrigger.create({
      trigger: '.process-track',
      start: 'top 70%',
      end: 'bottom 50%',
      scrub: 1,
      onUpdate: (self) => {
        processLineFill.style.height = `${self.progress * 100}%`;
      },
    });
  }

  revealFrom(reduceMotion, '.process-header > *', {
    scrollTrigger: { trigger: '.process-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // FAQ
  revealFrom(reduceMotion, '.faq-item', {
    scrollTrigger: { trigger: '.faq-list', start: 'top 85%' },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.faq-header > *', {
    scrollTrigger: { trigger: '.faq-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // Depoimentos
  revealFrom(reduceMotion, '.test-card', {
    scrollTrigger: { trigger: '.test-grid', start: 'top 80%' },
    y: 50,
    opacity: 0,
    rotation: 3,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.test-header > *', {
    scrollTrigger: { trigger: '.test-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

  // CTA final
  revealFrom(reduceMotion, '.cta-content > *', {
    scrollTrigger: { trigger: '.cta-content', start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
  });

  if (!reduceMotion) {
    gsap.to('.cta-bg-text', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: -100,
      ease: 'none',
    });
  }

  // Rodapé
  revealFrom(reduceMotion, '.footer-inner > div', {
    scrollTrigger: { trigger: '.footer', start: 'top 90%' },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
  });
}

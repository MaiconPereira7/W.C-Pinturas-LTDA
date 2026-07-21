import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function revealFrom(reduceMotion, targets, vars) {
  if (reduceMotion) {
    gsap.set(targets, { opacity: 1, x: 0, y: 0, rotation: 0 });
    return;
  }
  const { scrollTrigger, duration, stagger, ease, delay, ...fromProps } = vars;
  const toProps = { scrollTrigger, duration, stagger, ease, delay };
  const restValue = { opacity: 1, scale: 1 };
  Object.keys(fromProps).forEach((key) => {
    toProps[key] = key in restValue ? restValue[key] : 0;
  });
  gsap.fromTo(targets, fromProps, toProps);
}

export function initScrollReveals(reduceMotion) {
  revealFrom(reduceMotion, '.about-media', {
    scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.about-content > *:not(.about-points)', {
    scrollTrigger: { trigger: '.about-grid', start: 'top 80%' },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });
  revealFrom(reduceMotion, '.about-points li', {
    scrollTrigger: { trigger: '.about-points', start: 'top 85%' },
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power3.out',
  });

  revealFrom(reduceMotion, '.service-card', {
    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
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
  revealFrom(reduceMotion, '.services-guarantee', {
    scrollTrigger: { trigger: '.services-guarantee', start: 'top 90%' },
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  });

  document.querySelectorAll('.service-detail-item').forEach((item) => {
    revealFrom(reduceMotion, item.querySelectorAll('.service-detail-media'), {
      scrollTrigger: { trigger: item, start: 'top 80%' },
      scale: 1.05,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    });
    revealFrom(
      reduceMotion,
      item.querySelectorAll(
        '.service-detail-num, .service-detail-content h3, .service-detail-subtitle, .service-detail-content > p, .service-detail-content > .btn'
      ),
      {
        scrollTrigger: { trigger: item, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
    revealFrom(reduceMotion, item.querySelectorAll('.service-detail-list li'), {
      scrollTrigger: { trigger: item, start: 'top 75%' },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
    });
  });
  revealFrom(reduceMotion, '.services-detail-header > *', {
    scrollTrigger: { trigger: '.services-detail-header', start: 'top 85%' },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
  });

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

  revealFrom(reduceMotion, '.footer-inner > div', {
    scrollTrigger: { trigger: '.footer', start: 'top 90%' },
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
  });
}

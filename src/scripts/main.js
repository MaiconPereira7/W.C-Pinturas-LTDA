import '../styles/main.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { wireContactLinks } from './contact.js';
import { initCursor } from './cursor.js';
import { initLoader } from './loader.js';
import { animateHero } from './hero.js';
import { initNav } from './nav.js';
import { initScrollReveals } from './reveals.js';
import {
  initTiltAndMagnetic,
  initFabEntrance,
  initSmoothScroll,
  initRipple,
} from './interactions.js';
import { initBeforeAfter } from './before-after.js';
import { initCounters } from './counters.js';
import { initTextReveals } from './text-reveal.js';
import { initParallax } from './parallax.js';
import { initFaqAccordion } from './faq.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

wireContactLinks();
initCursor(reduceMotion);
initNav();
initScrollReveals(reduceMotion);
initTiltAndMagnetic(reduceMotion);
initFabEntrance(reduceMotion);
initSmoothScroll();
initBeforeAfter();
initCounters(reduceMotion);
initTextReveals(reduceMotion);
initParallax(reduceMotion);
initRipple(reduceMotion);
initFaqAccordion(reduceMotion);

initLoader(reduceMotion, () => animateHero(reduceMotion));

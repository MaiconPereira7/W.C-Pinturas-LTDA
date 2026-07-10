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
import { initTiltAndMagnetic, initFabEntrance, initSmoothScroll } from './interactions.js';
import { initBeforeAfter } from './before-after.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Usuários que pedem "reduzir movimento" no sistema não recebem cursor
// customizado, tilt 3D, botões magnéticos, parallax nem o loader animado.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

wireContactLinks();
initCursor(reduceMotion);
initNav();
initScrollReveals(reduceMotion);
initTiltAndMagnetic(reduceMotion);
initFabEntrance(reduceMotion);
initSmoothScroll();
initBeforeAfter();

initLoader(reduceMotion, () => animateHero(reduceMotion));

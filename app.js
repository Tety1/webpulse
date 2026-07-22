(() => {
  'use strict';

  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;

  const year = qs('#year');
  if (year) year.textContent = new Date().getFullYear();

  const header = qs('.site-header');
  const menuToggle = qs('.menu-toggle');
  const closeMenu = () => {
    header?.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  };
  menuToggle?.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  qsa('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Active navigation section.
  const navLinks = qsa('.desktop-nav a[href^="#"]');
  const navSections = navLinks.map(link => qs(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && navSections.length) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    navSections.forEach(section => navObserver.observe(section));
  }

  // Scene switching works without GSAP too.
  const activateScene = (step, imageSelector, activeClass = 'is-active', counterSelector) => {
    const index = Number(step.dataset.scene ?? step.dataset.devScene ?? 0);
    qsa(imageSelector).forEach((img, i) => img.classList.toggle(activeClass, i === index));
    if (counterSelector) {
      const counter = qs(counterSelector);
      if (counter) counter.textContent = String(index + 1).padStart(2, '0');
    }
  };

  const hardwareSteps = qsa('.story-step');
  const devSteps = qsa('.dev-step');
  const sceneObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const step = entry.target;
      if (step.classList.contains('story-step')) {
        hardwareSteps.forEach(s => s.classList.toggle('is-active', s === step));
        activateScene(step, '[data-scene-image]', 'is-active', '.visual-counter b');
      } else if (step.classList.contains('dev-step')) {
        devSteps.forEach(s => s.classList.toggle('is-active', s === step));
        activateScene(step, '[data-dev-image]', 'is-active', '.dev-counter b');
      }
    });
  }, { rootMargin: '-38% 0px -42% 0px', threshold: 0 }) : null;
  hardwareSteps.forEach(step => sceneObserver?.observe(step));
  devSteps.forEach(step => sceneObserver?.observe(step));

  if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.scroll-progress i', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.12 }
  });

  // Hero entrance and cinematic parallax.
  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  heroTl.from('.site-header', { y: -20, opacity: 0, duration: .7 })
    .from('.hero-kicker', { y: 18, opacity: 0, duration: .5 }, '-=.2')
    .from('.hero-line', { yPercent: 95, clipPath: 'inset(100% 0 0 0)', opacity: 0, duration: 1.05, stagger: .1 }, '-=.05')
    .from('.hero-description', { y: 25, opacity: 0, duration: .7 }, '-=.5')
    .from('.hero-actions > *', { y: 18, opacity: 0, duration: .55, stagger: .08 }, '-=.45')
    .from('.hero-shot', { scale: .92, y: 35, opacity: 0, duration: 1.05, stagger: .13 }, '-=.65')
    .from('.hero-status', { y: 14, opacity: 0, duration: .55 }, '-=.35');

  gsap.to('.hero-aurora-blue', { xPercent: 24, yPercent: 13, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.hero-aurora-yellow', { xPercent: -18, yPercent: -13, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.hero-shot-main', { yPercent: -7, rotate: .5, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.hero-shot-code', { yPercent: 9, rotate: -.7, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.hero-shot-server', { yPercent: -11, xPercent: -4, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.hero-scan', { y: 160, opacity: .15, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .7 } });

  qsa('.reveal').forEach(el => {
    gsap.from(el, {
      y: 35,
      opacity: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  // Hardware and development sticky visuals: subtle zoom while the story advances.
  gsap.to('.service-visual .scene-image img', {
    scale: 1.06,
    ease: 'none',
    scrollTrigger: { trigger: '.service-story', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
  });
  gsap.to('.dev-media .dev-scene img', {
    scale: 1.065,
    ease: 'none',
    scrollTrigger: { trigger: '.dev-story', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
  });

  // Crossfade step copy with a tiny directional movement.
  qsa('.story-step, .dev-step').forEach(step => {
    gsap.from(step.children, {
      y: 22,
      opacity: 0,
      stagger: .055,
      duration: .65,
      scrollTrigger: { trigger: step, start: 'top 70%', toggleActions: 'play none none reverse' }
    });
  });

  // Infrastructure imagery is intentionally slower than content.
  qsa('.infra-card').forEach((card, i) => {
    const img = qs('img', card);
    if (!img) return;
    gsap.fromTo(img, { scale: 1.08, yPercent: i % 2 ? 3 : -3 }, {
      scale: 1.02,
      yPercent: i % 2 ? -4 : 4,
      ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
  });

  // Bridge section works as a clean chapter break between IT and development.
  gsap.fromTo('.bridge-photo img', { scale: 1.08 }, {
    scale: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.bridge-section', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
  gsap.from('.bridge-copy > *', {
    y: 50,
    opacity: 0,
    stagger: .12,
    duration: .9,
    scrollTrigger: { trigger: '.bridge-copy', start: 'top 78%', once: true }
  });

  // Software diagnostic panel.
  const setupItems = qsa('[data-setup]');
  if (setupItems.length) {
    gsap.from(setupItems, {
      x: 28,
      opacity: 0,
      stagger: .09,
      duration: .6,
      scrollTrigger: { trigger: '.software-console', start: 'top 78%', once: true }
    });
  }

  // Connected operation: draw connectors and move the signal through the flow.
  gsap.from('.operation-flow > i', {
    scaleX: 0,
    transformOrigin: 'left center',
    stagger: .14,
    duration: .65,
    scrollTrigger: { trigger: '.operation-flow', start: 'top 75%', once: true }
  });
  gsap.from('.operation-flow article', {
    y: 25,
    opacity: 0,
    stagger: .12,
    duration: .6,
    scrollTrigger: { trigger: '.operation-flow', start: 'top 78%', once: true }
  });
  const flow = qs('.operation-flow');
  const pulse = qs('.flow-pulse');
  if (flow && pulse && window.matchMedia('(min-width:621px)').matches) {
    gsap.to(pulse, {
      x: () => Math.max(0, flow.clientWidth - 8),
      ease: 'none',
      scrollTrigger: { trigger: flow, start: 'top 72%', end: 'bottom 45%', scrub: 1.1, invalidateOnRefresh: true }
    });
  }

  // Magnetic CTA movement on fine pointers only.
  if (finePointer) {
    qsa('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .07, y: (e.clientY - r.top - r.height / 2) * .07, duration: .2 });
      });
      el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: .35, ease: 'power3.out' }));
    });
  }

  // Original screwdriver cursor only inside the hardware/service chapter.
  if (finePointer && window.matchMedia('(min-width:901px)').matches) {
    const dot = qs('.cursor-dot');
    const tool = qs('.tool-cursor');
    const hardware = qs('.hardware-zone');
    let lastX = 0;
    window.addEventListener('mousemove', e => {
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      if (dot) gsap.to(dot, { x: e.clientX, y: e.clientY, opacity: 1, duration: .08 });
      const rect = hardware?.getBoundingClientRect();
      const inside = !!rect && e.clientY >= rect.top && e.clientY <= rect.bottom;
      hardware?.classList.toggle('cursor-tool', inside);
      if (tool) gsap.to(tool, { x: e.clientX, y: e.clientY, rotation: Math.max(-14, Math.min(14, dx * 1.25)), opacity: inside ? 1 : 0, scale: inside ? 1 : .7, duration: .15 });
      if (dot) gsap.to(dot, { opacity: inside ? 0 : 1, duration: .12 });
    }, { passive: true });
  }

  window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true });
})();

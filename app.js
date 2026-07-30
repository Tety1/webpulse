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

  // Scene switching remains compatible without GSAP. On capable browsers,
  // a single wipe layer changes the photo without touching the copy layout.
  const activateScene = (step, imageSelector, activeClass = 'is-active', counterSelector, wipeSelector) => {
    const index = Number(step.dataset.scene ?? step.dataset.devScene ?? 0);
    const images = qsa(imageSelector);
    const previous = images.findIndex(img => img.classList.contains(activeClass));
    const apply = () => {
      images.forEach((img, i) => img.classList.toggle(activeClass, i === index));
      if (counterSelector) {
        const counter = qs(counterSelector);
        if (counter) counter.textContent = String(index + 1).padStart(2, '0');
      }
    };
    if (previous === index) return;
    const container = images[0]?.parentElement;
    const wipe = container && wipeSelector ? qs(wipeSelector, container) : null;
    const scan = container ? qs('.scene-scan', container) : null;
    if (reducedMotion || !window.gsap || !wipe) {
      apply();
      return;
    }
    gsap.killTweensOf([wipe, scan]);
    gsap.set(wipe, { scaleX: 0, transformOrigin: 'left center' });
    const tl = gsap.timeline();
    tl.to(wipe, { scaleX: 1, duration: .24, ease: 'power3.in' })
      .add(apply)
      .set(wipe, { transformOrigin: 'right center' })
      .to(wipe, { scaleX: 0, duration: .42, ease: 'power3.out' });
    if (scan) {
      gsap.fromTo(scan, { yPercent: 0, opacity: 0 }, { yPercent: 720, opacity: .7, duration: .72, ease: 'power1.inOut' });
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
        activateScene(step, '[data-scene-image]', 'is-active', '.visual-counter b', '.scene-wipe-hardware');
      } else if (step.classList.contains('dev-step')) {
        devSteps.forEach(s => s.classList.toggle('is-active', s === step));
        activateScene(step, '[data-dev-image]', 'is-active', '.dev-counter b', '.scene-wipe-development');
      }
    });
  }, { rootMargin: '-38% 0px -42% 0px', threshold: 0 }) : null;
  hardwareSteps.forEach(step => sceneObserver?.observe(step));
  devSteps.forEach(step => sceneObserver?.observe(step));

  if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('has-cinematic-motion');


  // =======================================================
  // CINEMATIC LAYERS — isolated from the original V5 layout.
  // No GSAP pinning: CSS sticky chapters keep document flow stable.
  // =======================================================
  const motionMM = gsap.matchMedia();
  motionMM.add('(min-width: 901px)', () => {
    qsa('.cinematic-divider').forEach(section => {
      const media = qs('.cinematic-divider-media img', section);
      const copy = qs('.cinematic-divider-copy', section);
      const line = qs('.cinematic-divider-line', section);
      const panels = qsa('.cinematic-divider-panels i', section);
      const grid = qs('.cinematic-divider-grid', section);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: .8,
          invalidateOnRefresh: true
        }
      });
      tl.fromTo(media, { scale: 1.13, yPercent: 5 }, { scale: 1.01, yPercent: -3, ease: 'none' }, 0)
        .fromTo(panels[0], { xPercent: 0 }, { xPercent: -102, ease: 'power2.inOut' }, .06)
        .fromTo(panels[1], { xPercent: 0 }, { xPercent: 102, ease: 'power2.inOut' }, .06)
        .fromTo(copy, { yPercent: 16, opacity: .05 }, { yPercent: 0, opacity: 1, ease: 'power2.out' }, .08)
        .fromTo(line, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, .1)
        .fromTo(grid, { xPercent: -3 }, { xPercent: 3, ease: 'none' }, 0)
        .to(copy, { yPercent: -10, opacity: .35, ease: 'none' }, .72)
        .to(media, { scale: .98, filter: 'saturate(.7) contrast(1.1) brightness(.48)', ease: 'none' }, .72);
    });
  });
  motionMM.add('(max-width: 900px)', () => {
    qsa('.cinematic-divider-copy').forEach(copy => {
      gsap.from(copy, { y: 38, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: copy, start: 'top 86%', once: true } });
    });
    qsa('.cinematic-divider-line').forEach(line => gsap.set(line, { scaleX: 1 }));
  });

  // Short section-opening curtains. They animate only once and never pin.
  qsa('.section-curtain').forEach(curtain => {
    const halves = qsa('i', curtain);
    gsap.timeline({ scrollTrigger: { trigger: curtain.parentElement, start: 'top 82%', once: true } })
      .to(halves[0], { xPercent: -102, duration: .8, ease: 'power4.inOut' }, 0)
      .to(halves[1], { xPercent: 102, duration: .8, ease: 'power4.inOut' }, 0)
      .to(curtain, { autoAlpha: 0, duration: .12 }, '-=.05');
  });

  // Draw the fine chapter rules beneath original headings.
  qsa('.chapter-head, .infrastructure-head, .dev-heading, .section-heading').forEach(head => {
    gsap.to(head, {
      '--pd-rule': 1,
      scrollTrigger: { trigger: head, start: 'top 82%', once: true }
    });
    const pseudoProxy = { value: 0 };
    gsap.to(pseudoProxy, {
      value: 1,
      duration: 1.05,
      ease: 'power3.out',
      onUpdate: () => head.style.setProperty('--chapter-line-scale', pseudoProxy.value),
      scrollTrigger: { trigger: head, start: 'top 82%', once: true }
    });
  });

  // Image cards reveal through a mask, while keeping their existing positions.
  qsa('.infra-card').forEach((card, i) => {
    gsap.fromTo(card, { clipPath: i % 2 ? 'inset(0 0 100% 0 round 24px)' : 'inset(0 100% 0 0 round 24px)' }, {
      clipPath: 'inset(0 0% 0% 0 round 24px)',
      duration: 1.05,
      ease: 'power4.out',
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });

  // Gentle 3D lift only on cards; copy and layout stay untouched.
  if (finePointer) {
    qsa('.service-grid article, .solution-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - .5) * -4;
        const ry = ((e.clientX - r.left) / r.width - .5) * 5;
        gsap.to(card, { rotateX: rx, rotateY: ry, y: -4, duration: .25, transformPerspective: 900, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: .45, ease: 'power3.out' }));
    });
  }

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



  const refreshScrollLayout = () => window.ScrollTrigger && ScrollTrigger.refresh();
  if (document.fonts?.ready) document.fonts.ready.then(() => setTimeout(refreshScrollLayout, 60));
  window.addEventListener('load', () => setTimeout(refreshScrollLayout, 120), { once: true });
  qsa('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', refreshScrollLayout, { once: true });
  });

  window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true });
})();

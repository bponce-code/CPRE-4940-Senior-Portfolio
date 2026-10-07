// Shared behavior for every page: mobile menu and header divider on scroll.
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#site-nav');

function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.textContent = open ? 'Close' : 'Menu';
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Cover: "electrons" flowing along the power lines, from generation toward the loads.
const SVG_NS = 'http://www.w3.org/2000/svg';
// Respects reduced motion; add ?motion to the URL to preview the animation anyway.
const forceMotion = new URLSearchParams(location.search).has('motion');
if (forceMotion || !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.flow').forEach((group, g) => {
    const r = Number(group.dataset.r), speed = Number(group.dataset.speed), spacing = Number(group.dataset.spacing);
    group.querySelectorAll('path').forEach((path, p) => {
      path.id = `flow-${g}-${p}`;
      const len = path.getTotalLength();
      const dur = len / speed;
      const count = Math.max(1, Math.round(len / spacing));
      for (let i = 0; i < count; i++) {
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('r', r);
        dot.setAttribute('class', 'electron');
        const move = document.createElementNS(SVG_NS, 'animateMotion');
        move.setAttribute('dur', `${dur.toFixed(2)}s`);
        move.setAttribute('begin', `${(-(i / count) * dur - p * 0.37).toFixed(2)}s`);
        move.setAttribute('repeatCount', 'indefinite');
        const mpath = document.createElementNS(SVG_NS, 'mpath');
        mpath.setAttribute('href', `#${path.id}`);
        move.append(mpath);
        dot.append(move);
        group.append(dot);
      }
    });
  });
}

/* =============================================================
   City tab switching
============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const tabs   = document.querySelectorAll('.city-tab');
  const panels = document.querySelectorAll('.city-artists');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const city = tab.dataset.city;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(p => p.classList.remove('active'));
      const target = document.getElementById(`artists-${city}`);
      if (target) target.classList.add('active');
      document.querySelector('.artists-section').scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  });

  // Kick off logo animation
  initLogoAnimation();
});


/* =============================================================
   Logo animation
   Strategy:
   1. Fetch лого.svg and inject it inline (so we can access
      individual <path> elements).
   2. Group paths that belong to the same "pill" using a
      proximity heuristic on the first M-coordinate of each
      path's d-attribute.  Paths in the same pill are all
      concentric ellipses within ~80 SVG units of each other;
      different pills are 200+ units apart.
   3. Wrap each group in a <g> tag that stores the outward
      direction vector (from the S's center toward that pill).
   4. Animate each <g> sequentially top-to-bottom with a
      sine-wave translate: 0 → outward → 0.
============================================================= */
async function initLogoAnimation() {
  const imgEl = document.querySelector('.logo-svg');
  if (!imgEl) return;

  let svgText;
  try {
    const res = await fetch('лого.svg');
    svgText = await res.text();
  } catch (e) {
    console.warn('Could not fetch лого.svg', e);
    return;
  }

  // ── Parse SVG into the live HTML document ──────────────────
  const temp = document.createElement('div');
  temp.innerHTML = svgText;
  const svgEl = temp.querySelector('svg');
  if (!svgEl) return;

  // Make it responsive (CSS will control size)
  svgEl.removeAttribute('width');
  svgEl.removeAttribute('height');
  svgEl.classList.add('logo-svg');
  // Pills move outside the viewBox — allow it to show
  svgEl.style.overflow = 'visible';

  // ── Helper: first M x y from a path's d attribute ──────────
  function firstCoord(path) {
    const m = (path.getAttribute('d') || '').match(/M\s*([\d.-]+)\s+([\d.-]+)/);
    return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
  }

  // ── Group paths by proximity (threshold 80 SVG units) ──────
  const allPaths  = [...svgEl.querySelectorAll('path')];
  const THRESHOLD = 80;
  const groups    = [];
  let   cur       = [];
  let   prevC     = null;

  allPaths.forEach(path => {
    const c = firstCoord(path);
    if (!c) {
      if (cur.length) { groups.push(cur); cur = []; }
      prevC = null;
      return;
    }
    if (prevC && Math.hypot(c[0] - prevC[0], c[1] - prevC[1]) > THRESHOLD) {
      groups.push(cur);
      cur = [];
    }
    cur.push(path);
    prevC = c;
  });
  if (cur.length) groups.push(cur);

  // ── Compute centroid for each group ────────────────────────
  const pills = groups
    .filter(g => g.length >= 3)          // skip lone stray paths
    .map(group => {
      const coords = group.map(firstCoord).filter(Boolean);
      const cx = coords.reduce((s, c) => s + c[0], 0) / coords.length;
      const cy = coords.reduce((s, c) => s + c[1], 0) / coords.length;
      return { group, cx, cy };
    });

  // Overall centroid of the whole S mark
  const sCx = pills.reduce((s, p) => s + p.cx, 0) / pills.length;
  const sCy = pills.reduce((s, p) => s + p.cy, 0) / pills.length;

  // ── Sort top → bottom ──────────────────────────────────────
  pills.sort((a, b) => a.cy - b.cy);

  // ── Wrap each group in <g data-nx data-ny> ─────────────────
  pills.forEach(({ group, cx, cy }) => {
    const g  = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const dx = cx - sCx;
    const dy = cy - sCy;
    const d  = Math.hypot(dx, dy) || 1;
    g.dataset.nx = (dx / d).toFixed(4);
    g.dataset.ny = (dy / d).toFixed(4);
    group[0].parentNode.insertBefore(g, group[0]);
    group.forEach(p => g.appendChild(p));
  });

  // ── Replace <img> with the inline SVG ──────────────────────
  imgEl.parentNode.replaceChild(svgEl, imgEl);

  // ── Play the wave ──────────────────────────────────────────
  const gEls        = [...svgEl.querySelectorAll('g[data-nx]')];
  const MOVE        = 50;   // SVG user units outward per pill
  const PILL_DUR    = 520;  // ms — one pill's extend-and-retract
  const WAVE_SPAN   = 1800; // ms — stagger window (first → last pill)

  gEls.forEach((g, i) => {
    const nx    = parseFloat(g.dataset.nx);
    const ny    = parseFloat(g.dataset.ny);
    const delay = (i / Math.max(gEls.length - 1, 1)) * WAVE_SPAN;

    setTimeout(() => {
      const t0 = performance.now();

      function frame(now) {
        const t    = Math.min((now - t0) / PILL_DUR, 1);
        const wave = Math.sin(t * Math.PI);          // 0 → 1 → 0
        g.setAttribute('transform',
          `translate(${(nx * MOVE * wave).toFixed(2)},${(ny * MOVE * wave).toFixed(2)})`
        );
        if (t < 1) requestAnimationFrame(frame);
        else        g.removeAttribute('transform');
      }

      requestAnimationFrame(frame);
    }, delay);
  });
}

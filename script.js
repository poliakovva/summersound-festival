/* =============================================================
   City tab switching
============================================================= */
let activeCity = 'moscow';

document.addEventListener('DOMContentLoaded', () => {
  const tabs   = document.querySelectorAll('.city-tab');
  const panels = document.querySelectorAll('.city-artists');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const city = tab.dataset.city;
      activeCity = city;

      // Switch active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch artist panel
      panels.forEach(p => p.classList.remove('active'));
      const target = document.getElementById(`artists-${city}`);
      if (target) target.classList.add('active');

      // Switch page theme
      document.body.classList.remove('theme-moscow', 'theme-spb', 'theme-nn');
      if (city !== 'moscow') document.body.classList.add(`theme-${city}`);

      // Switch S logo and replay wave
      switchLogo(city);
      playLogoWave();
    });
  });

  // Load all three city logos and set up animations
  initAllLogos();
});


/* =============================================================
   Logo animation
   All three SVG logos share the same pill-grouping strategy:
   paths are clustered by proximity of their first M coordinate,
   each cluster is wrapped in a <g data-nx data-ny> pointing
   outward from the S centroid, then animated with a sine wave.
============================================================= */

// Per-city wave players — populated after each SVG loads
const cityWave = {};

// Public helpers (stubs until logos are ready)
let switchLogo   = () => {};
let playLogoWave = () => {};

const CITY_SVGS = {
  moscow: 'лого.svg',
  spb:    'singers_blocks/лого спб.svg',
  nn:     'singers_blocks/лого нн.svg',
};

async function initAllLogos() {
  const logoWrap = document.querySelector('.logo-wrap');
  if (!logoWrap) return;

  // Replace the placeholder <img> with the Moscow SVG first so the
  // page doesn't jump; load SPb and NN in parallel after.
  await loadCityLogo('moscow', logoWrap, /*replaceImg=*/true);
  loadCityLogo('spb', logoWrap, false);
  loadCityLogo('nn',  logoWrap, false);

  // Wire up helpers once Moscow is ready
  switchLogo = function (city) {
    logoWrap.querySelectorAll('[data-logo-city]').forEach(el => {
      el.style.display = el.dataset.logoCity === city ? 'block' : 'none';
    });
  };

  playLogoWave = function () {
    if (cityWave[activeCity]) cityWave[activeCity]();
  };

  // Play initial wave
  playLogoWave();
}

async function loadCityLogo(city, logoWrap, replaceImg) {
  let svgText;
  try {
    const res = await fetch(CITY_SVGS[city]);
    svgText = await res.text();
  } catch (e) {
    console.warn(`Could not fetch logo for ${city}`, e);
    return;
  }

  // ── Parse SVG ──────────────────────────────────────────────
  const temp = document.createElement('div');
  temp.innerHTML = svgText;
  const svgEl = temp.querySelector('svg');
  if (!svgEl) return;

  svgEl.removeAttribute('width');
  svgEl.removeAttribute('height');
  svgEl.classList.add('logo-svg');
  svgEl.style.overflow = 'visible';
  svgEl.dataset.logoCity = city;

  // Only the active city is visible on load
  if (city !== activeCity) svgEl.style.display = 'none';

  // ── Helper: first M x y ────────────────────────────────────
  function firstCoord(path) {
    const m = (path.getAttribute('d') || '').match(/M\s*([\d.-]+)\s+([\d.-]+)/);
    return m ? [parseFloat(m[1]), parseFloat(m[2])] : null;
  }

  // ── Group paths by proximity (threshold 80 SVG units) ──────
  // (NN viewBox is 1800×2401 vs 762×1016 for others — scale threshold)
  const vbW      = parseFloat((svgEl.getAttribute('viewBox') || '0 0 762 1016').split(' ')[2]);
  const THRESHOLD = 80 * (vbW / 762);

  const allPaths = [...svgEl.querySelectorAll('path')];
  const groups   = [];
  let   cur      = [];
  let   prevC    = null;

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

  // ── Compute centroids ──────────────────────────────────────
  const pills = groups
    .filter(g => g.length >= 3)
    .map(group => {
      const coords = group.map(firstCoord).filter(Boolean);
      const cx = coords.reduce((s, c) => s + c[0], 0) / coords.length;
      const cy = coords.reduce((s, c) => s + c[1], 0) / coords.length;
      return { group, cx, cy };
    });

  const sCx = pills.reduce((s, p) => s + p.cx, 0) / pills.length;
  const sCy = pills.reduce((s, p) => s + p.cy, 0) / pills.length;

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

  // ── Insert into DOM ────────────────────────────────────────
  if (replaceImg) {
    const imgEl = logoWrap.querySelector('.logo-svg');
    logoWrap.replaceChild(svgEl, imgEl);
  } else {
    logoWrap.appendChild(svgEl);
  }

  // ── Build wave player for this city ───────────────────────
  const gEls      = [...svgEl.querySelectorAll('g[data-nx]')];
  const MOVE      = 50 * (vbW / 762); // scale movement to viewBox
  const PILL_DUR  = 520;
  const WAVE_SPAN = 1800;
  let   pending   = [];

  cityWave[city] = function () {
    if (svgEl.style.display === 'none') return;
    pending.forEach(id => clearTimeout(id));
    pending = [];
    gEls.forEach(g => g.removeAttribute('transform'));

    gEls.forEach((g, i) => {
      const nx    = parseFloat(g.dataset.nx);
      const ny    = parseFloat(g.dataset.ny);
      const delay = (i / Math.max(gEls.length - 1, 1)) * WAVE_SPAN;

      const id = setTimeout(() => {
        const t0 = performance.now();
        function frame(now) {
          const t    = Math.min((now - t0) / PILL_DUR, 1);
          const wave = Math.sin(t * Math.PI);
          g.setAttribute('transform',
            `translate(${(nx * MOVE * wave).toFixed(2)},${(ny * MOVE * wave).toFixed(2)})`
          );
          if (t < 1) requestAnimationFrame(frame);
          else        g.removeAttribute('transform');
        }
        requestAnimationFrame(frame);
      }, delay);

      pending.push(id);
    });
  };
}

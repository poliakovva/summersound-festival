/* =============================================================
   Artist data
============================================================= */
const ARTISTS_DATA = {
  haski: {
    date: '20.07', name: 'ХАСКИ', venue: '19:30, Дизайн завод', logo: encodeURI('лого.svg'),
    desc: [
      'Большое летнее шоу от Хаски на Summer Sound х билайн!',
      'Главный продюсер русского рэпа отправляется в тур по городам Summer Sound х билайн с незабываемым шоу под открытым небом. В программе — все главные хиты, а также треки с альбома «Партизан».',
      'Мы должны вас увидеть. Не пропустите:\n20 июля — Москва, Дизайн завод\n2 августа — Нижний Новгород, Ракушка\n8 и 9 августа — Санкт-Петербург, 10/12 Мануфактура',
      '18+'
    ],
    img: encodeURI('singers/хаски сайт.png')
  },
  lsp: {
    date: '22.07', name: 'ЛСП', venue: '19:30, Дизайн завод', logo: 'purple_logo.svg',
    desc: [
      'Большое летнее шоу от ЛСП на Summer Sound х билайн!',
      'Главный романтик тёмного поп-рока отправляется в тур по городам Summer Sound х билайн с атмосферными концертами под открытым небом.',
      'В программе — главные хиты, новые треки и всё, за что вы любите ЛСП. Мы должны вас увидеть. Не пропустите:\n22 июля — Москва, Дизайн завод\n4 августа — Нижний Новгород, Ракушка\n7 августа — Санкт-Петербург, 10/12 Мануфактура'
    ],
    img: encodeURI('singers/лсп сайт.png')
  },
  maybe: {
    date: '25.07', name: 'МЭЙБИ БЭЙБИ', venue: '19:30, Дизайн завод', logo: 'orange_logo.svg',
    desc: [
      'Главная поп-панк принцесса новой школы отправляется в тур по городам Summer Sound х билайн с ярким шоу под открытым небом.',
      'В программе — все любимые хиты, свежие релизы и максимум энергии, за которую вы её знаете.',
      'Мы должны вас увидеть. Не пропустите:\n25 июля — Москва, Дизайн завод\n5 августа — Нижний Новгород, Ракушка\n8 августа — Санкт-Петербург, 10/12 Мануфактура'
    ],
    img: encodeURI('singers/мейби бейби сайт.png')
  },
  feduk: {
    date: '27.07', name: 'FEDUK', venue: '19:30, Дизайн завод', logo: encodeURI('лого.svg'),
    desc: [
      'Главный меланхоличный хитмейкер русской сцены отправляется в тур по городам Summer Sound х билайн с тёплыми летними концертами под открытым небом.',
      'В программе — все главные хиты, новые треки и та самая атмосфера, за которую вы любите FEDUK.',
      'Мы должны вас увидеть. Не пропустите:\n27 июля — Москва, Дизайн завод\n7 августа — Нижний Новгород, Ракушка\n9 августа — Санкт-Петербург, 10/12 Мануфактура'
    ],
    img: encodeURI('singers/фкдук сайт.png')
  },
  iowa: {
    date: '30.07', name: 'IOWA', venue: '19:30, Дизайн завод', logo: 'purple_logo.svg',
    desc: [
      'IOWA на Summer Sound х билайн!',
      'IOWA — это тот редкий пример музыкальной группы, которая, добившись популярности, не потеряла свою уникальную атмосферу. Каждый концерт — энергетический обмен, который продолжает задавать высокую планку в современной музыкальной индустрии.',
      'Сезон танцев открыт:\nМосква, Дизайн завод — 30 июля'
    ],
    img: encodeURI('singers/айова сайт.png')
  },
  saluki: {
    date: '29.07', name: 'SALUKI', venue: '19:30, Дизайн завод', logo: 'orange_logo.svg',
    desc: [
      'SALUKI — один из тех, кто задаёт звук современной сцены, смешивая хит-хоп, электронику и поп в свой неповторимый и узнаваемый стиль.',
      'Его летние концерты на Summer Sound х билайн уже стали традицией — и каждый раз это новый уровень. Вас ждёт полное погружение: треки с BOISHIE KURTKI, ваб WILD EAST, главные хиты и новая эра «EUPHORIA».',
      'Запоминайте даты:\n29 июля — Санкт-Петербург, Мануфактура\n30 июля — Москва, Дизайн завод\n7 августа — Нижний Новгород, Ракушка'
    ],
    img: encodeURI('singers/салуки сайт.png')
  },
  lolita: {
    date: '02.08', name: 'ЛОЛИТА', venue: '19:30, Дизайн завод', logo: encodeURI('лого.svg'),
    desc: [
      'Лолита на Summer Sound х билайн!',
      'Полтора часа живого, откровенного диалога, где сцена исчезает, а остаётся ощущение, будто вы болтаете с близким человеком — той самой подругой, которая и рассмешит до слёз, и скажет правду без прикрас.',
      'Голос на концертах Лолиты теплее, и ваши яркие. И да — слова «Титаника» лучше освежить заранее.',
      '2 августа — Москва, Дизайн завод'
    ],
    img: encodeURI('singers/лолита сайт.png')
  },
  cream: {
    date: '04.08', name: 'CREAM SODA', venue: '19:30, Дизайн завод', logo: 'purple_logo.svg',
    desc: [
      'Большое летнее шоу от Cream Soda на Summer Sound х билайн!',
      'Главный романтик тёмного поп-рока отправляется в тур по городам Summer Sound х билайн с атмосферными концертами под открытым небом.',
      'В программе — главные хиты, новые треки и всё, за что вы любите Cream Soda. Мы должны вас увидеть. Не пропустите:\n4 августа — Нижний Новгород, Ракушка\n7 августа — Санкт-Петербург, 10/12 Мануфактура'
    ],
    img: encodeURI('singers/крем сайт.png')
  }
};

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

      // Close artist overlay if open
      closeArtistOverlay();

      // Switch active tab (all sets of tabs)
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll(`.city-tab[data-city="${city}"]`)
        .forEach(t => t.classList.add('active'));

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

  // Artist card clicks
  document.querySelectorAll('.artist-card[data-artist]').forEach(card => {
    card.addEventListener('click', () => openArtistOverlay(card.dataset.artist));
  });

  // Close overlay on back button
  document.getElementById('artist-close').addEventListener('click', closeArtistOverlay);

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeArtistOverlay();
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
  moscow: encodeURI('лого.svg'),
  spb:    'singers_blocks/logo-spb.svg',
  nn:     'singers_blocks/logo-nn.svg',
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
  const OVERLAY_BG_LOGOS = {
    moscow: encodeURI('лого.svg'),
    spb:    'singers_blocks/logo-spb.svg',
    nn:     'singers_blocks/logo-nn.svg',
  };

  switchLogo = function (city) {
    // Switch hero logo
    logoWrap.querySelectorAll('[data-logo-city]').forEach(el => {
      el.style.display = el.dataset.logoCity === city ? 'block' : 'none';
    });
    // Update overlay background logo
    const bgLogo = document.getElementById('artist-bg-logo');
    if (bgLogo) bgLogo.src = OVERLAY_BG_LOGOS[city];
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

/* =============================================================
   Artist overlay — open / close
============================================================= */
function openArtistOverlay(artistId) {
  const data    = ARTISTS_DATA[artistId];
  if (!data) return;

  const overlay = document.getElementById('artist-overlay');

  // Fill content
  document.getElementById('ap-date').textContent  = data.date;
  document.getElementById('ap-name').textContent  = data.name;
  document.getElementById('ap-venue').textContent = data.venue;

  const descEl = document.getElementById('ap-desc');
  descEl.innerHTML = data.desc
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  const imgEl = document.getElementById('ap-img');
  imgEl.src = data.img;
  imgEl.alt = data.name;

  // Set artist-specific background S logo
  const bgLogo = document.getElementById('artist-bg-logo');
  if (bgLogo) bgLogo.src = data.logo;

  // Sync city tabs inside overlay to current active city
  overlay.querySelectorAll('.city-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.city === activeCity);
  });

  // Show overlay
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeArtistOverlay() {
  const overlay = document.getElementById('artist-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

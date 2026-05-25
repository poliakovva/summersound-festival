# SummerSound Festival Website

Static website for the SummerSound music festival. Built with plain HTML, CSS, and vanilla JS — no build step required.

## Live site

**https://poliakovva.github.io/summersound-festival/**

GitHub repo: https://github.com/poliakovva/summersound-festival

## Project structure

```
index.html          — single-page site (hero + artists + filler sections)
styles.css          — all styles
script.js           — city tab switching logic
лого.svg            — decorative S logo (the central hero mark)
singers/            — pre-styled artist card images (PNG, Cyrillic filenames)
```

### Singers in `singers/`

| File | Artist | Date |
|---|---|---|
| хаски сайт.png | ХАСКИ | 22.07 |
| лсп сайт.png | ЛСП | 22.07 |
| мейби бейби сайт.png | МЭЙБИ БЭЙБИ | 27.07 |
| фкдук сайт.png | FEDUK | 19.07 |
| айова сайт.png | IOWA | 30.07 |
| салуки сайт.png | SALUKI | 29.07 |
| лолита сайт.png | ЛОЛИТА | 02.08 |
| крем сайт.png | CREAM SODA | 04.08 |

All singer images are pre-styled cards (date + name + coloured background already baked in).

## Design

- **Background:** `#FFD600` (bright festival yellow)
- **Font:** [Unbounded](https://fonts.google.com/specimen/Unbounded) (logo/headings) + [Montserrat](https://fonts.google.com/specimen/Montserrat) (body/nav)
- **Logo mark:** `лого.svg` — decorative S built from radial pill shapes (pink → magenta gradient)
- **Reference mockups:** `main_page.png` (hero), `moscow_page.png` (artist grid) — kept locally, not pushed to git

## Pages / sections

| ID / anchor | Content |
|---|---|
| Hero (top) | S logo mark, SUMMERSOUND wordmark, × билайн, dates, venue |
| `.artists-section` | Tabbed artist grid — city tabs switch between МОСКВА / САНКТ-ПЕТЕРБУРГ / НИЖНИЙ НОВГОРОД |
| `#about` | О ФЕСТИВАЛЕ — filler text |
| `#faq` | ВОПРОС-ОТВЕТ — expandable FAQ |
| `#contacts` | КОНТАКТЫ — email + phone + address |
| `#accreditation` | АККРЕДИТАЦИЯ — press accreditation info |

SPb and Нижний Новгород tabs show a "coming soon" placeholder — no artist list yet.

## Deploying changes

```bash
git add -A
git commit -m "describe what changed"
git push
```

GitHub Pages rebuilds automatically (~30 s). No CI/CD setup needed.

## Dev server (local preview)

```bash
npx serve .
```

Or open `index.html` directly in a browser — it works without a server.

Claude Code users: the project has a `.claude/launch.json` that starts `npx serve` on port 3456.

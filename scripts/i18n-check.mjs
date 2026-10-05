#!/usr/bin/env node
// i18n minőségkapu - `npm run i18n:check`, és automatikusan minden `npm run build` előtt (prebuild).
//
// Mindig HIBA (build megáll): szerkezeti eltérés, ami futáskor törne
//   - szótár-kulcs hiányzik / felesleges / más típusú (hu.js a forrás)
//   - tartalom-kulcs (id) hiányzik a nyelvi content-fájlban
//   - route-térkép (lib/i18n/routes.js) ↔ app/(nyelv)/…/page.jsx nem egyezik
// FIGYELMEZTETÉS, ill. SZIGORÚ módban (Vercel Production vagy I18N_STRICT=1) ÉLŐ nyelvnél HIBA:
//   - 'TODO fordítás' / 'DRAFT' jelölés a nyelvi fájlokban (félkész fordítás ne menjen élesbe)
//   - a fontban nem létező karakter (scripts/font-charset.json)
// Csak tájékoztatás: a magyarral szó szerint egyező (valószínűleg lefordítatlan) szövegek száma.
//
// Az adatfájlok import nélküliek, ezért data:-URL-ként töltjük be őket (nincs build-lépés).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const rel = (p) => path.relative(root, p)
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8')
const exists = (p) => fs.existsSync(path.join(root, p))
const load = (p) => import('data:text/javascript;charset=utf-8,' + encodeURIComponent(read(p)))

// .env.local / .env → LIVE_LOCALES, ha a környezetben nincs (a Next is ezekből olvas)
if (!process.env.LIVE_LOCALES) {
  for (const f of ['.env.local', '.env']) {
    if (!exists(f)) continue
    const m = read(f).match(/^\s*LIVE_LOCALES\s*=\s*(.+)\s*$/m)
    if (m) { process.env.LIVE_LOCALES = m[1].replace(/^['"]|['"]$/g, ''); break }
  }
}

const { LOCALES, DEFAULT_LOCALE, LIVE_LOCALES } = await load('lib/i18n/config.js')
const { ROUTES } = await load('lib/i18n/routes.js')
const STRICT = process.env.VERCEL_ENV === 'production' || process.env.I18N_STRICT === '1'
const OTHERS = LOCALES.filter((l) => l !== DEFAULT_LOCALE)

const errors = []
const warnings = []
const infos = []
const soft = (locale, msg) => (STRICT && LIVE_LOCALES.includes(locale) ? errors : warnings).push(msg)

// ---------- szerkezet-összevetés (a magyar a forrás) ----------
// Tömbök: szótárban (strictArrays) a hossz is kötelező (napok, ikonsor…), kivéve a szabadon bővíthető
// listákat; tartalomban (előnyök, bekezdések) a fordítás eltérhet → csak figyelmeztetés.
const FREE_LENGTH = new Set(['meta.keywords', 'schema.knowsAbout'])
function compare(src, dst, where, at = '', strictArrays = false) {
  if (Array.isArray(src)) {
    if (!Array.isArray(dst)) return errors.push(`${where}: '${at}' tömb kellene`)
    if (src.length !== dst.length && !FREE_LENGTH.has(at)) {
      ;(strictArrays ? errors : warnings).push(`${where}: '${at}' elemszám ${dst.length} (magyar: ${src.length})`)
    }
    src.forEach((v, i) => dst[i] !== undefined && typeof v === 'object' && compare(v, dst[i], where, `${at}[${i}]`, strictArrays))
    return
  }
  if (src && typeof src === 'object') {
    if (!dst || typeof dst !== 'object' || Array.isArray(dst)) return errors.push(`${where}: '${at}' objektum kellene`)
    for (const k of Object.keys(src)) {
      const p = at ? `${at}.${k}` : k
      if (!(k in dst)) errors.push(`${where}: hiányzó kulcs '${p}'`)
      else compare(src[k], dst[k], where, p, strictArrays)
    }
    for (const k of Object.keys(dst)) if (!(k in src)) errors.push(`${where}: felesleges kulcs '${at ? `${at}.${k}` : k}'`)
    return
  }
  if (typeof src !== typeof dst) errors.push(`${where}: '${at}' típusa ${typeof dst} (magyar: ${typeof src})`)
  else if (typeof src === 'string' && src && !dst) errors.push(`${where}: '${at}' üres`)
}

// minden string-levél (a fordítatlanság- és glyph-ellenőrzéshez)
function strings(v, out = []) {
  if (typeof v === 'string') out.push(v)
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out))
  return out
}

// ---------- 1. szótárak + 2. tartalom ----------
const DATA = [
  { file: (l) => `lib/i18n/dictionaries/${l}.js`, pick: (m) => m.default, strictArrays: true },
  { file: (l) => `lib/content/locales/${l}/home.js`, pick: (m) => ({ ...m }) },
  { file: (l) => `lib/content/locales/${l}/devices.js`, pick: (m) => ({ ...m }) },
  { file: (l) => `lib/content/locales/${l}/faq.js`, pick: (m) => ({ ...m }) },
]
const textByLocale = Object.fromEntries(LOCALES.map((l) => [l, []]))

for (const d of DATA) {
  const base = d.pick(await load(d.file(DEFAULT_LOCALE)))
  textByLocale[DEFAULT_LOCALE].push(...strings(base))
  const baseSet = new Set(strings(base).filter((s) => s.length > 3))
  for (const l of OTHERS) {
    const f = d.file(l)
    if (!exists(f)) { errors.push(`${f}: hiányzik`); continue }
    const data = d.pick(await load(f))
    compare(base, data, f, '', d.strictArrays)
    const all = strings(data)
    textByLocale[l].push(...all)
    const same = all.filter((s) => baseSet.has(s))
    if (same.length) infos.push(`${f}: ${same.length}/${all.length} szöveg azonos a magyarral (lefordítatlan?)`)
  }
}

// ---------- 3. jelölések (TODO fordítás / DRAFT) ----------
function filesUnder(dir, re) {
  if (!exists(dir)) return []
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? filesUnder(`${dir}/${e.name}`, re) : re.test(e.name) ? [`${dir}/${e.name}`] : []
  )
}
// MDX renderelt szövege közelítőleg: a JSX- és JS-kommentek nélkül (azok nem jelennek meg)
const mdxText = (f) => read(f).replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/^\s*\/\/.*$/gm, '')

for (const l of OTHERS) {
  const files = [
    `lib/i18n/dictionaries/${l}.js`,
    ...filesUnder(`lib/content/locales/${l}`, /\.(js|jsx)$/),
    ...filesUnder(`content/blog/${l}`, /\.mdx$/),
  ]
  const marked = files.filter((f) => exists(f) && /TODO fordítás|\bDRAFT\b/.test(read(f)))
  if (marked.length) soft(l, `[${l}] ${marked.length} fájl még fordításra/lektorálásra vár (TODO fordítás / DRAFT): ${marked.join(', ')}`)
  // MDX-szöveg a glyph-ellenőrzéshez
  for (const f of filesUnder(`content/blog/${l}`, /\.mdx$/)) textByLocale[l].push(mdxText(f))
}
for (const f of filesUnder(`content/blog/${DEFAULT_LOCALE}`, /\.mdx$/)) textByLocale[DEFAULT_LOCALE].push(mdxText(f))

// ---------- 4. glyph-ellenőrzés ----------
const { ranges } = JSON.parse(read('scripts/font-charset.json'))
const R = ranges.map(([a, b]) => [parseInt(a.slice(2), 16), parseInt(b.slice(2), 16)])
// Szándékos, a fontban nem lévő szimbólumok (rendszerfontból jönnek): csillag, nyíl, üres helyek, sortörés
const ALLOW = new Set([...'★→←↗✓\n\r\t  ​'])
const inFont = (cp) => R.some(([a, b]) => cp >= a && cp <= b)
for (const l of LOCALES) {
  const bad = new Set()
  for (const s of textByLocale[l]) for (const ch of s) if (!ALLOW.has(ch) && !inFont(ch.codePointAt(0))) bad.add(ch)
  if (bad.size) soft(l, `[${l}] a fontban nem létező karakter(ek): ${[...bad].map((c) => `'${c}' U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`).join(', ')} → font újra-szűkítés (lib/fonts.js) vagy csere`)
}

// ---------- 5. route-térkép ↔ fájlok ----------
for (const [route, byLocale] of Object.entries(ROUTES)) {
  for (const [l, p] of Object.entries(byLocale)) {
    const file = `app/(${l})${p === '/' ? '' : p}/page.jsx`
    if (!exists(file)) errors.push(`routes.js: ${route}.${l} = '${p}', de nincs ${file}`)
  }
}

// ---------- 6. blog-párok (tájékoztatás) ----------
const keys = (l) => new Set(filesUnder(`content/blog/${l}`, /\.mdx$/).map((f) => read(f).match(/translationKey:\s*'([^']+)'/)?.[1]).filter(Boolean))
const huKeys = keys(DEFAULT_LOCALE)
for (const l of OTHERS) {
  const missing = [...huKeys].filter((k) => !keys(l).has(k))
  if (missing.length) infos.push(`[${l}] lefordítatlan cikk(ek): ${missing.join(', ')} (a nyelvválasztó a blogra / főoldalra esik vissza)`)
}

// ---------- kimenet ----------
console.log(`i18n-check · élő nyelvek: ${LIVE_LOCALES.join(', ')}${STRICT ? ' · SZIGORÚ mód' : ''}`)
for (const m of infos) console.log(`  ℹ ${m}`)
for (const m of warnings) console.log(`  ⚠ ${m}`)
for (const m of errors) console.log(`  ✖ ${m}`)
if (errors.length) {
  console.log(`\n✖ ${errors.length} hiba - a build leáll. Javítsd, vagy vedd ki a nyelvet a LIVE_LOCALES-ből.`)
  process.exit(1)
}
console.log(`✓ rendben${warnings.length ? ` (${warnings.length} figyelmeztetés)` : ''}`)

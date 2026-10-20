'use client'
// Egyedi események a Vercel Web Analyticsbe (sütimentes). Az oldalmegtekintést az <Analytics /> méri
// (RootDocument), ez a fájl a konverziós kattintásokat: foglalás, telefon, email, útvonal, vélemények,
// közösségi média, szakorvos oldala + a visszahívás-form sikeres elküldése (useCallbackForm).
// Megjegyzés: egyedi eseményeket a Vercel csak Pro csomagban rögzít, eseményenként max. 2 extra adattal
// (itt: hely + gomb; az oldal útvonalát a Vercel magától is rögzíti).
import { track } from '@vercel/analytics'
import { MAPS_URL, DOCTOR_URL, GOOGLE_REVIEWS_URL, BOOKING_URL_CHILD } from './constants'

// Az Ügyfél Admin szerkesztő iframe-jében (CmsBridge) nem mérünk - az nem látogató
const inEditor = () => {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

export function trackEvent(name, props) {
  if (typeof window === 'undefined' || inEditor()) return
  track(name, props)
}

const host = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}
const MAPS_HOST = host(MAPS_URL)
const DOCTOR_HOST = host(DOCTOR_URL)
const REVIEWS_HOST = host(GOOGLE_REVIEWS_URL)
// A gyermek-foglalás a medicall.cc-n más szakterület-azonosítóval megy (lib/constants.js)
const CHILD_SPEC = new URL(BOOKING_URL_CHILD).searchParams.get('specializationId')

// href → eseménynév (null = nem mérjük)
export function classifyLink(href) {
  if (!href) return null
  if (href.startsWith('tel:')) return 'Telefonhívás'
  if (href.startsWith('mailto:')) return 'Email'
  const h = host(href)
  if (!h) return null
  if (h.endsWith('medicall.cc')) {
    const spec = new URL(href).searchParams.get('specializationId')
    return spec && spec === CHILD_SPEC ? 'Időpontfoglalás (gyermek)' : 'Időpontfoglalás'
  }
  if (h === MAPS_HOST || h.endsWith('maps.google.com') || h === 'goo.gl') return 'Útvonaltervezés'
  if (h === REVIEWS_HOST) return 'Google-vélemények'
  if (h.endsWith('facebook.com') || h.endsWith('instagram.com')) return 'Közösségi média'
  if (h === DOCTOR_HOST) return 'Szakorvos oldala'
  return null
}

// A gomb / link felirata (pontosan melyiket nyomták meg). Ikon-gombnál az aria-label / title.
export function linkLabel(el) {
  // a fejléc-gombnak hosszú + rövid (mobil) felirata is van → a hosszút vesszük
  const src = el.querySelector('.cta-full') || el
  const text = (src.innerText || src.textContent || '').replace(/\s+/g, ' ').trim()
  return (text || el.getAttribute('aria-label') || el.getAttribute('title') || '(ikon)').slice(0, 60)
}

// Szekció-azonosítók / class-ok → olvasható név a Vercel dashboardon
const PLACE_NAMES = {
  // főoldal (section id)
  ajanlat: 'ajánlat',
  csapat: 'csapat',
  folyamat: 'lépésről lépésre',
  gyik: 'GYIK',
  idopont: 'időpontfoglalás blokk',
  kategoriak: 'kategóriák',
  markak: 'márkák',
  szolgaltatasok: 'szolgáltatások',
  velemenyek: 'vélemények',
  // aloldalak (id nélküli szekciók class-a)
  'kp-hero': 'termék-fejléc',
  'kp-related': 'kapcsolódó márkák',
  kcta: 'alsó CTA',
  'article-cta': 'cikk alja CTA',
}
const GENERIC = new Set(['block', 'reveal', 'wrap', 'faq'])

// Hol volt a link - mindig konkrét név, „egyéb" nincs:
// fix helyek → szekció id / class (PLACE_NAMES) → végső tartalék: a tartalmazó blokk címsora.
export function linkPlace(el) {
  if (el.closest('footer')) return 'lábléc'
  if (el.closest('#mobile-menu')) return 'mobil menü'
  if (el.closest('header, nav')) return 'fejléc'
  if (el.closest('.hero-video')) return 'hero'
  if (el.closest('.promo-frame')) return 'akciós felugró ablak'
  const marked = el.closest('[data-track-place]')
  if (marked) return marked.dataset.trackPlace
  const sec = el.closest('section')
  if (sec) {
    if (sec.id) return PLACE_NAMES[sec.id] || sec.id
    const cls = [...sec.classList].find((c) => !GENERIC.has(c))
    if (cls) return PLACE_NAMES[cls] || cls
  }
  // ismeretlen hely: a legközelebbi blokk címsora (pl. felugró ablak, új aloldal)
  for (let box = el.parentElement; box && box !== document.body; box = box.parentElement) {
    const h = box.querySelector('h1, h2, h3')
    const title = h?.textContent.replace(/\s+/g, ' ').trim()
    if (title) return `blokk: ${title.slice(0, 50)}`
  }
  return `oldal: ${window.location.pathname}`
}

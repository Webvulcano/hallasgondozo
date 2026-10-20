'use client'
// Egyedi események a Vercel Web Analyticsbe (sütimentes). Az oldalmegtekintést az <Analytics /> méri
// (RootDocument), ez a fájl a konverziós kattintásokat: foglalás, telefon, email, útvonal, vélemények,
// közösségi média, szakorvos oldala + a visszahívás-form sikeres elküldése (useCallbackForm).
// Megjegyzés: egyedi eseményeket a Vercel csak Pro csomagban rögzít (Hobbyn a hívás csendben elvész).
import { track } from '@vercel/analytics'
import { MAPS_URL, DOCTOR_URL, GOOGLE_REVIEWS_URL } from './constants'

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

// href → eseménynév (null = nem mérjük)
export function classifyLink(href) {
  if (!href) return null
  if (href.startsWith('tel:')) return 'Telefonhívás'
  if (href.startsWith('mailto:')) return 'Email'
  const h = host(href)
  if (!h) return null
  if (h.endsWith('medicall.cc')) return 'Időpontfoglalás'
  if (h === MAPS_HOST || h.endsWith('maps.google.com') || h === 'goo.gl') return 'Útvonaltervezés'
  if (h === REVIEWS_HOST) return 'Google-vélemények'
  if (h.endsWith('facebook.com') || h.endsWith('instagram.com')) return 'Közösségi média'
  if (h === DOCTOR_HOST) return 'Szakorvos oldala'
  return null
}

// Hol volt a link: fejléc / lábléc / a legközelebbi szekció id-je (pl. idopont, gyik, csapat)
export function linkPlace(el) {
  if (el.closest('footer')) return 'lábléc'
  if (el.closest('header, nav')) return 'fejléc'
  const sec = el.closest('section[id], [data-track-place]')
  return sec?.dataset.trackPlace || sec?.id || 'egyéb'
}

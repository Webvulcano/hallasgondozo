'use client'
import { useEffect, useState } from 'react'
import Button from './Button'

// Nyelvjavaslat-sáv: ha a böngésző preferált nyelve egy MÁSIK élő nyelv, egy kis fix sáv felajánlja
// az oldal párját („Diese Seite gibt es auch auf Deutsch → Zur deutschen Version ×").
// NINCS automatikus átirányítás (Google-ajánlás: a crawler és a felhasználó is maradjon, ahová kattintott).
// Fix pozíció → nem tolja el a tartalmat (CLS 0); z-index a PromoPopup alatt.
// Nem jelenik meg: ha a látogató már elutasította / választott (localStorage), vagy az oldalon belülről
// navigált ide (pl. a nyelvválasztóval tudatosan váltott nyelvet).
// offers: { de: { href, text, cta, dismiss }, … } - a Nav adja, a célnyelv saját szövegével.
const STORAGE_KEY = 'erted-lang-suggest'

// localStorage egyes mobil böngészőkben SecurityError-t dobhat (lásd PromoPopup.jsx)
function safeGet(key) {
  try { return localStorage.getItem(key) } catch { return null }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value) } catch { /* noop */ }
}

export default function LangSuggest({ current, offers }) {
  const [offer, setOffer] = useState(null)

  useEffect(() => {
    if (safeGet(STORAGE_KEY)) return
    try {
      if (document.referrer && new URL(document.referrer).origin === window.location.origin) return
    } catch { /* hibás referrer → figyelmen kívül */ }

    const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
    for (const raw of prefs) {
      const lang = String(raw || '').toLowerCase().split('-')[0]
      if (lang === current) return // a preferált nyelv = az oldal nyelve → nincs teendő
      if (offers[lang]) {
        setOffer({ locale: lang, ...offers[lang] })
        return
      }
    }
  }, [current, offers])

  if (!offer) return null

  const remember = (value) => () => {
    safeSet(STORAGE_KEY, value)
    setOffer(null)
  }

  return (
    <div className="lang-suggest" role="region" aria-label={offer.text} lang={offer.locale}>
      <p className="lang-suggest-text">{offer.text}</p>
      <Button variant="gold" size="sm" href={offer.href} hrefLang={offer.locale} onClick={remember(offer.locale)}>
        {offer.cta}
      </Button>
      <button type="button" className="lang-suggest-close" aria-label={offer.dismiss} onClick={remember('dismissed')}>
        ×
      </button>
    </div>
  )
}

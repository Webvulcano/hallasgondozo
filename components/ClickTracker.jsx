'use client'
// Egyetlen, delegált kattintás-figyelő: minden konverziós linket (foglalás, telefon, email, útvonal,
// vélemények, social, szakorvos) mér, így az egyes gombokhoz nem kell külön kódot írni.
// Szabályok: lib/analytics.js (classifyLink, linkPlace, linkLabel).
//
// Ügyfél Admin CTA-előnézet: az admin iframe-jében (és csak ott) minden mért linkre ráírja a
// data-cta="<eseménynév>@<hely>" jelölést (ugyanaz a név + hely, amit a mérés küld), ezt keresi a
// CmsBridge kiemelése. A látogatók oldalán a DOM nem változik. Kézzel jelölt: a visszahívás-form gombja
// (csak eseménynév, a form nem küld helyet) és Dr. Vasvári „Bővebben” gombja (a popup helyett).
import { useEffect } from 'react'
import { classifyLink, linkLabel, linkPlace, trackEvent } from '../lib/analytics'

const framed = () => {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

function tagCtaLinks() {
  document.querySelectorAll('a[href]:not([data-cta])').forEach((a) => {
    const name = classifyLink(a.getAttribute('href'))
    if (name) a.dataset.cta = `${name}@${linkPlace(a)}`
  })
}

export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]')
      if (!a) return
      const name = classifyLink(a.getAttribute('href'))
      if (!name) return
      trackEvent(name, { hely: linkPlace(a), gomb: linkLabel(a) })
    }
    // capture: a navigáció / új lap előtt fusson le
    document.addEventListener('click', onClick, true)

    let observer = null
    if (framed()) {
      tagCtaLinks()
      // később megjelenő tartalom (kliens-navigáció, lusta szekciók) is kapjon jelölést
      observer = new MutationObserver(tagCtaLinks)
      observer.observe(document.body, { childList: true, subtree: true })
    }
    return () => {
      document.removeEventListener('click', onClick, true)
      observer?.disconnect()
    }
  }, [])
  return null
}

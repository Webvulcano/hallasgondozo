'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../Button'

// Hamburger-menü ≤900px-en - teljes képernyős overlay (Mooira-stílus): középen nagy
// serif linkek lépcsőzetes beúszással, alul CTA + elérhetőség.
// Az overlay portállal a <body>-ba kerül: a header backdrop-filtere miatt a
// position:fixed különben a headerhez tapadna. A header (logó + X) fölötte marad.
// items/current/labels/cta: a Nav-ból (nyelvfüggő); contact: { phone, email } a CMS alapadataiból;
// langSwitch: szerveren renderelt LangSwitcher (vagy null). *attr: szerkesztő-jelölések (lib/site.js).
export default function MobileMenu({ items, current, labels, cta, contact, langSwitch }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef(null)
  const close = () => setOpen(false)
  const pathname = usePathname()
  const isHome = current === 'home'
  const isPrices = current === 'prices'
  const isProducts = current === 'devices' || current === 'brand'
  const isBlog = current === 'blog' || current === 'post'

  // Scroll-spy a főoldalon (mint desktopon): a Kapcsolat (#idopont) a nézet közepén van-e
  const [spy, setSpy] = useState('fooldal') // 'fooldal' | 'kapcsolat'

  useEffect(() => {
    if (!isHome) return
    const el = document.getElementById('idopont')
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setSpy(entry.isIntersecting ? 'kapcsolat' : 'fooldal'),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [isHome])

  const homeActive = isHome && spy === 'fooldal'
  const kapcsolatActive = isHome && spy === 'kapcsolat'

  // Kapcsolat: a főoldalon görgessünk a szekcióra (a hash-Link itt nem ugrik); máshonnan a Link navigál
  const onKapcsolat = (e) => {
    if (isHome) {
      const el = document.getElementById('idopont')
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    close()
  }

  // Menüpontonként: aktív-e + kattintás (a saját oldalán a tetejére görget, majd zár)
  const scrollIfHere = (here) => () => {
    if (here) window.scrollTo({ top: 0, behavior: 'smooth' })
    close()
  }
  const itemState = {
    home: { active: homeActive, onClick: scrollIfHere(isHome) },
    devices: { active: isProducts, onClick: scrollIfHere(isProducts) },
    prices: { active: isPrices, onClick: scrollIfHere(isPrices) },
    contact: { active: kapcsolatActive, onClick: onKapcsolat },
    blog: { active: isBlog, onClick: scrollIfHere(isBlog) },
  }

  useEffect(() => setMounted(true), [])

  // Zárva: inert (nem fókuszálható, Tab nem jut be) — DOM-propként, React-verziófüggetlenül
  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open
  }, [open, mounted])

  // Megnyitva: Esc bezár, háttér-görgetés tiltva, header tömör háttérrel (html.menu-open)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.documentElement.classList.add('menu-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('menu-open')
    }
  }, [open])

  // Oldalváltáskor zárjuk (pl. a Link navigált, de az onClick előtt unmount nem volt)
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <button
        type="button"
        className={`nav-burger${open ? ' open' : ''}`}
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted && createPortal(
        <div
          id="mobile-menu"
          className={`nav-mobile-menu${open ? ' open' : ''}`}
          ref={menuRef}
          aria-hidden={!open}
        >
          <nav className="nav-mobile-links" role="menu" aria-label={labels.aria}>
            {items.map((l) => {
              const st = itemState[l.key] || {}
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  className={`nav-mlink${st.active ? ' active' : ''}`}
                  role="menuitem"
                  aria-current={st.active ? 'page' : undefined}
                  onClick={st.onClick}
                  {...l.attr}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
          <div className="nav-mobile-footer">
            <Button variant="gold" href={cta.href} onClick={close}>
              <span {...cta.attr}>{cta.label}</span>
            </Button>
            <div className="nav-mobile-contact">
              <a href={contact.phone.href} {...contact.phoneAttr}>{contact.phone.display}</a>
              <a href={`mailto:${contact.email}`} {...contact.emailAttr}>{contact.email}</a>
            </div>
            {langSwitch}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

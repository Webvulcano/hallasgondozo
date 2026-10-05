'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BOOKING_URL, PHONE, EMAIL } from '../../lib/constants'
import Button from '../Button'

// Hamburger-menü ≤900px-en - teljes képernyős overlay (Mooira-stílus): középen nagy
// serif linkek lépcsőzetes beúszással, alul CTA + elérhetőség.
// Az overlay portállal a <body>-ba kerül: a header backdrop-filtere miatt a
// position:fixed különben a headerhez tapadna. A header (logó + X) fölötte marad.
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef(null)
  const close = () => setOpen(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isPrices = pathname.startsWith('/hallokeszulekek/arak')
  const isProducts = pathname.startsWith('/hallokeszulekek') && !isPrices
  const isBlog = pathname.startsWith('/blog')

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
        aria-label={open ? 'Menü bezárása' : 'Menü'}
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
          <nav className="nav-mobile-links" role="menu" aria-label="Mobil menü">
            <Link
              href="/"
              className={`nav-mlink${homeActive ? ' active' : ''}`}
              role="menuitem"
              aria-current={homeActive ? 'page' : undefined}
              onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }); close() }}
            >
              Főoldal
            </Link>
            <Link
              href="/hallokeszulekek"
              className={`nav-mlink${isProducts ? ' active' : ''}`}
              role="menuitem"
              aria-current={isProducts ? 'page' : undefined}
              onClick={() => { if (isProducts) window.scrollTo({ top: 0, behavior: 'smooth' }); close() }}
            >
              Termékek
            </Link>
            {/* ár-oldal kikapcsolva (2026-10-04) - visszakapcsoláshoz vedd ki a kommentből
            <Link
              href="/hallokeszulekek/arak"
              className={`nav-mlink${isPrices ? ' active' : ''}`}
              role="menuitem"
              aria-current={isPrices ? 'page' : undefined}
              onClick={() => { if (isPrices) window.scrollTo({ top: 0, behavior: 'smooth' }); close() }}
            >
              Árak
            </Link>
            */}
            <Link
              href="/#idopont"
              className={`nav-mlink${kapcsolatActive ? ' active' : ''}`}
              role="menuitem"
              aria-current={kapcsolatActive ? 'page' : undefined}
              onClick={onKapcsolat}
            >
              Kapcsolat
            </Link>
            <Link
              href="/blog"
              className={`nav-mlink${isBlog ? ' active' : ''}`}
              role="menuitem"
              aria-current={isBlog ? 'page' : undefined}
              onClick={() => { if (isBlog) window.scrollTo({ top: 0, behavior: 'smooth' }); close() }}
            >
              Blog
            </Link>
          </nav>
          <div className="nav-mobile-footer">
            <Button variant="gold" href={BOOKING_URL} onClick={close}>
              Ingyenes vizsgálatot foglalok
            </Button>
            <div className="nav-mobile-contact">
              <a href={PHONE.href}>{PHONE.display}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

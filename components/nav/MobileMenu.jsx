'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BOOKING_URL } from '../../lib/constants'

// Hamburger-menü ≤900px-en - Főoldal, Termékek, Időpont foglalás (CTA)
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isProducts = pathname.startsWith('/keszulekek')
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

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

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

      <div
        className={`nav-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`nav-mobile-panel${open ? ' open' : ''}`}
        role="menu"
        aria-hidden={!open}
      >
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
          href="/keszulekek"
          className={`nav-mlink${isProducts ? ' active' : ''}`}
          role="menuitem"
          aria-current={isProducts ? 'page' : undefined}
          onClick={() => { if (isProducts) window.scrollTo({ top: 0, behavior: 'smooth' }); close() }}
        >
          Termékek
        </Link>
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
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold nav-mcta"
          role="menuitem"
          onClick={close}
        >
          Időpont foglalás
        </a>
      </div>
    </>
  )
}

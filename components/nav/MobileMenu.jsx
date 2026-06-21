'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BOOKING_URL } from '../../lib/constants'

// Hamburger-menü ≤900px-en — Főoldal, Termékek, Időpont foglalás (CTA)
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

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
        <Link href="/" className="nav-mlink" role="menuitem" onClick={close}>
          Főoldal
        </Link>
        <Link href="/keszulekek" className="nav-mlink" role="menuitem" onClick={close}>
          Termékek
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

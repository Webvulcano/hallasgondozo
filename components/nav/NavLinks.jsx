'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// items: [{ key, href, label, attr }] a Nav-ból (nyelvfüggő href + felirat + szerkesztő-jelölés).
// current: a szerver által megadott route-kulcs → aktív menüpont (nincs pathname-parszolás,
// így a lokalizált URL-eken - /en/hearing-aids, /de/hoergeraete - is pontos).
export default function NavLinks({ items, current, ariaLabel }) {
  const onHome = current === 'home'
  const onPrices = current === 'prices'
  const onProducts = current === 'devices' || current === 'brand'
  const onBlog = current === 'blog' || current === 'post'

  // Scroll-spy a főoldalon: a Kapcsolat (#idopont) szekció a nézet közepén van-e
  const [spy, setSpy] = useState('fooldal') // 'fooldal' | 'kapcsolat'

  useEffect(() => {
    if (!onHome) return
    const el = document.getElementById('idopont')
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setSpy(entry.isIntersecting ? 'kapcsolat' : 'fooldal'),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [onHome])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Kapcsolat: a főoldalon görgessünk a szekcióra (a hash-Link itt nem ugrik)
  const onKapcsolat = (e) => {
    if (!onHome) return
    const el = document.getElementById('idopont')
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth' })
  }

  const state = {
    home: { active: onHome && spy === 'fooldal', onClick: onHome ? scrollTop : undefined },
    devices: { active: onProducts, onClick: onProducts ? scrollTop : undefined },
    prices: { active: onPrices, onClick: onPrices ? scrollTop : undefined },
    contact: { active: onHome && spy === 'kapcsolat', onClick: onKapcsolat },
    blog: { active: onBlog, onClick: onBlog ? scrollTop : undefined },
  }

  return (
    <nav className="nav-menu" aria-label={ariaLabel}>
      {items.map((l) => {
        const s = state[l.key] || {}
        return (
          <Link
            key={l.key}
            href={l.href}
            className={`nav-link${s.active ? ' active' : ''}`}
            aria-current={s.active ? 'page' : undefined}
            onClick={s.onClick}
            {...l.attr}
          >
            {l.label}
          </Link>
        )
      })}
    </nav>
  )
}

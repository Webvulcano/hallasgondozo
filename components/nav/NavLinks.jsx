'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()
  const onHome = pathname === '/'
  const onProducts = pathname.startsWith('/keszulekek')

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

  const links = [
    { href: '/', label: 'Főoldal', active: onHome && spy === 'fooldal' },
    { href: '/keszulekek', label: 'Termékek', active: onProducts },
    { href: '/#idopont', label: 'Kapcsolat', active: onHome && spy === 'kapcsolat' },
  ]

  return (
    <nav className="nav-menu" aria-label="Fő menü">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className={`nav-link${l.active ? ' active' : ''}`}
          aria-current={l.active ? 'page' : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}

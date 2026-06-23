'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()
  const onHome = pathname === '/'
  const onProducts = pathname.startsWith('/keszulekek')
  const onBlog = pathname.startsWith('/blog')

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

  const links = [
    { href: '/', label: 'Főoldal', active: onHome && spy === 'fooldal', onClick: onHome ? scrollTop : undefined },
    { href: '/keszulekek', label: 'Termékek', active: onProducts, onClick: onProducts ? scrollTop : undefined },
    { href: '/#idopont', label: 'Kapcsolat', active: onHome && spy === 'kapcsolat' },
    { href: '/blog', label: 'Blog', active: onBlog, onClick: onBlog ? scrollTop : undefined },
  ]

  return (
    <nav className="nav-menu" aria-label="Fő menü">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className={`nav-link${l.active ? ' active' : ''}`}
          aria-current={l.active ? 'page' : undefined}
          onClick={l.onClick}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}

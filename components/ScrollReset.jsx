'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Route váltáskor instant a lap tetejére - a globális scroll-behavior:smooth
// különben elrontja a Next.js scroll-resetet (rossz pozícióban áll meg).
// Hash-es navigációt (#idopont) kihagyjuk, hogy az anchor-ugrás megmaradjon.
export default function ScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash) return
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    html.style.scrollBehavior = prev
  }, [pathname])

  return null
}

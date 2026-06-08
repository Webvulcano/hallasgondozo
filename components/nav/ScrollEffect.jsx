'use client'
import { useEffect } from 'react'

// Hozzáadja a .scrolled osztályt a megadott elem id-jához ha window.scrollY > threshold

export default function ScrollEffect({ targetId = 'nav', threshold = 8 }) {
  useEffect(() => {
    const nav = document.getElementById(targetId)
    if (!nav) return
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [targetId, threshold])

  return null
}

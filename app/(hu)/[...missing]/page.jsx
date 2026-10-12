// Magyar route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import { notFound } from 'next/navigation'

// Minden nem létező magyar URL ide fut → a nyelvi not-found.jsx (több root layout mellett
// a globális 404 még experimental, így lesz a 404 is a megfelelő nyelvű, a megfelelő layoutban).
export default function Missing() {
  notFound()
}

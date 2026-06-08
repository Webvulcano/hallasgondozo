import Link from 'next/link'

export const metadata = {
  title: '404 — Oldal nem található | ÉRTED Hallásgondozó',
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '64px', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '20px', marginBottom: '28px', color: 'var(--ink-soft)' }}>
          A keresett oldal nem található.
        </p>
        <Link href="/" className="btn btn-gold">Vissza a főoldalra</Link>
      </div>
    </main>
  )
}

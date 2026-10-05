import Button from '../components/Button'

export const metadata = {
  title: '404 - Oldal nem található | ÉRTED Hallásgondozó',
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: 'var(--fs-hero)', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: 'var(--fs-xl)', marginBottom: '28px', color: 'var(--ink-soft)' }}>
          A keresett oldal nem található.
        </p>
        <Button variant="gold" href="/">Vissza a főoldalra</Button>
      </div>
    </main>
  )
}

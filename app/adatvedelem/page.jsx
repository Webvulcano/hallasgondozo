import Link from 'next/link'
import { COMPANY, EMAIL, PHONE } from '../../lib/constants'

export const metadata = {
  title: 'Adatvédelmi Szabályzat | ÉRTED Hallásgondozó',
  description: 'ÉRTED Hallásgondozó adatvédelmi szabályzata és cookie tájékoztatója.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="wrap" style={{ maxWidth: '780px' }}>
        <Link href="/" style={{ color: 'var(--teal-deep)', fontWeight: 600, display: 'inline-block', marginBottom: '24px' }}>
          ← Vissza a főoldalra
        </Link>
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>Adatvédelmi Szabályzat</h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
          Hatályos: {new Date().getFullYear()}. január 1-től
        </p>

        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '12px' }}>1. Adatkezelő</h2>
        <p>
          {COMPANY.fullName} ({COMPANY.legalName})<br />
          Cím: {COMPANY.address}<br />
          Telefon: {PHONE.display}<br />
          E-mail: {EMAIL}
        </p>

        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '12px' }}>2. Kezelt adatok köre</h2>
        <p>
          A weboldal visszahívási űrlapján megadott név, telefonszám és opcionális megjegyzés.
          Az adatokat kizárólag a kérelmező visszahívása céljából használjuk fel.
        </p>

        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '12px' }}>3. Adatkezelés célja</h2>
        <p>Visszahívás kezdeményezése, időpontfoglalás egyeztetése.</p>

        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '12px' }}>4. Adatkezelés időtartama</h2>
        <p>Az adatokat a kapcsolatfelvétel lezárását követő 30 napon belül töröljük.</p>

        <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '12px' }}>5. Érintetti jogok</h2>
        <p>
          Ön bármikor kérheti adatainak helyesbítését, törlését vagy az adatkezelés korlátozását
          a fenti e-mail címen.
        </p>

        <p style={{ marginTop: '40px', padding: '20px', background: 'var(--teal-soft)', borderRadius: '12px', color: 'var(--teal-deep)' }}>
          <strong>Megjegyzés:</strong> Ez egy placeholder szöveg. Jogi szakember által véglegesített
          szabályzat szükséges éles használathoz.
        </p>
      </div>
    </main>
  )
}

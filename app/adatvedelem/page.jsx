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
        <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Adatvédelmi Szabályzat</h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
          Hatályos: {new Date().getFullYear()}. január 1-től
        </p>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>1. Adatkezelő</h2>
        <p>
          {COMPANY.fullName} ({COMPANY.legalName})<br />
          Cím: {COMPANY.address}<br />
          Telefon: {PHONE.display}<br />
          E-mail: {EMAIL}
        </p>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>2. Kezelt adatok köre</h2>
        <p>
          A weboldal visszahívási űrlapján megadott név, telefonszám és opcionális megjegyzés.
          Az adatokat kizárólag a kérelmező visszahívása céljából használjuk fel.
        </p>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>3. Adatkezelés célja és jogalapja</h2>
        <p>
          Visszahívás kezdeményezése, időpontfoglalás egyeztetése. Az adatkezelés jogalapja az
          Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap
          elküldésével, a jelölőnégyzet bejelölésével ad meg.
        </p>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>4. Adatfeldolgozók</h2>
        <p>
          Az űrlapon megadott adatokat az alábbi adatfeldolgozók közreműködésével kezeljük:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
          <li>
            <strong>SimplyForms</strong> (üzemeltető: Adam Todt, Csehország, simplyforms.app) —
            az űrlapon megadott adatok fogadására és e-mailben történő továbbítására
            részünkre. A szolgáltatás szerverei az Európai Unióban (Németország) találhatók,
            az adatok nem kerülnek továbbításra az EU-n kívülre. Az űrlap tartalmát (név,
            telefonszám, megjegyzés) a SimplyForms nem tárolja: az e-mail kézbesítése után
            törli. A beküldéshez kapcsolódó technikai adatokat (IP-cím, böngésző típusa,
            hivatkozó oldal) legfeljebb 90 napig őrzi meg.
          </li>
        </ul>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>5. Adatkezelés időtartama</h2>
        <p>
          Az űrlapon megadott adatok (név, telefonszám, megjegyzés) e-mailben érkeznek
          hozzánk. Ezeket a beérkezéstől számított legfeljebb 1 évig őrizzük meg, hogy
          sikertelen elérés vagy későbbi érdeklődés esetén fel tudjuk venni Önnel a
          kapcsolatot; ezt követően töröljük. Hozzájárulását bármikor visszavonhatja,
          ebben az esetben adatait haladéktalanul töröljük. A SimplyForms által kezelt technikai adatok
          legfeljebb 90 napig maradnak meg (lásd 4. pont).
        </p>

        <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>6. Érintetti jogok</h2>
        <p>
          Ön bármikor kérheti adatainak helyesbítését, törlését vagy az adatkezelés korlátozását
          a fenti e-mail címen, valamint panasszal élhet a Nemzeti Adatvédelmi és
          Információszabadság Hatóságnál (NAIH, naih.hu).
        </p>

        <p style={{ marginTop: '40px', padding: '20px', background: 'var(--teal-soft)', borderRadius: '12px', color: 'var(--teal-deep)' }}>
          <strong>Megjegyzés:</strong> Jogi szakember általi ellenjegyzés javasolt éles
          használat előtt.
        </p>
      </div>
    </main>
  )
}

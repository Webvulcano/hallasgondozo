// Impresszum (/impresszum, /en/legal-notice, /de/impressum) - Ekertv. 4. § szerinti szolgáltatói adatok.
// A szöveg nyelvenként: lib/content/locales/<nyelv>/imprint.jsx (a magyar az irányadó).
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLive } from '../../lib/i18n/config'
import { getDictionary } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { metaAlternates } from '../../lib/seo'
import ImprintHu from '../../lib/content/locales/hu/imprint'
import ImprintEn from '../../lib/content/locales/en/imprint'
import ImprintDe from '../../lib/content/locales/de/imprint'

const BODIES = { hu: ImprintHu, en: ImprintEn, de: ImprintDe }

export function imprintMetadata(locale) {
  const t = getDictionary(locale).meta
  return {
    title: { absolute: t.imprintTitle },
    description: t.imprintDescription,
    alternates: metaAlternates(routePath('imprint', locale), getAlternates('imprint').hreflang),
    robots: { index: true, follow: true },
  }
}

export default function ImprintView({ locale }) {
  if (!isLive(locale)) notFound()
  const t = getDictionary(locale)
  const Body = BODIES[locale]
  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="wrap" style={{ maxWidth: '780px' }}>
        <Link href={routePath('home', locale)} style={{ color: 'var(--teal-deep)', fontWeight: 600, display: 'inline-block', marginBottom: '24px' }}>
          {t.privacy.back}
        </Link>
        <Body />
      </div>
    </main>
  )
}

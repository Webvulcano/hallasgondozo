// Adatvédelmi Szabályzat (/adatvedelem, /en/privacy-policy, /de/datenschutz).
// A jogi szöveg nyelvenként: lib/content/locales/<nyelv>/privacy.jsx (a magyar az irányadó).
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLive } from '../../lib/i18n/config'
import { getDictionary } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { metaAlternates } from '../../lib/seo'
import PrivacyHu from '../../lib/content/locales/hu/privacy'
import PrivacyEn from '../../lib/content/locales/en/privacy'
import PrivacyDe from '../../lib/content/locales/de/privacy'

const BODIES = { hu: PrivacyHu, en: PrivacyEn, de: PrivacyDe }

export function privacyMetadata(locale) {
  const t = getDictionary(locale).meta
  return {
    title: { absolute: t.privacyTitle },
    description: t.privacyDescription,
    alternates: metaAlternates(routePath('privacy', locale), getAlternates('privacy').hreflang),
    robots: { index: true, follow: true },
  }
}

export default function PrivacyView({ locale }) {
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

// 404 nyelvenként (app/(hu|en|de)/not-found.jsx). A nem létező URL-eket nyelvenként egy
// [...missing] catch-all route irányítja ide (több root layout mellett a globális 404 még experimental).
// Nem élő nyelv (pl. /en/… amíg az angol nincs élesítve): magyar szöveg + a magyar főoldalra mutat.
import Button from '../Button'
import { getDictionary } from '../../lib/i18n'
import { isLive, DEFAULT_LOCALE } from '../../lib/i18n/config'
import { routePath } from '../../lib/i18n/routes'

const effective = (locale) => (isLive(locale) ? locale : DEFAULT_LOCALE)

// absolute: a cím már tartalmazza a márkanevet (a layout-template ne fűzze hozzá még egyszer)
export const notFoundMetadata = (locale) => ({
  title: { absolute: getDictionary(effective(locale)).meta.notFoundTitle },
  // felülírja a layout „index, follow"-ját → ne legyen ellentmondó robots-tag a 404-en
  robots: { index: false, follow: true },
})

export default function NotFoundView({ locale }) {
  const l = effective(locale)
  const t = getDictionary(l).notFound
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: 'var(--fs-hero)', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: 'var(--fs-xl)', marginBottom: '28px', color: 'var(--ink-soft)' }}>
          {t.text}
        </p>
        <Button variant="gold" href={routePath('home', l)}>{t.back}</Button>
      </div>
    </main>
  )
}

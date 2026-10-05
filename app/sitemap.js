import { LIVE_LOCALES, LOCALE_META, DEFAULT_LOCALE } from '../lib/i18n/config'
import { routePath } from '../lib/i18n/routes'
import { getAlternates } from '../lib/i18n/alternates'
import { getContent } from '../lib/content'
import { getPosts } from '../lib/content/posts'
import { absUrl } from '../lib/seo'

// Minden ÉLŐ nyelv minden oldala; ha egy oldalnak van nyelvi párja, xhtml:link hreflang-gel
// (ugyanaz a forrás, mint a <link rel="alternate">-é és a nyelvválasztóé: lib/i18n/alternates.js).
function entry(locale, route, key, path, rest) {
  const { hreflang } = getAlternates(route, key)
  const langs = Object.keys(hreflang)
  return {
    url: absUrl(path),
    ...rest,
    ...(langs.length > 1
      ? {
          alternates: {
            languages: {
              ...Object.fromEntries(langs.map((l) => [LOCALE_META[l].hreflang, absUrl(hreflang[l])])),
              ...(hreflang[DEFAULT_LOCALE] ? { 'x-default': absUrl(hreflang[DEFAULT_LOCALE]) } : {}),
            },
          },
        }
      : {}),
  }
}

export default function sitemap() {
  const lastModified = new Date()

  return LIVE_LOCALES.flatMap((locale) => {
    const posts = getPosts(locale)
    return [
      entry(locale, 'home', null, routePath('home', locale), { lastModified, changeFrequency: 'monthly', priority: 1 }),
      entry(locale, 'devices', null, routePath('devices', locale), { lastModified, changeFrequency: 'monthly', priority: 0.8 }),
      // ár-oldal kikapcsolva (2026-10-04): entry('hu', 'prices', null, routePath('prices', 'hu'), { lastModified, changeFrequency: 'monthly', priority: 0.8 }),
      ...getContent(locale).brands.map((b) =>
        entry(locale, 'brand', b.id, routePath('brand', locale, b.slug), {
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      ),
      ...(posts.length
        ? [entry(locale, 'blog', null, routePath('blog', locale), { lastModified, changeFrequency: 'weekly', priority: 0.7 })]
        : []),
      ...posts.map((p) =>
        entry(locale, 'post', p.translationKey, routePath('post', locale, p.slug), {
          lastModified: new Date(p.dateModified || p.datePublished),
          changeFrequency: 'yearly',
          priority: 0.6,
        })
      ),
      entry(locale, 'privacy', null, routePath('privacy', locale), { lastModified, changeFrequency: 'yearly', priority: 0.3 }),
    ]
  })
}

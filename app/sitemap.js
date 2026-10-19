import { LIVE_LOCALES, LOCALE_META, DEFAULT_LOCALE } from '../lib/i18n/config'
import { routePath } from '../lib/i18n/routes'
import { getAlternates } from '../lib/i18n/alternates'
import { getContent } from '../lib/content'
import { getPosts, postSlugsByLocale, getPost } from '../lib/content/posts'
import { loadSite } from '../lib/site'
import { absUrl } from '../lib/seo'

// Minden ÉLŐ nyelv minden oldala; ha egy oldalnak van nyelvi párja, xhtml:link hreflang-gel
// (ugyanaz a forrás, mint a <link rel="alternate">-é és a nyelvválasztóé: lib/i18n/alternates.js).
function entry(locale, route, key, path, rest, ctx) {
  const { hreflang } = getAlternates(route, key, ctx)
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

export default async function sitemap() {
  const lastModified = new Date()
  // Blog a CMS-ből: mely nyelveken van cikk, és cikkenként a nyelvi párok (hreflang)
  const { site } = await loadSite(LIVE_LOCALES[0])
  const blogCtx = { blogLocales: site.blogLocales }
  const postsByLocale = Object.fromEntries(
    await Promise.all(
      LIVE_LOCALES.map(async (l) => [l, site.blogLocales.includes(l) ? await getPosts(l) : []])
    )
  )
  // A nyelvi párokhoz a teljes cikk kell (translations) - csak ha több élő nyelven van blog
  const multi = site.blogLocales.filter((l) => LIVE_LOCALES.includes(l)).length > 1
  const slugsOf = async (locale, p) => (multi ? postSlugsByLocale(await getPost(locale, p.slug)) : { [locale]: p.slug })

  const perLocale = await Promise.all(LIVE_LOCALES.map(async (locale) => {
    const posts = postsByLocale[locale]
    const postEntries = await Promise.all(
      posts.map(async (p) =>
        entry(locale, 'post', null, routePath('post', locale, p.slug), {
          lastModified: new Date(p.dateModified || p.datePublished),
          changeFrequency: 'yearly',
          priority: 0.6,
        }, { ...blogCtx, postSlugs: await slugsOf(locale, p) })
      )
    )
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
        ? [entry(locale, 'blog', null, routePath('blog', locale), { lastModified, changeFrequency: 'weekly', priority: 0.7 }, blogCtx)]
        : []),
      ...postEntries,
      entry(locale, 'privacy', null, routePath('privacy', locale), { lastModified, changeFrequency: 'yearly', priority: 0.3 }),
      entry(locale, 'imprint', null, routePath('imprint', locale), { lastModified, changeFrequency: 'yearly', priority: 0.2 }),
    ]
  }))
  return perLocale.flat()
}

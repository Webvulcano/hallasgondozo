// Egy oldal nyelvi párjai - az EGYETLEN forrás a nyelvválasztóhoz, a hreflang-hez és a sitemaphez,
// így ezek nem tudnak elcsúszni egymástól.
// A blog a CMS-ből jön (async), ezért a blog-adatot a hívó adja (ctx), ez a modul szinkron marad:
//   ctx.blogLocales  - nyelvek, ahol van közzétett cikk (loadSite → site.blogLocales)
//   ctx.postSlugs    - egy cikk nyelvi párjai: { hu: 'slug', en: 'slug' } (posts.js → postSlugsByLocale)
import { LIVE_LOCALES } from './config'
import { ROUTES, PARENT, routePath } from './routes'
import { getBrandById } from '../content'

// key: dinamikus route-nál a nyelvközi azonosító (brand → márka id)
function resolvePath(route, locale, key, ctx) {
  if (!ROUTES[route]?.[locale]) return null
  if (route === 'brand') {
    const b = getBrandById(locale, key)
    return b ? routePath(route, locale, b.slug) : null
  }
  if (route === 'post') {
    const slug = ctx?.postSlugs?.[locale]
    return slug ? routePath(route, locale, slug) : null
  }
  // a blog-index csak akkor létezik egy nyelven, ha van rajta cikk
  if (route === 'blog' && !ctx?.blogLocales?.includes(locale)) return null
  return routePath(route, locale)
}

/**
 * @returns {{ hreflang: Record<string,string>, links: Record<string,string> }}
 *   hreflang - CSAK a valódi nyelvi párok (élő nyelvek) → <link rel="alternate">, sitemap
 *   links    - minden élő nyelvre egy cél a nyelvválasztóhoz; ha nincs pár, a szülő-oldal
 *              (márka → termékek, cikk → blog → főoldal)
 */
export function getAlternates(route, key, ctx) {
  const hreflang = {}
  const links = {}
  for (const locale of LIVE_LOCALES) {
    const path = resolvePath(route, locale, key, ctx)
    if (path) {
      hreflang[locale] = path
      links[locale] = path
      continue
    }
    let parent = PARENT[route]
    let fallback = null
    while (parent && !fallback) {
      fallback = resolvePath(parent, locale, null, ctx)
      parent = PARENT[parent]
    }
    links[locale] = fallback || routePath('home', locale)
  }
  return { hreflang, links }
}

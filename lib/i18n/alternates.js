// Egy oldal nyelvi párjai - az EGYETLEN forrás a nyelvválasztóhoz, a hreflang-hez és a sitemaphez,
// így ezek nem tudnak elcsúszni egymástól.
import { LIVE_LOCALES } from './config'
import { ROUTES, PARENT, routePath } from './routes'
import { getBrandById } from '../content'
import { getPosts, getPostByKey } from '../content/posts'

// key: dinamikus route-nál a nyelvközi azonosító (brand → márka id, post → translationKey)
function resolvePath(route, locale, key) {
  if (!ROUTES[route]?.[locale]) return null
  if (route === 'brand') {
    const b = getBrandById(locale, key)
    return b ? routePath(route, locale, b.slug) : null
  }
  if (route === 'post') {
    const p = getPostByKey(locale, key)
    return p ? routePath(route, locale, p.slug) : null
  }
  // a blog-index csak akkor létezik egy nyelven, ha van rajta cikk
  if (route === 'blog' && getPosts(locale).length === 0) return null
  return routePath(route, locale)
}

/**
 * @returns {{ hreflang: Record<string,string>, links: Record<string,string> }}
 *   hreflang - CSAK a valódi nyelvi párok (élő nyelvek) → <link rel="alternate">, sitemap
 *   links    - minden élő nyelvre egy cél a nyelvválasztóhoz; ha nincs pár, a szülő-oldal
 *              (márka → termékek, cikk → blog → főoldal)
 */
export function getAlternates(route, key) {
  const hreflang = {}
  const links = {}
  for (const locale of LIVE_LOCALES) {
    const path = resolvePath(route, locale, key)
    if (path) {
      hreflang[locale] = path
      links[locale] = path
      continue
    }
    let parent = PARENT[route]
    let fallback = null
    while (parent && !fallback) {
      fallback = resolvePath(parent, locale)
      parent = PARENT[parent]
    }
    links[locale] = fallback || routePath('home', locale)
  }
  return { hreflang, links }
}

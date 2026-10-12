// Blog-cikkek központi registry-je, nyelvenként.
// A cikk-törzs + meta a content/blog/<nyelv>/<slug>.mdx-ben él; itt statikusan importáljuk
// (lista-oldal, sitemap, generateStaticParams, cikk-render). Egy forrás, nincs dinamikus
// import / fs-olvasás → minden bundlerrel (Turbopack/webpack) megbízhatóan SSG-zik.
// A nyelvi változatokat a meta.translationKey köti össze (nyelvválasztó + hreflang).
// Új cikk: MDX a megfelelő nyelvi mappába + import + bejegyzés a POSTS[nyelv] tömbbe.

import OticonZealHu, { meta as oticonZealHu } from '../../content/blog/hu/oticon-zeal.mdx'
import CsaladtagHu, {
  meta as csaladtagHu,
} from '../../content/blog/hu/rosszul-hall-egy-csaladtagom-segit-a-hallokeszulek.mdx'

const POSTS = {
  hu: [
    { ...oticonZealHu, Post: OticonZealHu },
    { ...csaladtagHu, Post: CsaladtagHu },
  ],
  // EN/DE-n nincs blog (Lehel döntése, 2026-10-12): a cikkek csak magyarul jelennek meg, az angol/német
  // menüből a Blog kimarad, a /en/blog és /de/blog 404. Lefordított cikk: MDX a content/blog/<nyelv>/ alá + ide.
  en: [],
  de: [],
}

// Legújabb elöl (datePublished szerint csökkenő). Ha egy nyelvnek nincs cikke → [] (a Blog menüpont rejtve).
export function getPosts(locale) {
  return [...(POSTS[locale] || [])].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  )
}

// Cikk-oldalhoz: meta + a renderelhető MDX komponens (post.Post).
export function getPost(locale, slug) {
  return (POSTS[locale] || []).find((p) => p.slug === slug) || null
}

// Ugyanaz a cikk egy másik nyelven (translationKey alapján) - null, ha nincs lefordítva.
export function getPostByKey(locale, key) {
  return (POSTS[locale] || []).find((p) => p.translationKey === key) || null
}

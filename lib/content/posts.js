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
import OticonZealEn, { meta as oticonZealEn } from '../../content/blog/en/oticon-zeal.mdx'
import CsaladtagEn, {
  meta as csaladtagEn,
} from '../../content/blog/en/rosszul-hall-egy-csaladtagom-segit-a-hallokeszulek.mdx'
import OticonZealDe, { meta as oticonZealDe } from '../../content/blog/de/oticon-zeal.mdx'
import CsaladtagDe, {
  meta as csaladtagDe,
} from '../../content/blog/de/rosszul-hall-egy-csaladtagom-segit-a-hallokeszulek.mdx'

const POSTS = {
  hu: [
    { ...oticonZealHu, Post: OticonZealHu },
    { ...csaladtagHu, Post: CsaladtagHu },
  ],
  en: [
    { ...oticonZealEn, Post: OticonZealEn },
    { ...csaladtagEn, Post: CsaladtagEn },
  ],
  de: [
    { ...oticonZealDe, Post: OticonZealDe },
    { ...csaladtagDe, Post: CsaladtagDe },
  ],
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

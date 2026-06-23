// Blog-cikkek központi registry-je.
// A cikk-törzs + meta a content/blog/<slug>.mdx-ben él; itt statikusan importáljuk
// (lista-oldal, sitemap, generateStaticParams, cikk-render). Egy forrás, nincs dinamikus
// import / fs-olvasás → minden bundlerrel (Turbopack/webpack) megbízhatóan SSG-zik.

import OticonZeal, { meta as oticonZeal } from '../../content/blog/oticon-zeal.mdx'
import Csaladtag, {
  meta as csaladtag,
} from '../../content/blog/rosszul-hall-egy-csaladtagom-segit-a-hallokeszulek.mdx'

const POSTS = [
  { ...oticonZeal, Post: OticonZeal },
  { ...csaladtag, Post: Csaladtag },
]

// Legújabb elöl (datePublished szerint csökkenő). Csak meta-mezők kellenek a listához.
export function getAllPosts() {
  return [...POSTS].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  )
}

// Cikk-oldalhoz: meta + a renderelhető MDX komponens (post.Post).
export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null
}

// Magyar dátum-formátum a UI-hoz (pl. "2026. április 22.")
export function formatHuDate(iso) {
  return new Date(iso).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

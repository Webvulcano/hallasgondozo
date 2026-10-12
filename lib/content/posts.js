// Blog-cikkek az Ügyfél Adminból (CMS, projektek/analytics-site → Blog menü). Az ügyfél ott ír, szerkeszt,
// rejt el és töröl; a weboldal a közzétett cikkeket olvassa (cache-tag: cms:<slug>, mentés után friss).
// A post-alak ugyanaz, mint a korábbi MDX-meta volt, így a nézetek nem változtak lényegesen.
// A nyelvi változatokat a translationKey (= CMS group_id) köti össze; a párok a cikkben jönnek (translations).
// CSAK szerver-komponensből.
import { getPosts as cmsPosts, getPost as cmsPost, getPostPreview as cmsPreview, publicUrl } from '../cms'

const day = (iso) => (iso ? String(iso).slice(0, 10) : null)

function toPost(p) {
  return {
    id: p.id,
    slug: p.slug,
    locale: p.locale,
    translationKey: p.group,
    title: p.title,
    metaTitle: p.metaTitle || null,
    description: p.description || p.excerpt || null,
    excerpt: p.excerpt || '',
    author: p.author || '',
    datePublished: day(p.publishedAt),
    dateModified: day(p.updatedAt),
    image: p.cover ? publicUrl(p.cover.path) : null,
    imageWidth: p.cover?.w ?? null,
    imageHeight: p.cover?.h ?? null,
    imageAlt: p.cover?.alt ?? '',
    ogImage: p.og ? publicUrl(p.og) : null,
    status: p.status,
    // csak a teljes cikknél (getPost / előnézet):
    body: p.body ?? null,
    faq: p.faq ?? [],
    translations: p.translations ?? [],
  }
}

// Közzétett cikkek egy nyelven, legújabb elöl (meta, törzs nélkül). Ha nincs → [] (a Blog menüpont rejtve).
export async function getPosts(locale) {
  return (await cmsPosts(locale)).map(toPost)
}

// Egy közzétett cikk (törzs, GYIK, nyelvi párok) - null, ha nincs ilyen.
export async function getPost(locale, slug) {
  const p = await cmsPost(locale, slug)
  return p ? toPost(p) : null
}

// Előnézet (piszkozat is) a cikk titkos tokenjével - csak draft mode-ban (app/api/preview).
export async function getPostPreview(id, token) {
  const p = await cmsPreview(id, token)
  return p ? toPost(p) : null
}

// Nyelvi párok útvonal-kulcsai a hreflang-hez: { hu: 'slug', en: 'slug' } (a cikk saját nyelvével együtt).
export function postSlugsByLocale(post) {
  return Object.fromEntries([[post.locale, post.slug], ...post.translations.map((t) => [t.locale, t.slug])])
}

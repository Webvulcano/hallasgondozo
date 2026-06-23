import { SITE } from '../lib/constants'
import { getAllPosts } from '../lib/content/posts'

export default function sitemap() {
  const lastModified = new Date()
  const posts = getAllPosts()

  return [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/keszulekek`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified || p.datePublished),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
    { url: `${SITE.url}/adatvedelem`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}

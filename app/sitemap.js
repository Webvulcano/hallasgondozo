import { SITE } from '../lib/constants'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/adatvedelem`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}

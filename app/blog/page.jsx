import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import PostCard from '../../components/blog/PostCard'
import { getAllPosts } from '../../lib/content/posts'
import { SITE, COMPANY } from '../../lib/constants'

export const metadata = {
  title: 'Blog — hallás, hallókészülék, hallásgondozás | ÉRTED Győr',
  description:
    'Hasznos cikkek a hallásról, hallókészülékekről és a hallásgondozásról az ÉRTED Hallásgondozó győri szakembereitől. Tippek, válaszok, döntéstámogatás.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: `${SITE.url}/blog`,
    title: 'Blog — hallás és hallókészülék | ÉRTED Hallásgondozó Győr',
    description:
      'Hasznos cikkek a hallásról, hallókészülékekről és a hallásgondozásról Győrből.',
  },
  robots: { index: true, follow: true },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  // Blog (CollectionPage) + BreadcrumbList JSON-LD
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${COMPANY.brand} ${COMPANY.brandSub} — Blog`,
    url: `${SITE.url}/blog`,
    inLanguage: 'hu-HU',
    publisher: { '@type': 'MedicalBusiness', name: COMPANY.fullName, url: SITE.url },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified || p.datePublished,
    })),
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Nav />
      <span id="top" />
      <main>
        <section className="block kpage-hero">
          <div className="wrap">
            <Reveal>
              <h1>Blog</h1>
              <p className="lead">
                Hasznos cikkek a hallásról, a hallókészülékekről és a hallásgondozásról —
                győri szakembereinktől, közérthetően.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="block bloglist" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="bloglist-grid">
              {posts.map((p) => (
                <Reveal key={p.slug}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

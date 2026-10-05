// Blog listaoldal (/blog, /en/blog, /de/blog). Ha egy nyelven nincs cikk → 404 (és a menüből is kimarad).
import { notFound } from 'next/navigation'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import PostCard from '../blog/PostCard'
import { isLive, LOCALE_META } from '../../lib/i18n/config'
import { getDictionary, fmt } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getPosts } from '../../lib/content/posts'
import { SITE, COMPANY } from '../../lib/constants'
import { metaAlternates, absUrl, breadcrumbJsonLd } from '../../lib/seo'

export function blogIndexMetadata(locale) {
  const t = getDictionary(locale).meta
  const path = routePath('blog', locale)
  return {
    // absolute: a layout template ne fűzze hozzá még egyszer a márkanevet
    title: { absolute: t.blogTitle },
    description: t.blogDescription,
    alternates: metaAlternates(path, getAlternates('blog').hreflang),
    openGraph: {
      type: 'website',
      url: absUrl(path),
      title: t.blogOgTitle,
      description: t.blogOgDescription,
    },
    robots: { index: true, follow: true },
  }
}

export default function BlogIndexView({ locale }) {
  if (!isLive(locale)) notFound()
  const posts = getPosts(locale)
  if (!posts.length) notFound()
  const t = getDictionary(locale)
  const path = routePath('blog', locale)
  const alternates = getAlternates('blog')

  // Blog (CollectionPage) + BreadcrumbList JSON-LD
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: fmt(t.schema.blogName, { brand: `${COMPANY.brand} ${COMPANY.brandSub}` }),
    url: absUrl(path),
    inLanguage: LOCALE_META[locale].intl,
    publisher: { '@type': 'MedicalBusiness', name: COMPANY.fullName, url: SITE.url },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: absUrl(routePath('post', locale, p.slug)),
      datePublished: p.datePublished,
      dateModified: p.dateModified || p.datePublished,
    })),
  }
  const breadcrumbLd = breadcrumbJsonLd([
    [t.schema.crumbHome, absUrl(routePath('home', locale))],
    [t.schema.crumbBlog, absUrl(path)],
  ])

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
      <Nav locale={locale} current="blog" alternates={alternates} />
      <span id="top" />
      <main>
        <section className="block kpage-hero">
          <div className="wrap">
            <Reveal>
              <h1>{t.blog.title}</h1>
              <p className="lead">{t.blog.lead}</p>
            </Reveal>
          </div>
        </section>

        <section className="block bloglist" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="bloglist-grid">
              {posts.map((p) => (
                <Reveal key={p.slug}>
                  <PostCard post={p} locale={locale} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} alternates={alternates} />
    </>
  )
}

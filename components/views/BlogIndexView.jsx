// Blog listaoldal (/blog, /en/blog, /de/blog). Ha egy nyelven nincs cikk → 404 (és a menüből is kimarad).
import { notFound } from 'next/navigation'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import PostCard from '../blog/PostCard'
import { isLive, LOCALE_META } from '../../lib/i18n/config'
import { fmt } from '../../lib/i18n'
import { loadSite } from '../../lib/site'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getPosts } from '../../lib/content/posts'
import { SITE, COMPANY } from '../../lib/constants'
import { metaAlternates, absUrl, breadcrumbJsonLd, socialMeta } from '../../lib/seo'
import JsonLd from '../cms/JsonLd'

export async function blogIndexMetadata(locale) {
  const { t: dict, site } = await loadSite(locale)
  const t = dict.meta
  const path = routePath('blog', locale)
  const { hreflang } = getAlternates('blog', null, { blogLocales: site.blogLocales })
  return {
    // absolute: a layout template ne fűzze hozzá még egyszer a márkanevet
    title: { absolute: t.blogTitle },
    description: t.blogDescription,
    alternates: metaAlternates(path, hreflang),
    ...socialMeta(locale, { path, title: t.blogOgTitle, description: t.blogOgDescription, hreflang }),
    robots: { index: true, follow: true },
  }
}

export default async function BlogIndexView({ locale }) {
  if (!isLive(locale)) notFound()
  const posts = await getPosts(locale)
  if (!posts.length) notFound()
  const { t, site, a } = await loadSite(locale)
  const path = routePath('blog', locale)
  const alternates = getAlternates('blog', null, { blogLocales: site.blogLocales })

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
      <JsonLd data={blogLd} />
      <JsonLd data={breadcrumbLd} />
      <Nav locale={locale} current="blog" alternates={alternates} />
      <span id="top" />
      <main>
        <section className="block kpage-hero">
          <div className="wrap">
            <Reveal>
              <h1 {...a.dict.blog.title}>{t.blog.title}</h1>
              <p className="lead" {...a.dict.blog.lead}>{t.blog.lead}</p>
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
      <Footer locale={locale} />
    </>
  )
}

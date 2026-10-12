// Blogcikk (/blog/[slug], /en/blog/[slug], /de/blog/[slug]) - a cikk az Ügyfél Adminból (CMS) jön.
// Előnézet: az admin „Előnézet" linkje (app/api/preview) draft mode-ot kapcsol, és sütiben adja a cikk id-ját
// + titkos tokenjét → itt a piszkozat jelenik meg, „Előnézet" sávval; a látogatók ezt nem látják.
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cookies, draftMode } from 'next/headers'
import RichText from '../cms/RichText'
import Nav from '../Nav'
import Footer from '../Footer'
import Button from '../Button'
import SkeletonImage from '../SkeletonImage'
import { isLive, LOCALE_META } from '../../lib/i18n/config'
import { formatDate } from '../../lib/i18n'
import { loadSite } from '../../lib/site'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getPosts, getPost, getPostPreview, postSlugsByLocale } from '../../lib/content/posts'
import { SITE, COMPANY, SOCIAL } from '../../lib/constants'
import { metaAlternates, ogLocale, absUrl, breadcrumbJsonLd, faqJsonLd } from '../../lib/seo'

export async function postStaticParams(locale) {
  if (!isLive(locale)) return []
  return (await getPosts(locale)).map((p) => ({ slug: p.slug }))
}

// Draft mode-ban (admin előnézet) a sütiben lévő cikk, ha ehhez az útvonalhoz tartozik; különben a közzétett.
async function loadPost(locale, slug) {
  if ((await draftMode()).isEnabled) {
    try {
      const { id, token } = JSON.parse((await cookies()).get('cms_preview')?.value ?? '{}')
      const draft = id && token ? await getPostPreview(id, token) : null
      if (draft && draft.locale === locale && draft.slug === slug) return { post: draft, preview: true }
    } catch {
      // hibás süti → a közzétett cikk
    }
  }
  return { post: await getPost(locale, slug), preview: false }
}

// Abszolút kép-URL (a CMS-képek már abszolútak, a régiek /pic/... útvonalak)
const abs = (src) => (!src ? null : /^https?:\/\//.test(src) ? src : `${SITE.url}${src}`)

export async function postMetadata(locale, { params }) {
  const { slug } = await params
  const { post, preview } = await loadPost(locale, slug)
  if (!post) return {}
  const { site } = await loadSite(locale)
  const path = routePath('post', locale, post.slug)
  const { hreflang } = getAlternates('post', null, { blogLocales: site.blogLocales, postSlugs: postSlugsByLocale(post) })
  const ogImage = post.ogImage
    ? { url: post.ogImage, width: 1200, height: 630, alt: post.imageAlt }
    : post.image
      ? { url: abs(post.image), alt: post.imageAlt }
      : null
  return {
    // metaTitle: ≤60 karakteres <title> saját rövid utótaggal (a template nélkül)
    title: post.metaTitle ? { absolute: post.metaTitle } : post.title,
    description: post.description,
    alternates: metaAlternates(path, hreflang),
    openGraph: {
      type: 'article',
      url: absUrl(path),
      ...(Object.keys(hreflang).length > 1 ? ogLocale(locale, hreflang) : {}),
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: [post.author],
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(ogImage ? { images: [ogImage.url] } : {}),
    },
    // az előnézet (piszkozat) sosem indexelhető
    robots: preview ? { index: false, follow: false } : { index: true, follow: true },
  }
}

export default async function PostView({ locale, params }) {
  if (!isLive(locale)) notFound()
  const { slug } = await params
  const { post, preview } = await loadPost(locale, slug)
  if (!post) notFound()

  const { t, site, a } = await loadSite(locale)
  const url = absUrl(routePath('post', locale, post.slug))
  const blogUrl = absUrl(routePath('blog', locale))
  const alternates = getAlternates('post', null, { blogLocales: site.blogLocales, postSlugs: postSlugsByLocale(post) })

  // Article (BlogPosting) JSON-LD — E-E-A-T: author + publisher (MedicalBusiness)
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    ...(post.ogImage || post.image ? { image: abs(post.ogImage ?? post.image) } : {}),
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: LOCALE_META[locale].intl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: post.author, url: SITE.url },
    publisher: {
      '@type': 'MedicalBusiness',
      name: COMPANY.fullName,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/pic/logo/logo.png` },
      telephone: site.phone.display,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.street,
        addressLocality: COMPANY.city,
        postalCode: COMPANY.postalCode,
        addressCountry: 'HU',
      },
      sameAs: [SOCIAL.facebook, SOCIAL.instagram],
    },
  }

  // FAQPage JSON-LD — AEO / featured snippet
  const faqLd = post.faq?.length ? faqJsonLd(post.faq) : null

  const breadcrumbLd = breadcrumbJsonLd([
    [t.schema.crumbHome, absUrl(routePath('home', locale))],
    [t.schema.crumbBlog, blogUrl],
    [post.title, url],
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {preview && (
        <div className="preview-bar" role="status">
          Előnézet - ez a változat nem nyilvános{post.status !== 'published' ? ' (a cikk még nincs közzétéve)' : ''}.{' '}
          <a href={`/api/preview/exit?to=${encodeURIComponent(routePath('blog', locale))}`}>Kilépés az előnézetből</a>
        </div>
      )}
      <Nav locale={locale} current="post" alternates={alternates} />
      <span id="top" />
      <main className="article">
        <div className="wrap article-wrap">
          <nav className="article-crumb" aria-label={t.blog.crumbAria}>
            <Link href={routePath('home', locale)}>{t.schema.crumbHome}</Link>
            <span aria-hidden="true"> / </span>
            <Link href={routePath('blog', locale)}>{t.schema.crumbBlog}</Link>
          </nav>

          <header className="article-head">
            <h1>{post.title}</h1>
            <p className="article-meta">
              {post.datePublished && <time dateTime={post.datePublished}>{formatDate(post.datePublished, locale)}</time>}
              {post.datePublished && post.author && <span aria-hidden="true"> · </span>}
              {post.author && <span>{post.author}</span>}
            </p>
          </header>

          {post.image && (
            <div className="article-media">
              <SkeletonImage src={post.image} alt={post.imageAlt} />
            </div>
          )}

          <article className="prose">
            <RichText value={post.body} />
          </article>

          {post.faq?.length > 0 && (
            <section className="article-faq" aria-labelledby="gyik">
              <h2 id="gyik">{t.blog.faqTitle}</h2>
              <dl>
                {post.faq.map((f) => (
                  <div className="article-faq-item" key={f.q}>
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="article-cta">
            <h2 {...a.dict.blog.ctaTitle}>{t.blog.ctaTitle}</h2>
            <p {...a.dict.blog.ctaLead}>{t.blog.ctaLead}</p>
            <div className="article-cta-btns">
              <Button variant="gold" href={site.booking.adult}>
                <span {...a.dict.cta.bookHearingTest}>{t.cta.bookHearingTest}</span>
              </Button>
              <Button variant="ghost-light" href={site.phone.href}>
                <span {...a.const.phone}>{site.phone.display}</span>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer locale={locale} alternates={alternates} />
    </>
  )
}

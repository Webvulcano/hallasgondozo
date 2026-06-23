import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import { getAllPosts, getPost, formatHuDate } from '../../../lib/content/posts'
import { SITE, COMPANY, PHONE, EMAIL, SOCIAL, BOOKING_URL } from '../../../lib/constants'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${SITE.url}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    robots: { index: true, follow: true },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { Post } = post
  const url = `${SITE.url}/blog/${post.slug}`

  // Article (BlogPosting) JSON-LD — E-E-A-T: author + publisher (MedicalBusiness)
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE.url}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'hu-HU',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: post.author, url: SITE.url },
    publisher: {
      '@type': 'MedicalBusiness',
      name: COMPANY.fullName,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/pic/logo.png` },
      telephone: PHONE.display,
      email: EMAIL,
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
  const faqLd = post.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

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

      <Nav />
      <span id="top" />
      <main className="article">
        <div className="wrap article-wrap">
          <nav className="article-crumb" aria-label="Útvonal">
            <Link href="/">Főoldal</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog">Blog</Link>
          </nav>

          <header className="article-head">
            <h1>{post.title}</h1>
            <p className="article-meta">
              <time dateTime={post.datePublished}>{formatHuDate(post.datePublished)}</time>
              <span aria-hidden="true"> · </span>
              <span>{post.author}</span>
            </p>
          </header>

          <div className="article-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.imageAlt} />
          </div>

          <article className="prose">
            <Post />
          </article>

          {post.faq?.length > 0 && (
            <section className="article-faq" aria-labelledby="gyik">
              <h2 id="gyik">Gyakori kérdések</h2>
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
            <h2>Tegye meg az első lépést a tisztább hallásért</h2>
            <p>
              Ingyenes, kötelezettségmentes hallásvizsgálat Győrben — körülbelül 30 perc,
              beutaló nélkül.
            </p>
            <div className="article-cta-btns">
              <Button variant="gold" href={BOOKING_URL}>
                Ingyenes hallásvizsgálatot foglalok
              </Button>
              <Button variant="ghost-light" href={PHONE.href}>
                {PHONE.display}
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

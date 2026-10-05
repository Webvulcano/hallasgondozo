import Link from 'next/link'
import { getDictionary, formatDate } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import SkeletonImage from '../SkeletonImage'

// Blog lista-kártya: cím, kivonat, dátum → cikk-oldal.
export default function PostCard({ post, locale }) {
  const href = routePath('post', locale, post.slug)
  return (
    <article className="postcard">
      <div className="postcard-media">
        <SkeletonImage src={post.image} alt={post.imageAlt} loading="lazy" />
      </div>
      <div className="postcard-body">
        <time className="postcard-date" dateTime={post.datePublished}>
          {formatDate(post.datePublished, locale)}
        </time>
        <h2 className="postcard-title">
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className="postcard-excerpt">{post.excerpt}</p>
        <Link href={href} className="postcard-more">
          {getDictionary(locale).blog.readMore}
        </Link>
      </div>
    </article>
  )
}

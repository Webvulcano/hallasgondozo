import Link from 'next/link'
import { formatHuDate } from '../../lib/content/posts'

// Blog lista-kártya: cím, kivonat, dátum → cikk-oldal.
export default function PostCard({ post }) {
  const href = `/blog/${post.slug}`
  return (
    <article className="postcard">
      <div className="postcard-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.imageAlt} loading="lazy" />
      </div>
      <div className="postcard-body">
        <time className="postcard-date" dateTime={post.datePublished}>
          {formatHuDate(post.datePublished)}
        </time>
        <h2 className="postcard-title">
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className="postcard-excerpt">{post.excerpt}</p>
        <Link href={href} className="postcard-more">
          Tovább olvasom →
        </Link>
      </div>
    </article>
  )
}

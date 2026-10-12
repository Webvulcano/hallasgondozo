// Magyar route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import PostView, { postStaticParams, postMetadata } from '@/components/views/PostView'

const locale = 'hu'
// true: a CMS-mentés utáni azonnali lejáratáskor (revalidateTag expire:0) a Next újragenerálja az oldalt;
// false-szal ilyenkor 404 lenne (NoFallbackError). Ismeretlen slug → a view notFound()-ja (404).
export const dynamicParams = true
export const generateStaticParams = () => postStaticParams(locale)
export const generateMetadata = (props) => postMetadata(locale, props)

export default function Page(props) {
  return <PostView locale={locale} {...props} />
}

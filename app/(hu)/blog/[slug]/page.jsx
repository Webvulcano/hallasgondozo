// Magyar route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import PostView, { postStaticParams, postMetadata } from '@/components/views/PostView'

const locale = 'hu'
export const dynamicParams = false
export const generateStaticParams = () => postStaticParams(locale)
export const generateMetadata = (props) => postMetadata(locale, props)

export default function Page(props) {
  return <PostView locale={locale} {...props} />
}

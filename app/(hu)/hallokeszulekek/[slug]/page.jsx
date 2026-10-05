// Magyar route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import BrandView, { brandStaticParams, brandMetadata } from '@/components/views/BrandView'

const locale = 'hu'
export const dynamicParams = false
export const generateStaticParams = () => brandStaticParams(locale)
export const generateMetadata = (props) => brandMetadata(locale, props)

export default function Page(props) {
  return <BrandView locale={locale} {...props} />
}

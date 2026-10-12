// Német route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import BrandView, { brandStaticParams, brandMetadata } from '@/components/views/BrandView'

const locale = 'de'
// true: a CMS-mentés utáni azonnali lejáratáskor (revalidateTag expire:0) a Next újragenerálja az oldalt;
// false-szal ilyenkor 404 lenne (NoFallbackError). Ismeretlen slug → a view notFound()-ja (404).
export const dynamicParams = true
export const generateStaticParams = () => brandStaticParams(locale)
export const generateMetadata = (props) => brandMetadata(locale, props)

export default function Page(props) {
  return <BrandView locale={locale} {...props} />
}

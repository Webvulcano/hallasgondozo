// Magyar route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import BlogIndexView, { blogIndexMetadata } from '@/components/views/BlogIndexView'

const locale = 'hu'
export const generateMetadata = () => blogIndexMetadata(locale)

export default function Page() {
  return <BlogIndexView locale={locale} />
}

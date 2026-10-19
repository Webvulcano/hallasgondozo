// Angol route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import ImprintView, { imprintMetadata } from '@/components/views/ImprintView'

const locale = 'en'
export const metadata = imprintMetadata(locale)

export default function Page() {
  return <ImprintView locale={locale} />
}

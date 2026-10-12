// Angol route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import PrivacyView, { privacyMetadata } from '@/components/views/PrivacyView'

const locale = 'en'
export const metadata = privacyMetadata(locale)

export default function Page() {
  return <PrivacyView locale={locale} />
}

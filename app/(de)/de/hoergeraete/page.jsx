// Német route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import DevicesView, { devicesMetadata } from '@/components/views/DevicesView'

const locale = 'de'
export const metadata = devicesMetadata(locale)

export default function Page() {
  return <DevicesView locale={locale} />
}

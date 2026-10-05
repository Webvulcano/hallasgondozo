// Német route-wrapper - a törzs a közös view-ban (components/views), a nyelv itt rögzítve.
import HomeView from '@/components/views/HomeView'

// Főoldal (Német). Metadata: a nyelvi root layoutból (lib/seo.js → rootMetadata).
export default function Page() {
  return <HomeView locale="de" />
}

// Német root layout. Nyelvenként külön root layout → statikusan helyes <html lang>, proxy nélkül.
// A közös váz (fontok, JSON-LD, scroll-reset): components/views/RootDocument.jsx
import '../globals.css'
import RootDocument from '@/components/views/RootDocument'
import { rootMetadata } from '@/lib/seo'

const locale = 'de'
export const generateMetadata = () => rootMetadata(locale)

export default function Layout({ children }) {
  return <RootDocument locale={locale}>{children}</RootDocument>
}

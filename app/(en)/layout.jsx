// Angol root layout. Nyelvenként külön root layout → statikusan helyes <html lang>, proxy nélkül.
// A közös váz (fontok, JSON-LD, scroll-reset): components/views/RootDocument.jsx
import '../globals.css'
import RootDocument from '@/components/views/RootDocument'
import { rootMetadata, rootViewport } from '@/lib/seo'

const locale = 'en'
export const generateMetadata = () => rootMetadata(locale)
export const viewport = rootViewport

export default function Layout({ children }) {
  return <RootDocument locale={locale}>{children}</RootDocument>
}

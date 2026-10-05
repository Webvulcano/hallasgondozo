import NotFoundView, { notFoundMetadata } from '@/components/views/NotFoundView'

// Angol 404
export const metadata = notFoundMetadata('en')

export default function NotFound() {
  return <NotFoundView locale="en" />
}

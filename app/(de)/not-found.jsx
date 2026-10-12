import NotFoundView, { notFoundMetadata } from '@/components/views/NotFoundView'

// Német 404
export const metadata = notFoundMetadata('de')

export default function NotFound() {
  return <NotFoundView locale="de" />
}

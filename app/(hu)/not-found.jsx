import NotFoundView, { notFoundMetadata } from '@/components/views/NotFoundView'

// Magyar 404
export const metadata = notFoundMetadata('hu')

export default function NotFound() {
  return <NotFoundView locale="hu" />
}

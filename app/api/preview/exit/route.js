// Kilépés a blog-előnézetből: draft mode ki, süti törlése, vissza (csak oldalon belüli útvonalra).
import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const to = new URL(request.url).searchParams.get('to') ?? '/'
  ;(await draftMode()).disable()
  ;(await cookies()).delete('cms_preview')
  redirect(to.startsWith('/') && !to.startsWith('//') ? to : '/')
}

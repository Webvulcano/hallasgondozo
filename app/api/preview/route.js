// Blog-előnézet az Ügyfél Adminból: /api/preview?post=<id>&token=<preview_token>
// A token a cikkhez tartozó titkos azonosító (csak az admin látja). Érvényes token → draft mode + süti
// (cikk id + token) → átirányítás a cikk útvonalára, ahol a PostView a piszkozatot mutatja.
import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPostPreview } from '@/lib/content/posts'
import { routePath } from '@/lib/i18n/routes'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

export async function GET(request) {
  const params = new URL(request.url).searchParams
  const id = params.get('post') ?? ''
  const token = params.get('token') ?? ''
  if (!UUID.test(id) || !UUID.test(token)) {
    return new Response('Érvénytelen előnézeti link.', { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8' } })
  }

  const post = await getPostPreview(id, token)
  const path = post && routePath('post', post.locale, post.slug)
  if (!path) {
    return new Response('Az előnézet nem elérhető (a cikk törölve lett, vagy a link érvénytelen).', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }

  ;(await draftMode()).enable()
  ;(await cookies()).set('cms_preview', JSON.stringify({ id, token }), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60,
  })
  redirect(path)
}

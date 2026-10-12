// Kilépés a blog-előnézetből: draft mode ki, sütik törlése, vissza (csak oldalon belüli útvonalra).
import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { previewCookieOptions } from '../cookie-options'

export async function GET(request) {
  const to = new URL(request.url).searchParams.get('to') ?? '/'
  ;(await draftMode()).disable()
  const jar = await cookies()
  const opts = previewCookieOptions(request)
  // helyi http-n a Secure-os törlő sütit is eldobná a böngésző → ugyanazokkal az opciókkal töröljük
  if (!opts.secure) jar.set('__prerender_bypass', '', { ...opts, maxAge: 0 })
  jar.set('cms_preview', '', { ...opts, maxAge: 0 })
  redirect(to.startsWith('/') && !to.startsWith('//') ? to : '/')
}

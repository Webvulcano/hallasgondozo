// Előnézeti sütik: https-en Secure; helyi http-n (localhost teszt) Secure nélkül, mert a Safari
// http-n eldobja a Secure sütiket. SameSite=Lax: az admin új lapon nyitja meg (felső szintű navigáció).
export function previewCookieOptions(request) {
  const secure = new URL(request.url).protocol === 'https:'
  return { httpOnly: true, sameSite: 'lax', secure, path: '/' }
}

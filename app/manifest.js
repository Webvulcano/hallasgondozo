// Web app manifest (/manifest.webmanifest) - „Hozzáadás a kezdőképernyőhöz" név + ikon, Android címsor-szín.
// A favicon / apple-icon az app/ mappában (Next.js fájlkonvenció); a 512-es ikon tömör fehér háttérrel.
import { COMPANY } from '../lib/constants'

export default function manifest() {
  return {
    name: COMPANY.fullName,
    short_name: `${COMPANY.brand} ${COMPANY.brandSub}`,
    description: 'Hallókészülék és hallásvizsgálat Győrben, saját fül-orr-gégész szakorvossal.',
    start_url: '/',
    display: 'browser',
    lang: 'hu',
    background_color: '#FAF8F5',
    theme_color: '#FAF8F5',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/pic/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}

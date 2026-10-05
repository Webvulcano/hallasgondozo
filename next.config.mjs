// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx oldal-/komponens-kiterjesztés is renderelhető
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  allowedDevOrigins: ['192.168.0.150', '192.168.0.151'],
  // /admin → átirányít a központi analytics-dashboard erted-tenantjára.
  // Redirect (nem proxy) → a dashboard a saját domainjén nyílik meg, így a
  // Google login tisztán működik. Csak ha DASHBOARD_URL be van állítva
  // (pl. https://<dashboard>.vercel.app) → deploy előtt no-op, nem törik.
  async redirects() {
    // 301 - a régi (Apache) hallasgondozo.hu URL-jei + a korábbi /keszulekek útvonal.
    // A Google által indexelt régi oldalak helyezése így átszáll az új oldalakra.
    const legacy = [
      { source: '/keszulekek', destination: '/hallokeszulekek', permanent: true },
      // Phonak: termékoldalból márkaoldal lett (2026-10-02) - a régi slug-ok egy lépésben célba érnek
      { source: '/hallokeszulekek/phonak-audeo-sphere', destination: '/hallokeszulekek/phonak-hallokeszulekek', permanent: true },
      { source: '/keszulekek/phonak-audeo-sphere', destination: '/hallokeszulekek/phonak-hallokeszulekek', permanent: true },
      { source: '/keszulekek/:slug', destination: '/hallokeszulekek/:slug', permanent: true },
      { source: '/termekek', destination: '/hallokeszulekek', permanent: true },
      { source: '/szolgaltatasok', destination: '/', permanent: true },
      { source: '/rolunk', destination: '/', permanent: true },
      { source: '/kapcsolat', destination: '/', permanent: true },
      // /de: IDEIGLENES (307) - a német verzió később ide jön; a permanent (308) redirectet a
      // böngészők örökre cache-elnék, és a német indulás után is a főoldalra dobnák a látogatót.
      { source: '/de', destination: '/', permanent: false },
      {
        source: '/blog/2023-12-07/rosszul-hall-egy-csaladtagom-segit-e-a-hallokeszulek',
        destination: '/blog/rosszul-hall-egy-csaladtagom-segit-a-hallokeszulek',
        permanent: true,
      },
      { source: '/blog/2026-04-22/oticon-zeal', destination: '/blog/oticon-zeal', permanent: true },
    ]
    const base = process.env.DASHBOARD_URL
    if (!base) return legacy
    return [
      ...legacy,
      { source: '/admin', destination: `${base}/hallasgondozo`, permanent: false },
      { source: '/admin/:path*', destination: `${base}/hallasgondozo/:path*`, permanent: false },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    // Turbopack: a plugineket STRING-névként kell megadni (nem importált fn),
    // hogy szerializálható legyen. H2/H3 id-k → anchor + AEO ugrópont.
    rehypePlugins: [['rehype-slug']],
  },
})

export default withMDX(nextConfig)

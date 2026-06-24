// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx oldal-/komponens-kiterjesztés is renderelhető
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  allowedDevOrigins: ['192.168.0.151'],
  // /admin → átirányít a központi analytics-dashboard erted-tenantjára.
  // Redirect (nem proxy) → a dashboard a saját domainjén nyílik meg, így a
  // Google login tisztán működik. Csak ha DASHBOARD_URL be van állítva
  // (pl. https://<dashboard>.vercel.app) → deploy előtt no-op, nem törik.
  async redirects() {
    const base = process.env.DASHBOARD_URL
    if (!base) return []
    return [
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

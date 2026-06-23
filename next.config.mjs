// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx oldal-/komponens-kiterjesztés is renderelhető
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  allowedDevOrigins: ['192.168.0.151'],
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

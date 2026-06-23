// App Router + @next/mdx kötelező belépési pont.
// A cikk-MDX elemeit a site dizájnjára húzza (.prose a blog.css-ben).
import Link from 'next/link'

export function useMDXComponents(components) {
  return {
    a: ({ href = '', children, ...props }) => {
      const external = /^https?:\/\//i.test(href)
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        )
      }
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    },
    ...components,
  }
}

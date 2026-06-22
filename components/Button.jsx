// Központi gomb komponens - minden CTA, link és form gomb ezt használja

const VARIANTS = {
  gold: 'btn-gold',
  teal: 'btn-teal',
  outline: 'btn-outline',
  white: 'btn-white',
  'ghost-light': 'btn-ghost-light',
}

function isExternal(href) {
  if (!href) return false
  return /^https?:\/\//i.test(href)
}

export default function Button({
  variant = 'gold',
  href,
  type = 'button',
  icon,
  children,
  fullWidth = false,
  className = '',
  external,
  ...rest
}) {
  const cls = `btn ${VARIANTS[variant] || VARIANTS.gold} ${className}`.trim()
  const style = fullWidth ? { width: '100%', ...rest.style } : rest.style

  const inner = (
    <>
      {icon && <span className="ic">{icon}</span>}
      {children}
    </>
  )

  // Link (a)
  if (href) {
    const ext = external ?? isExternal(href)
    return (
      <a
        href={href}
        className={cls}
        style={style}
        {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }

  // Button
  return (
    <button type={type} className={cls} style={style} {...rest}>
      {inner}
    </button>
  )
}

// Közös SVG wrapper - minden ikon ezt használja

export default function IconBase({
  size = 24,
  stroke = 'currentColor',
  strokeWidth = 2,
  className,
  children,
  fill = 'none',
  ...rest
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

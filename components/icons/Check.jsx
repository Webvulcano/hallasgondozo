import IconBase from './_base'

export default function Check({ strokeWidth = 3, ...props }) {
  return (
    <IconBase strokeWidth={strokeWidth} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  )
}

import IconBase from './_base'

// Check inside circle - guarantee / trial
export default function Shield(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  )
}

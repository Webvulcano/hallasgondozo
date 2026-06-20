import IconBase from './_base'

// Elemes / tölthető hallókészülék
export default function Battery(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="8" width="16" height="9" rx="2" />
      <line x1="21" y1="11" x2="21" y2="14" />
      <line x1="6" y1="12.5" x2="11" y2="12.5" />
    </IconBase>
  )
}

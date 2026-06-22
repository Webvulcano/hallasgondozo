// Dinamikus ikon lookup - adat-vezérelt komponensek számára
// Használat: <Icon name="Ear" size={32} />

import Check from './Check'
import Phone from './Phone'
import Calendar from './Calendar'
import Email from './Email'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Ear from './Ear'
import Doctor from './Doctor'
import EarAid from './EarAid'
import Shield from './Shield'
import Home from './Home'
import Child from './Child'
import Battery from './Battery'
import Droplet from './Droplet'
import Accessory from './Accessory'

const REGISTRY = {
  Check, Phone, Calendar, Email, Facebook, Instagram,
  Ear, Doctor, EarAid, Shield, Home, Child,
  Battery, Droplet, Accessory,
}

export default function Icon({ name, ...props }) {
  const Cmp = REGISTRY[name]
  if (!Cmp) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`<Icon> unknown name: "${name}"`)
    }
    return null
  }
  return <Cmp {...props} />
}

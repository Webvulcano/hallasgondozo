// Nyitó logó-animáció KIKAPCSOLVA (2026-10-05): a fehér takaróréteg miatt az LCP 4,2 mp volt
// (PageSpeed mobil). Visszakapcsoláshoz: import + <Splash /> vissza, és hero.css .hero-logo-corner opacity:0.
// import Splash from '../components/Splash'
import Nav from '../components/Nav'
import HeroVideo from '../components/HeroVideo'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Offer from '../components/Offer'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Journey from '../components/Journey'
import Booking from '../components/Booking'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import PromoPopup from '../components/PromoPopup'

export default function Home() {
  return (
    <>
      {/* <Splash /> — kikapcsolva, ld. fent */}
      <Nav overlay />
      <span id="top" />
      <HeroVideo />
      <Services />
      {/* <Offer /> — nyári ajánlat kikommentezve */}
      <Team />
      <Partners />
      <Journey />
      <Testimonials />
      <Booking />
      <Faq />
      <Footer />
      <PromoPopup />
    </>
  )
}

import Splash from '../components/Splash'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
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

export default function Home() {
  return (
    <>
      <Splash />
      <Nav overlay />
      <span id="top" />
      {/* <Hero /> — régi hero kikommentezve, ideiglenes videó-hero fut helyette */}
      <HeroVideo />
      <Partners />
      <Services />
      {/* <Offer /> — nyári ajánlat kikommentezve */}
      <Team />
      <Journey />
      <Testimonials />
      <Booking />
      <Faq />
      <Footer />
    </>
  )
}

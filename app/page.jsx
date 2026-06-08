import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Offer from '../components/Offer'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import MobileBar from '../components/MobileBar'

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />
      <Hero />
      <Partners />
      <Services />
      <Offer />
      <Team />
      <Testimonials />
      <Booking />
      <Footer />
      <MobileBar />
    </>
  )
}

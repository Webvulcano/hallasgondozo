import { BOOKING_URL, PHONE } from '../lib/constants'
import Button from './Button'
import { Calendar, Phone } from './icons'

export default function HeroVideo() {
  return (
    <section className="hero-video">
      <div className="hero-video-frame">
        <video
          className="hero-video-el"
          src="/pic/hero/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-video-overlay">
          <span className="hero-video-eyebrow">ÉRTED Hallásgondozó</span>
          <h1 className="hero-video-title">Hallókészülékek és hallásvizsgálat Győrben</h1>
          <div className="hero-video-cta">
            <Button variant="gold" href={BOOKING_URL} icon={<Calendar size={20} stroke="#3a1c00" />}>
              Ingyenes időpontot foglalok
            </Button>
            <Button
              variant="ghost-light"
              href={PHONE.href}
              icon={<Phone size={18} stroke="#fff" />}
              className="hero-video-phone-btn"
            >
              {PHONE.display}
            </Button>
          </div>
        </div>
        <div className="hero-logo-corner" id="hero-logo-target">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pic/logo_felirattal_black.png" alt="ÉRTED Hallásgondozó" className="hero-logo-corner-img" />
        </div>
      </div>
    </section>
  )
}

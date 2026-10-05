import { BOOKING_URL, PHONE } from '../lib/constants'
import Button from './Button'
import HeroVideoPlayer from './HeroVideoPlayer'
import { Calendar, Phone } from './icons'

export default function HeroVideo() {
  return (
    <section className="hero-video">
      {/* LCP-poszter előtöltése magas prioritással — a React 19 a <link>-et a <head>-be emeli.
          Csak a főoldalon (ott van HeroVideo). */}
      <link rel="preload" as="image" href="/pic/hero/hero_poster.webp" fetchPriority="high" />
      <div className="hero-video-frame">
        {/* Videó: HeroVideoPlayer (késleltetve, az oldal betöltése után indul).
            Poszter: <img> a videó MÖGÖTT — a HTML-ben azonnal felfedezhető, fetchPriority=high,
            LCP-elem. Mobilon is 1920px SZÁNDÉKOSAN (nincs srcset): kisebb poszternél a Chrome a
            felnagyított képet „kisebbnek" számolja, és a később induló 1920px-es videó első
            kockája lenne az LCP (PageSpeed mobil: 4,3 mp). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-video-poster"
          src="/pic/hero/hero_poster.webp"
          width="1920"
          height="1079"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <HeroVideoPlayer />
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
          <img src="/pic/logo/logo_felirattal_black.webp" alt="ÉRTED Hallásgondozó" className="hero-logo-corner-img" />
        </div>
      </div>
    </section>
  )
}

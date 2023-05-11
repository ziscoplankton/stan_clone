import { useState, useEffect } from 'react'
import LuckyHank from '../css/images/luckyhank.jpeg'
import PortableDoor from '../css/images/portabledoor.jpeg'
import PowerBook from '../css/images/powerbook2.jpeg'
import TotallyFine from '../css/images/totallyfine3.jpeg'
import BelAir from '../css/images/belair2.jpeg'
import StanLogo from '../css/images/stan-logo.png'
import '../css/header.css'

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    {
      id: 'LuckyHank',
      url: LuckyHank,
      title: 'Lucky Hank',
      subtitle: 'New episodes weekly',
    },
    {
      id: 'PortableDoor',
      url: BelAir,
      title: 'A Stan Original Film The Portable Door',
      subtitle: 'Now streaming',
    },
    {
      id: 'PowerBook',
      url: PowerBook,
      title: 'Power Book II: Ghost',
      subtitle: 'New episodes weekly',
    },
    {
      id: 'TotallyFine',
      url: TotallyFine,
      title: 'A Stan Original Series Totally Completely Fine',
      subtitle: 'Now streaming',
    },
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, images.length])

  // useEffect(() => {
  //   const prevImage = document.querySelector(activeIndex > 0 ? `#${images[activeIndex - 1].id}` : `#${images[activeIndex].id}`);
  //   prevImage.classList.add('removal')
  // }, [activeIndex])

  useEffect(() => {
    const logoHeader = document.querySelector('#HeaderLogo')
    console.log(logoHeader)
    logoHeader.style.setProperty('--logo', `url(${StanLogo})`)
  }, [])


  return <div id="HeaderStan">
        <div className="image-container" style={{ '--index': activeIndex , '--active-index': activeIndex }}>
          {images.map((image, index) => (
            <div id={image.id} key={image.id} className={index == activeIndex?'image active': "image"} style={{ '--image-url': `url(${image.url})` , '--index':index}}>
              <div className="title">{image.title}</div>
              <div className="subtitle">{image.subtitle}</div>
            </div>
          ))}
        </div>
      <div id="HeaderCTAs">
        <div id="CTA--One">
          <div id="HeaderLogo"></div>
          <div>Start your 30 day free trial today.</div>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div id="CTA--Two">
          <div id="HeaderCTA">Start your 30 day free trial</div>
          <div id="CTA--Two-policy">
            By clicking 'Start your 30 day free trial' you agree to hear about Stan and agree to our{' '}
            <span>terms and conditions</span>,<span> privacy policy</span> and <span>collection statement</span>
          </div>
        </div>
      </div>
    </div>
  
}


import StanLogo from '../css/images/stan-logo.png'
import '../css/footerCta.css'
import { useEffect } from 'react'

export default function FooterCta(){

    useEffect(() => {
        const logoHeader = document.querySelector('#FooterLogo')
        logoHeader.style.setProperty('--logo', `url(${StanLogo})`)
      }, [])
    return <div id="FooterCta">
            <div id="FooterLogo"></div>
       </div>
}
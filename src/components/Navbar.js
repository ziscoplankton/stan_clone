
import { useEffect } from 'react'
import '../css/navbar.css'
import StanLogo from '../css/images/stan-logo.png'
export default function Navbar(){

    useEffect(() => {
        const root = document.querySelector('#StanLogo')
        root.style.setProperty('--stanBg', `url(${StanLogo})`)

        window.onscroll = function() {
            const navbar = document.querySelector('#StanNavbar')
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add('onScroll')
                navbar.style.backgroundColor = "#343434";
            } else {
              navbar.style.backgroundColor = "transparent";
              navbar.classList.remove('onScroll')
            }
          };

    }, [])
    return <>
        <nav id="StanNavbar">
            <div id="navbarLogo">
                <div id="StanLogo">
                    Stan
                </div>
                <div id="StanLogoDetails">The biggest deal <br/> in entertainment</div>
            </div>
            <div id="navbarDetails">
                <div id="navbarLogin">Log in</div>
                <div id="navbarCTA">Start your 30 day free trial</div>
            </div>
        </nav>
    </>
}
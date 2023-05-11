import '../css/footer.css'
import AppleStore from '../css/images/appStore.svg'
import GooglePlay from '../css/images/google-play-badge.png'

export default function Footer(){

    return <div id="Footer">
        <ul id="FooterList">
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Collection Statement</li>
            <li>Help</li>
            <li>Buy a Stan Gift Card</li>
            <li>Manage Account</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Stan Sport</li>
        </ul>
        <div id="FooterAllLogos">
            <ul id="FooterLogos">
                <li>LOGO</li>
                <li>LOGO</li>
                <li>LOGO</li>
            </ul>
            <ul id="FooterCTAs">
                <li>
                    <img src={AppleStore}/>
                </li>
                <li>
                    <img src={GooglePlay} style={{height: '60px'}}/>
                </li>
            </ul>
        </div>
        <div id="FooterCopyright"><small>Copyright © 2023 Stan. All Rights Reserved.</small></div>
    </div>
}
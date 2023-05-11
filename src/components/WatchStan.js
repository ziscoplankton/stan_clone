import '../css/watchStan.css'

import WatchOne from '../css/images/watch1.jpeg'
import WatchTwo from '../css/images/watch2.jpeg'
import WatchThree from '../css/images/watch3.jpeg'
import WatchFour from '../css/images/watch4.jpeg'
import WatchFive from '../css/images/watch5.jpeg'
import WatchSix from '../css/images/watch6.jpeg'
import WatchSeven from '../css/images/watch7.jpeg'
import WatchEight from '../css/images/watch8.jpeg'
import WatchNine from '../css/images/watch9.jpeg'

import AppleStore from '../css/images/appStore.svg'
import GooglePlay from '../css/images/google-play-badge.png'
import App from '../App'
export default function WatchStan(){


    return <div className="watchStan">
        <h4>Watch Stan on your</h4>
        <ul>
            <li>
                <div>
                    <picture>
                        <img src={WatchOne} />
                    </picture>
                    <strong>LG, Samsung, Sony, Hisense and TCL Smart TVs</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchTwo} />
                    </picture>
                    <strong>PS5™, PS4™ and PS3™</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchThree} />
                    </picture>
                    <strong>Xbox Series X, Series S and One</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchFour} />
                    </picture>
                    <strong>Apple TV</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchFive} />
                    </picture>
                    <strong>Computer</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchSix} />
                    </picture>
                    <strong>Telstra TV</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchSeven} />
                    </picture>
                    <strong>On Your TV using Chromecast</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchEight} />
                    </picture>
                    <strong>Telstra</strong>
                </div>
            </li>
            <li>
                <div>
                    <picture>
                        <img src={WatchNine} />
                    </picture>
                    <strong>Fetch</strong>
                </div>
            </li>
        </ul>
        <ul className='dllctas'>
            <li>
                <picture>
                    <img src={GooglePlay} />
                </picture>
            </li>
            <li>
                <picture>
                    <img src={AppleStore} />
                </picture>
            </li>
        </ul>
        <div className='watchStanCta'>Read more about devices</div>
    </div>
}
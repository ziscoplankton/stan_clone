import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeaderDetails from './components/HeaderDetails';
import WatchStan from './components/WatchStan';
import Hero from './components/Hero';
import FooterCta from './components/FooterCta';
import Footer from './components/Footer';
import './css/app.css';

import Stanbg from './css/images/StanBg.jpeg';
import Hero1 from './css/images/hero1.jpeg'
import Hero2 from './css/images/hero2.jpeg'
import Hero3 from './css/images/hero4.jpeg'
import Hero4 from './css/images/hero5.jpeg'
import Hero5 from './css/images/hero6.jpeg'

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScreenOver40rem, setIsScreenOver40rem] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    const root = document.querySelector('#root')
    root.style.setProperty('--image', `url(${Stanbg})`)
    root.style.setProperty('zIndex', `-1`)

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      setIsScreenOver40rem(window.innerWidth >= 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollPosition]);

  return (
    <ParallaxProvider>
      <Navbar />
      <Header />
      <HeaderDetails />
      <WatchStan />
      {isScreenOver40rem && (
        <>
          <Parallax translateY={[100, -100]}>
            <Hero 
                  id="One"
                  title="Stream the Biggest TV Shows"
                  subtitle=" Exclusive new shows to watch as they premiere same day as U.S. Plus countless hours of complete series to enjoy."
                  cta="Trending TV Shows on Stan"
                  image={Hero1}
              />
          </Parallax>
          <Parallax translateY={[100,-100]} >
              <Hero 
                  id="Two"
                  title="Watch Awesome Movies"
                  subtitle=" Watch Awesome Movies
                  From Hollywood blockbusters to cult classics, whatever movie you're in the mood for you'll find it on Stan"
                  cta="Trending TV Shows on Stan"
                  image={Hero2}
              />
          </Parallax>
          <Parallax translateY={[100, -100]} >
              <Hero 
                  id="Three"
                  title="Kids"
                  subtitle="TV shows and movies for kids of all ages. Parental controls to keep kids safe "
                  cta="Kids & Family TV Shows & Movies"
                  image={Hero3}
              />
          </Parallax>
          <Parallax translateY={[100, -100]} >
              <Hero 
                  id="Four"
                  title="Australia's unrivalled home of original productions"
                  subtitle="Featuring the biggest stars from Australia, Hollywood and beyond, our unrivalled lineup of originals has something for everyone."
                  cta="See More Stan Originals"
                  image={Hero4}
              />
          </Parallax>
          <Parallax translateY={[100, -100]} >
              <Hero 
                  id="Five"
                  title="Stan Sport is the Home of Rugby, UEFA Champions League, Grand Slam Tennis & more.
                  "
                  subtitle="Watch sport ad-free, live & on demand. Start a 7 day free trial of the Sport add-on today."
                  cta="Learn more about Stan Sport"
                  image={Hero5}
              />
              
            </Parallax>

            <FooterCta />
            <Footer />

        </>
      )}
      {!isScreenOver40rem && (
        <>
            <WatchStan />
            <Hero 
                id="One"
                title="Stream the Biggest TV Shows"
                subtitle=" Exclusive new shows to watch as they premiere same day as U.S. Plus countless hours of complete series to enjoy."
                cta="Trending TV Shows on Stan"
                image={Hero1}
            />
            <Hero 
                id="Two"
                title="Watch Awesome Movies"
                subtitle=" Watch Awesome Movies
                From Hollywood blockbusters to cult classics, whatever movie you're in the mood for you'll find it on Stan"
                cta="Trending TV Shows on Stan"
                image={Hero2}
            />
            <Hero 
                id="Three"
                title="Kids"
                subtitle="TV shows and movies for kids of all ages. Parental controls to keep kids safe "
                cta="Kids & Family TV Shows & Movies"
                image={Hero3}
            />
            <Hero 
                id="Four"
                title="Austrlia's unrivalled home of original productions"
                subtitle="Featuring the biggest stars from Australia, Hollywood and beyond, our unrivalled lineup of originals has something for everyone."
                cta="See More Stan Originals"
                image={Hero4}
            />
            <Hero 
                id="Five"
                title="Stan Sport is the Home of Rugby, UEFA Champions League, Grand Slam Tennis & more.
                "
                subtitle="Watch sport ad-free, live & on demand. Start a 7 day free trial of the Sport add-on today."
                cta="Learn more about Stan Sport"
                image={Hero5}
            />
            <FooterCta />
            <Footer />
        </>
      )}
    </ParallaxProvider>
  );
}

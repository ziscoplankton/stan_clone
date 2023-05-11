import { useEffect, useRef } from "react"
import '../css/hero.css'


export default function Hero({id, title, subtitle, cta, image}){

    const hero = useRef()

    useEffect(() => {

    }, [])
    return <div ref={hero} key={id} id={`hero--${id}`} className="hero wrapper -padded">
        <div className="heroContent -padded -text-center">
            <div className="heroDetails">
                <h3 className="heroTitle">{title}</h3>
                <p className="heroSubtitle">{subtitle}</p>
            </div>
            <div className="heroImage">
                <img src={image} />
            </div>
        </div>
        <div className="-text-center heroCta -margin">{cta}</div>
    </div>
}
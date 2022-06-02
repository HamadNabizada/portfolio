import style from '../styles/Hero.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faEnvelope,
  } from "@fortawesome/free-solid-svg-icons";

export default function Hero(){
    return (
        <div className={style.wrapper}>
            <h1 className={style.h1Hero}>Hamad Nabizada</h1>
            <h2 className={style.h2Hero}>Frontend Developer</h2>
            <div className={style.links}>
                <button className={style.btn}><FontAwesomeIcon icon={faEnvelope}/> Email</button>
                <button className={`${style.btn} ${style.linkedin}`}>LinkedIn</button>
            </div>
            <p className={style.pHero}>I implement user interface design and solve user problems with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website.</p>

        </div>

    )
}
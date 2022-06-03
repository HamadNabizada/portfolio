import style from '../styles/Hero.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Hero(){

    return (
        <div className={style.wrapper}>
            <h1 className={style.h1Hero}>Hamad Nabizada</h1>
            <h2 className={style.h2Hero}>Frontend Developer</h2>
            <div className={style.links}>
                <a href='#'><button className={style.btn}>Resume</button></a>
                <a href='#'><FontAwesomeIcon className={style.email} icon={faEnvelope}/></a>
                <a href='https://github.com/HamadNabizada'><img className={style.image} src="/images/githubLogo.png" alt="Github Logo" /></a>
                <a href='https://www.linkedin.com/in/hamad-nabizada/'><img className={style.image} src="/images/linkedin.png" alt="Linkedin Logo" /></a>
            </div>
            <p className={style.pHero}>I implement user interface design and solve user problems with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website.</p>
        </div>

    )
}

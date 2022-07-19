import style from '../styles/Navbar.module.css'
import {useState} from 'react'

export default function Navbar(){
    let [toggle, setToggle] = useState(false)

    function toggleNav(){
        setToggle(prevToggle=>!prevToggle)
    }
    let links = (     
        <ul className={toggle ? style.navUl : style.navUlOff}>
            <li className={style.linkItem}>Home</li>
            <li className={style.linkItem}>Projects</li>
            <li className={style.linkItem}>Contact</li>
        </ul>
    )
    let menu = (
        <div onClick={toggleNav} className={style.menuButton}>
            <div className={toggle ? style.menuClose1:style.menuLine}></div>
            <div className={toggle ? style.menuClose2:style.menuLine}></div>
            <div className={toggle ? style.menuClose3:style.menuLine}></div>
        </div>
    )
    return(
        <nav className={style.navWrapper}>
            {menu}
            {links}
        </nav>
    )
}
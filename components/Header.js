import style from '../styles/Header.module.css'
import Navbar from './Navbar'

export default function Header(){
    return(
        <div className={style.headerWrapper}>
            <h2 className={style.title}>Web Developer </h2>
            <Navbar />
        </div>
    )
}
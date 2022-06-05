import TenziesGame from '../components/TenziesGame'
import style from '../styles/TenziesGame.module.css'

export default function Tenzies(){
    return (
        <div className={style.tenziesGameWrapper}>
            <TenziesGame />
        </div>
    )
}
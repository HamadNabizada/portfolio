import style from '../styles/Tenzies.module.css'
import Die from './Die'

export default function Tenzies(){
    return(
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Tenzies</h1>
                <p className={style.instructions}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <Die />
                <button className={style.btn}>Roll</button>
            </div>
        </div>
    )
}
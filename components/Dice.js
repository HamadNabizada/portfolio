import style from '../styles/TenziesGame.module.css'

export default function Dice(props){
    let styles = {
        backgroundColor: props.isHeld ? '#59E391':'white'
    }

    return(
        <div onClick={props.handleClick} style={styles} className={style.dice}>{props.value}</div>
    )
}
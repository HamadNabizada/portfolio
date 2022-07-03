import style from '../styles/Die.module.css'

export default function Die(props){

    let mystyle = {
        backgroundColor: props.isHeld ? '#59E391':'white'
    }

    return(
        <div onClick={props.handleClick} style={mystyle} id={props.id} className={style.wrapper}>
            <h1>{props.value}</h1>
        </div>
    )
}
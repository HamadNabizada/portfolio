import style from '../styles/Die.module.css'

export default function Die(props){
    return(
        <div className={style.wrapper}>
            <h1>{props.value}</h1>
        </div>
    )
}
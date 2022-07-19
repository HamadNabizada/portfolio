import style from '../styles/QuizCard.module.css'

export default function QuizCard(props){
    return(
        <div className={style.wrapper}>
            <h2 className={style.cardTitle}>{props.title}</h2>
            <h3 className={style.p}>{props.p}</h3>
            <button className={style.quizbtn}><a href={props.goTo}>Take Quiz</a></button>
        </div>
    )
}
import style from '../styles/QuizEnd.module.css'

export default function QuizEnd(props){
    let redoQuizUrl = `/QuizGame/${props.url}`
    return(
        <div className={style.wrapper}>
            <p className={style.results}>You Answered {props.totalCorrect}/10 questions correctly</p>
            <a href={redoQuizUrl}><button className={style.quizbtn}>Redo Quiz</button></a>
        </div>
    )
}
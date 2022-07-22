import style from '../styles/QuizEnd.module.css'

export default function QuizEnd(props){
    return(
        <div className={style.wrapper}>
            <p className={style.results}>You Answered {props.totalCorrect}/10 questions correctly</p>
            <button className={style.quizbtn}>Redo Quiz</button>
        </div>
    )
}
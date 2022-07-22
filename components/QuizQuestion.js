import style from '../styles/QuizQuestion.module.css'


export default function QuizQuestion(props){
    return(
        <div className={style.wrapper}>
            <h1 className={style.question} >{props.question}</h1>
            <section className={style.answersWrapper}>
                <button onClick={props.handleClick} className={style.answerBtn}>{props.allPossibleAnswers[0]}</button>
                <button onClick={props.handleClick} className={style.answerBtn}>{props.allPossibleAnswers[1]}</button>
                <button onClick={props.handleClick} className={style.answerBtn}>{props.allPossibleAnswers[2]}</button>
                <button onClick={props.handleClick} className={style.answerBtn}>{props.allPossibleAnswers[3]}</button>
            </section>
        </div>
    )
}
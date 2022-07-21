import style from '../styles/QuizQuestion.module.css'


export default function QuizQuestion(props){
    return(
        <div className={style.wrapper}>
            <h1 className={style.question} >{props.question}</h1>
            <section className={style.answersWrapper}>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
            </section>
        </div>
    )
}
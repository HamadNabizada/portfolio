import style from '../styles/QuizQuestion.module.css'


export default function QuizQuestion(props){
    return(
        <div className={style.wrapper}>
            <h1 className={style.question} >This is a question for the user.</h1>
            <section className={style.answersWrapper}>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
                <button className={style.answerBtn}>Answer 1</button>
            </section>
        </div>
    )
}
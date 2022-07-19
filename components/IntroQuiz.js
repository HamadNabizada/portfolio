import style from '../styles/IntroQuiz.module.css'

export default function IntroQuiz(props){
    return(
        <div className={style.wrapper}>
            <h1 classname={style.title}>{props.title}</h1>
            <section className={style.directionsWrapper}>
                <p className={style.directions}>You will be asked 10 questions. You will see your score at the end. Good Luck!</p>
                <button className={style.directionBtn}>Start Quiz</button>
            </section>
        </div>
    )
}
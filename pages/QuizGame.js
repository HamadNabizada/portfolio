import Header from '../components/Header'
import style from '../styles/QuizGame.module.css'
import QuizCard from '../components/QuizCard'

export default function Quiz(){
    return (
        <div className={style.wrapper}>
            <Header />
            <h1 className={style.title}>Select a Quiz to play!</h1>
            <section className={style.cardWrapper}>
                <QuizCard goTo='/QuizGame/Quiz1' title='General Knowledge' p='General Knowledge quiz' />
                <QuizCard goTo='/QuizGame/Quiz2' title='Space and Nature' p='Lets explore the stars' />
                <QuizCard goTo='/QuizGame/Quiz3' title='Mythology' p='Put faith in your knowledge' />
                <QuizCard goTo='/QuizGame/Quiz4' title='Sports' p='Play ball' />
                <QuizCard goTo='/QuizGame/Quiz5' title='History' p='Open up that text book' />
                <QuizCard goTo='/QuizGame/Quiz6' title='Animals' p='Animals are the best' />

            </section>
        </div>
    )
}
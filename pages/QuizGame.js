import Header from '../components/Header'
import style from '../styles/QuizGame.module.css'
import QuizCard from '../components/QuizCard'

export default function Quiz(){
    return (
        <div className={style.wrapper}>
            <Header />
            <h1 className={style.title}>Select a Quiz to play!</h1>
            <section className={style.cardWrapper}>
                <QuizCard title='General Knowledge' p='General Knowledge quiz' />
                <QuizCard title='General Knowledge' p='General Knowledge quiz' />
                <QuizCard title='General Knowledge' p='General Knowledge quiz' />
            </section>
        </div>
    )
}
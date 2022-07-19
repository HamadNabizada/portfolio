import IntroQuiz from '../../components/IntroQuiz'
import Header from '../../components/Header'
import style from '../../styles/QuizStyles.module.css'

export default function Quiz1(){

    

    return (
        <div className={style.wrapper}>
            <Header />
            <IntroQuiz title='General Knowledge' />
        </div>
    )
}
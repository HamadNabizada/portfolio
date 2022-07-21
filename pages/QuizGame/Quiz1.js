import IntroQuiz from '../../components/IntroQuiz'
import Header from '../../components/Header'
import style from '../../styles/QuizStyles.module.css'
import { useEffect, useState} from 'react'
import QuizQuestion from '../../components/QuizQuestion'
import {nanoid} from 'nanoid'

export default function Quiz1(){
    let [currentStage, setCurrentStage] = useState('intro')
    let [quizArray, setQuizArray] = useState([{
        question: '',
        correct_answer: '',
        incorrect_answers: [],
        userSelection: ''
     }])
    let [myQuiz, setMyQuiz] = useState([{
        question: '',
        correct_answer: '',
        incorrect_answers: [],
        userSelection: '',
        allPossibleAnswers:[],
        key: ''
     }])
    let quizElements = myQuiz.map( item =>{
        return <QuizQuestion 
          key={item.key}
          question={item.question}
        />
    })
    function replaceWithSymbol(question){
        let finalQuestion = question.replaceAll('&quot;', '"')
        finalQuestion = finalQuestion.replaceAll('&#039;', "'")
        finalQuestion = finalQuestion.replaceAll('&rsquo;', "'")
        finalQuestion = finalQuestion.replaceAll('&ldquo;', '"')
        finalQuestion = finalQuestion.replaceAll('&rdquo;', '"')
        finalQuestion = finalQuestion.replaceAll('&hellip;', '...')
        return finalQuestion
    }
    let currentStageDisplay
    if (currentStage === 'intro'){
        currentStageDisplay = <IntroQuiz handleClick={fetchQuiz} title='General Knowledge' />
    }
    if (currentStage === 'quiz'){
        currentStageDisplay = quizElements
    }
    function createQuizElements(array){
        setMyQuiz(prevQuiz => {
            let newQuiz = array.map( item =>{
                let allAnswers = [...item.incorrect_answers, item.correct_answer]
                allAnswers.sort()
                return (
                    {
                        question: replaceWithSymbol(item.question),
                        correct_answer: item.correct_answer,
                        incorrect_answers: item.incorrect_answers,
                        userSelection: '',
                        allPossibleAnswers:allAnswers,
                        key: nanoid()
                    }
                )
            })
            return newQuiz
        })
    }
    
    // if (currentStage === 'result'){
    //     currentStageDisplay = //enter logic here
    // }
    async function fetchQuiz(){
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
        let data = await response.json()
        setQuizArray(data.results)
        setCurrentStage('quiz')
    }

    useEffect(()=>{
        createQuizElements(quizArray)
    },[quizArray])
    

    return (
        <div className={style.wrapper}>
            <Header />
            {currentStageDisplay}
        </div>
    )
}
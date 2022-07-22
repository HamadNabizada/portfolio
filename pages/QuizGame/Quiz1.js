import IntroQuiz from '../../components/IntroQuiz'
import Header from '../../components/Header'
import style from '../../styles/QuizStyles.module.css'
import { useEffect, useState} from 'react'
import QuizQuestion from '../../components/QuizQuestion'
import {nanoid} from 'nanoid'

export default function Quiz1(){
    let [questionCounter, setQuestionCounter] = useState(0)
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
          allPossibleAnswers={item.allPossibleAnswers}
          handleClick={userClickAnswer}
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
        currentStageDisplay = quizElements[questionCounter]
    }
    if (currentStage === 'result'){
        currentStageDisplay = <h1>END</h1>
    }
    function createQuizElements(array){
        setMyQuiz(prevQuiz => {
            let newQuiz = array.map( item =>{
                let allAnswers = [...item.incorrect_answers, item.correct_answer]
                allAnswers.sort()
                let allAnswersProper = allAnswers.map( item =>{
                    return replaceWithSymbol(item)
                })
                return (
                    {
                        question: replaceWithSymbol(item.question),
                        correct_answer: item.correct_answer,
                        incorrect_answers: item.incorrect_answers,
                        userSelection: '',
                        allPossibleAnswers:allAnswersProper,
                        key: nanoid()
                    }
                )
            })
            return newQuiz
        })
    }

    function userClickAnswer(e){
        console.log(myQuiz)
        setMyQuiz(prevMyQuiz =>{
            let newQuiz= prevMyQuiz.map(item=>{
                return {...item}
            })
            newQuiz[questionCounter].userSelection = e.target.innerHTML
            console.log(newQuiz)
            return newQuiz
        })
        
        setQuestionCounter(prevQuestionCounter=>{
            let counter = prevQuestionCounter +1
            return counter
        })
        if(questionCounter === 9){
            console.log('END');
            setCurrentStage('result')
        }
    }
    
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
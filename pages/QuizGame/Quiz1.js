import IntroQuiz from '../../components/IntroQuiz'
import Header from '../../components/Header'
import style from '../../styles/QuizStyles.module.css'
import { useEffect, useState} from 'react'
import QuizQuestion from '../../components/QuizQuestion'
import {nanoid} from 'nanoid'
import QuizEnd from '../../components/QuizEnd'

export default function Quiz1(){
    let [questionCounter, setQuestionCounter] = useState(0)
    let [myEvent, setMyEvent] = useState('')
    let [correctCounter, setCorrectCounter] = useState(0)
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
        key: '',
        isCorrect: false
     }])
    let quizElements = myQuiz.map( item =>{
        return <QuizQuestion 
          key={item.key}
          question={item.question}
          answer={item.correct_answer}
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
        finalQuestion = finalQuestion.replaceAll('&shy;', '-')
        finalQuestion = finalQuestion.replaceAll('&amp;oacute;', 'ó')
        finalQuestion = finalQuestion.replaceAll('&ouml;', 'ö')
        finalQuestion = finalQuestion.replaceAll('&aring;', 'å')
        finalQuestion = finalQuestion.replaceAll('&auml;', 'ä')
        finalQuestion = finalQuestion.replaceAll('&Eacute;', 'É')
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
        currentStageDisplay = <QuizEnd url='Quiz1' totalCorrect={correctCounter} />
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
    function checkAllAnswers(array){
        let counter=0
        myQuiz.forEach(item=>{
            if(item.isCorrect){
                counter = counter + 1
            }
        })
        return counter
    }
    function checkSingleAnswer(question){
        if(question.userSelection === question.correct_answer){
            return true
        }
        else return false
    }
    function userClickAnswer(e){
        setMyEvent(e)
    }
    useEffect(()=>{
        if(myEvent !== ''){
            updateQuestionCounter()
        }
    },[myEvent])
    useEffect(()=>{
        if(questionCounter !== 0 && questionCounter < 10){
            updateMyQuiz(myEvent)
        }
        if(questionCounter === 10){
            updateMyQuiz(myEvent)
            setCurrentStage('result')
        }
    },[questionCounter])
    function updateQuestionCounter(){
        setQuestionCounter(prevQuestionCounter=>{
            let counter = prevQuestionCounter + 1
            return counter
        })
    }
    function findResults(){
        let totalCorrect = checkAllAnswers(myQuiz)
        setCorrectCounter(totalCorrect)
    }
    useEffect(()=>{
        if(currentStage === 'result'){
            findResults()
        }
    },[currentStage])
    function updateMyQuiz(e){
        setMyQuiz(prevMyQuiz =>{
            let newQuiz= prevMyQuiz.map(item=>{
                return {...item}
            })
            newQuiz[questionCounter-1].userSelection = e.target.innerHTML
            newQuiz[questionCounter-1].isCorrect = checkSingleAnswer(newQuiz[questionCounter-1])
            return newQuiz
        })
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
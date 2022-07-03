import style from '../styles/Tenzies.module.css'
import Die from './Die'
import {nanoid} from 'nanoid'
import { useState, useEffect } from 'react'


export default function Tenzies(){

    function get10RandomDie(num){
        let randomTen = [];
        for (let i = 0; i < num; i++) {
            let newnanoid = nanoid()
            let newDie = {
                value: (Math.floor(Math.random() * 6)+1),
                key: newnanoid,
                id: newnanoid,
                isHeld: false
            }
            randomTen.push(newDie)
        }
        return randomTen
    }

    let [diceSet, setDiceSet] = useState(get10RandomDie(10))
    let [gameOngoing, setGameOngoing] = useState(true)
    
    let dieElements = diceSet.map( item =>{
        return(
            <Die 
                value={item.value}
                key= {item.key}
                id= {item.id}
                isHeld= {item.isHeld}
                handleClick={() => toggleHold(item.id)}
            />
        )
    } )

    function getNewDice(){
        setDiceSet( prevDiceSet => {
            let newDiceSet = prevDiceSet.map( item =>{
                return item.isHeld ? item: get10RandomDie(1)[0]
            })
            return newDiceSet
        })
    }

    function toggleHold(id){
        setDiceSet( prevDiceSet => {
            let newDiceSet = prevDiceSet.map( item =>{
                return id === item.id ? {...item, isHeld: !item.isHeld}:{...item}
            })
            return newDiceSet
        })

    }

    useEffect(() =>{
        let checkIsHeld = true
        let checkValue = true
        diceSet.forEach( die =>{
            !die.isHeld && (checkIsHeld = false )
        })
        if(checkIsHeld){
            checkValue = checkAllValue(diceSet)
            if(checkValue){
                setGameOngoing(false)
            }
        }
        
    }, [diceSet])
    function checkAllValue(diceSet){
        let doNumMatch = true
        let tempValue = diceSet[0].value
        diceSet.forEach(die =>{
            !(die.value === tempValue) && (doNumMatch = false)
        })
        return doNumMatch
    }

    function generateNewGame(){
        setGameOngoing(true)
        setDiceSet(get10RandomDie(10))
    }


    return(
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Tenzies</h1>
                <p className={style.instructions}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className={style.diceWrapper}>
                    {dieElements}
                </div>
                <button onClick={gameOngoing ? getNewDice:generateNewGame} className={style.btn}>{gameOngoing? 'Roll':'New Game'}</button>
            </div>
        </div>
    )
}
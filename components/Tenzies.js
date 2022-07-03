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
            return get10RandomDie(10)
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

    return(
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Tenzies</h1>
                <p className={style.instructions}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className={style.diceWrapper}>
                    {dieElements}
                </div>
                <button onClick={getNewDice} className={style.btn}>Roll</button>
            </div>
        </div>
    )
}
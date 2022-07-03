import style from '../styles/Tenzies.module.css'
import Die from './Die'
import {nanoid} from 'nanoid'
import { useState, useEffect } from 'react'


export default function Tenzies(){

    function get10RandomDie(){
        let randomTen = [];
        for (let i = 0; i < 10; i++) {
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

    let [diceSet, setDiceSet] = useState(get10RandomDie())
    
    let dieElements = diceSet.map( item =>{
        return(
            <Die 
                value={item.value}
                key= {item.key}
                id= {item.id}
                isHeld= {item.isHeld}
            />
        )
    } )

    console.log(dieElements)
    return(
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>Tenzies</h1>
                <p className={style.instructions}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className={style.diceWrapper}>
                    {dieElements}
                </div>
                <button className={style.btn}>Roll</button>
            </div>
        </div>
    )
}
import style from '../styles/Project.module.css'
import {useState} from 'react'

export default function Project(props){

    return (
        <div className={style.wrapper} >
            <button className={style.btn}>View live site</button>
            <button className={style.btn}>View github code</button>
        </div>
    )
}
import style from '../styles/Project.module.css'
import {useState} from 'react'

export default function Project(props){
    let [isHovered, setIsHovered] = useState(false)
    function hoverInEvent(){
        setIsHovered(true)
    }
    function hoverOutEvent(){
        setIsHovered(false)
    }
    let myOpacity= isHovered ? {opacity:'1'}: {opacity:'0'}
    let backgroundOpacity= isHovered ? style.wrapper2Hover : style.wrapper2
    let myBackground = {
        backgroundImage:`url(${props.staticImg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }
    let myBackgroundHovered = {
        backgroundImage:`url(${props.gifImg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    }
    let myStyle = isHovered ? myBackgroundHovered : myBackground
    return (
        <div style={myStyle} onMouseOver={hoverInEvent} onMouseOut={hoverOutEvent} className={style.wrapper} >
            <div className={backgroundOpacity}></div>
            <button style={myOpacity} className={style.btn}>View live site</button>
            <button style={myOpacity} className={style.btn}>View github code</button>
        </div>
    )
}
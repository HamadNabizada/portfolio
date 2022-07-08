import TenziesGame from '../components/Tenzies'
import Header from '../components/Header'
import style from '../styles/Tenzies.module.css'


export default function Tenzies(){
    return (
        <div>
            <Header />
            <TenziesGame />
        </div>
    )
}
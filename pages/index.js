import Header from '../components/Header' 
import Hero from '../components/Hero'
import style from '../styles/Home.module.css'

export default function Home(){
  return (
    <div className={style.home}>
      <Header />
      <Hero />
    </div>
  )
}
import Header from '../components/Header' 
import Hero from '../components/Hero'
import style from '../styles/Home.module.css'
import Project from '../components/Project'

export default function Home(){
  return (
    <div className={style.home}>
      <Header />
      <Hero />
      <div className={style.projects}>
        <h3>Check out my projects!</h3>
        <Project />
      </div>
    </div>
  )
}
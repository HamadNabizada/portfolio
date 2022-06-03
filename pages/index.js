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
        <div className={style.projectWrapper}>
          <Project 
            staticImg='/images/aiChatpic.png'
            gifImg='/images/aiChat.gif' 
            liveSite='https://fun-with-ai-chat2.vercel.app/'
            githubCode='https://github.com/HamadNabizada/fun-with-ai'
          />
          <div className={style.title}>
            <h4 className={style.myProjectTitle}>AI Chat app</h4>
            <div>
              <a href='https://fun-with-ai-chat2.vercel.app/' target='_blank'><p className={style.titleLink}>&#8226; Live Site</p></a>
              <a href='https://github.com/HamadNabizada/fun-with-ai' target='_blank'><p className={style.titleLink}>&#8226; Github Code</p></a>
            </div>
          </div>
          <div className={style.techWrapper}>
            <p className={style.tech}>Javascript</p>
            <p className={style.tech}>React</p>
            <p className={style.tech}>NextJS</p>
          </div>

        </div>

      </div>
    </div>
  )
}
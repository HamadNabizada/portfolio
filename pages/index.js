import Header from '../components/Header' 
import Hero from '../components/Hero'
import style from '../styles/Home.module.css'
import Project from '../components/Project'
import Link from 'next/link'

export default function Home(){
  return (
    <div className={style.home}>
      <Header />
      <Hero />
      <h3 className={style.projectWrapperTitle}><span className={style.star}>&#9733;</span> Check out my projects! <span className={style.star}>&#9733;</span></h3>
      {/* Projects */}
      <div className={style.projects}>
        {/* AI Chat App */}
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
              <a href='https://fun-with-ai-chat2.vercel.app/' target='_blank' rel="noopener noreferrer"><p className={style.titleLink}>&#8226; Live Site</p></a>
              <a href='https://github.com/HamadNabizada/fun-with-ai' target='_blank' rel="noopener noreferrer"><p className={style.titleLink}>&#8226; Github Code</p></a>
            </div>
          </div>
          <div className={style.techWrapper}>
            <p className={style.tech}>Javascript</p>
            <p className={style.tech}>React</p>
            <p className={style.tech}>NextJS</p>
          </div>
        </div>
      </div>
      <h3 className={style.projectWrapperTitle}><span className={style.star}>&#9733;</span> Play a quick game! <span className={style.star}>&#9733;</span></h3>
      {/* Game List */}
      <div className={style.projects}>
        {/* Quiz Game */}
        <div className={style.projectWrapper}> 
          <Project />
          <div className={style.title}>
            <h4 className={style.myProjectTitle}>Quiz Game</h4>
            <div>
              <Link href='/QuizGame'>
                <a><p className={style.titleLink}>&#8226; Live Site</p></a>
              </Link>
              <a href='https://github.com/HamadNabizada/fun-with-ai' target='_blank' rel="noopener noreferrer"><p className={style.titleLink}>&#8226; Github Code</p></a>
            </div>
          </div>
          <div className={style.techWrapper}>
            <p className={style.tech}>Javascript</p>
            <p className={style.tech}>React</p>
            <p className={style.tech}>CSS</p>
          </div>
        </div>
        {/* Tenzies */}
        <div className={style.projectWrapper}>
          <Project />
          <div className={style.title}>
            <h4 className={style.myProjectTitle}>Tenzies</h4>
            <div>
              <Link href='/Tenzies'>
                <a><p className={style.titleLink}>&#8226; Live Site</p></a>
              </Link>
              <a href='https://github.com/HamadNabizada/fun-with-ai' target='_blank' rel="noopener noreferrer"><p className={style.titleLink}>&#8226; Github Code</p></a>
            </div>
          </div>
          <div className={style.techWrapper}>
            <p className={style.tech}>Javascript</p>
            <p className={style.tech}>React</p>
            <p className={style.tech}>Figma</p>
          </div>
        </div>
      </div>
    </div>
  )
}
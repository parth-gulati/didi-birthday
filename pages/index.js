import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Wynaut from '../public/wynaut.png'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import Form from '../components/Form'
import Result from '../components/Result'
import data from '../misc/data'

export default function Home() {
  
  const [questionPointer, setQuestionPointer] = useState(0)
  const [points, setPoints] = useState(0)
  const [displayHeading, setDisplayHeading] = useState(false)
  const [displayQuiz, setDisplayQuiz] = useState(false)
  const [displayPara, setDisplayPara] = useState(false)
  const [displaySub, setDisplaySub] = useState(false)
  const [displayPoints, setDisplayPoints] = useState(false)

  const ASCII_ART = `
  
  _,addba,
  _,adP"'\  "Y,                       _____
,P"  d"Y,  \  8                  ,adP"""""""Yba,_
,d" /,d' \`Yb, ,P'              ,adP"'           \`""Yba,
d'   d'    \`"""         _,aadP"""""""Ya,             \`"Ya,_
8  | 8              _,adP"'                              \`"Ya,
8    I,           ,dP"           __              "baa,       "Yb,
I,   Ya         ,db___           \`"Yb,      a       \`"         \`"b,
\`Y, \ Y,      ,d8888888baa8a,_      \`"      \`"b,                 \`"b,
\`Ya, \`b,    d8888888888888888b,               "ba,                \`8,
 "Ya,\`b  ,d8888888888888888888,   d,           \`"Ya,_             \`Y,
   \`Ybd8d8888888888888888888888b, \`"Ya,            \`""Yba,         \`8,
      "Y8888888888888888888888888,   \`Yb,               \`"Ya        \`b
       d8888888888888888888888888b,    \`"'            ,    "b,       8,
       888888888888888888888888888b,                  b      "b      \`b
       8888888888888888888888888888b    b,_           8       "       8
       I8888888888888888888888888888,    \`"Yb,_       \`b,             8
        Y888888888888888888888888888I        \`Yb,       8,            8
         \`Y8888888888888888888888888(          \`8,       "b     a    ,P
           "8888""Y88888888888888888I           \`b,       \`b    8    d'
             "Y8b,  "Y888PPY8888888P'            \`8,       P    8    8
                 \`b   "'  __ \`"Y88P'    b,        \`Y       "    8    8
                ""|      =""Y'   d'     \`b,                     8    8
                 /         "' |  I       b             ,       ,P   ,P
                (          _,"  d'       Y,           ,P       "    d'
                 |              I        \`b,          d'            8
                 |              I          "         d,d'           8
                 |          ;   \`b                  dP"          __,8_
                 |          |    \`b                d"     _,,add8888888
                 ",       ,"      \`b              d' _,ad88888888888888
                   \,__,a"          ",          _,add888888888888888888
                  _,aa888b           I       ,ad88888888888888888888888
              _,ad88888888a___,,,gggd8,   ,ad88888888888888888888888888
           ,ad888888888888b88PP""''  Y  ,dd8888888888888888888888888888
        ,ad8888888888888888'         \`bd8888888888888888888888888888888
      ,d88888888888888888P'         ,d888888888888888888888888888888888
    ,d888888888888888888"         ,d88888888888888888888888888888888888
  ,d8888888888888888888P        ,d8888888888888888888888888888888888888
,d888888888888888888888b,     ,d888888888888888888888888888888888888888
,8888888888888888888888888888=888888888888888888888888888888888888888888
d888888888888888888888888888=88888888888888888888888888888888888888888888
d88888888888888888888888888=8888888888888888888888888888888888888888888888
d8888888888888888888888888=888888888888888888888888888888888888888888888888
d888888888888888888888888=88888888888888888888888888888888888888888888888888
,888888888888888888888888=888888888888888888888888888888888888888888888888888
d8888888888888888888888=88888888888888888888888888888888888888888888888888888
,8888888888888888888888=888888888888888888888888888888888888888888888888888888
d888888888888888888888=88888888888888888888888888888888888888888  Normand   88
888888888888888888888=888888888888888888888888888888888888888888  Veilleux  88
888888888888888888888=88888888888888888888888888888888888888888888888888888888


                Thou Have Stumbled Upon an Easter Egg
                Is it a young woman, or just an old shit?

`

  useEffect(()=>{
    console.clear();
    console.log(ASCII_ART)
  })

  const resetGame=()=>{
    window.location.reload()
  }

  const answeredCorrect = () => {
    setTimeout(()=>{
      setDisplayQuiz(false)
    },500)
    setTimeout(()=>{
      setDisplayQuiz(true)
    },1500)
    setTimeout(()=>{
      setQuestionPointer(questionPointer + 1);
      setPoints(points + 1);
    },1000)
  }

  const answeredIncorrect = () => {
    setTimeout(()=>{
      setDisplayQuiz(false)
    },500)
    setTimeout(()=>{
      setDisplayQuiz(true)
    },1500)
    setTimeout(()=>{
      setQuestionPointer(questionPointer + 1);
    },1000)
  }

  useEffect(()=>{
    setDisplayHeading(true)
    setTimeout(()=>{
      setDisplayPara(true)
    }, 1000)
    setTimeout(()=>{
      setDisplaySub(true)
    }, 2000)
    setTimeout(()=>{
      setDisplayQuiz(true)
      setDisplayPoints(true)
    },3000)
  })

  const displayHeadingClass = displayHeading ? styles.fadeIn : styles.fadeOut
  const displayParaClass = displayPara ? styles.fadeIn : styles.fadeOut
  const displaySubClass = displaySub ? styles.fadeIn : styles.fadeOut
  const displayQuizClass = displayQuiz ? styles.fadeIn : styles.fadeOut
  const displayPointsClass = displayPoints ? styles.fadeIn : styles.fadeOut
  
  return (
    <>
    {points < 5 &&
    
    (<div className={styles.container}>
      <Head>
        <title>Issue #1</title>
        <meta name="description" content="Generated by Pattypan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {questionPointer<=4 &&
        (<>
        <h1 className={[styles.title, displayHeadingClass].join(' ')}>
          Welcome <a href="https://www.urbandictionary.com/define.php?term=chudail">Isha Didi</a>
        </h1>

        <p className={[styles.description, displayParaClass].join(' ')}>
          Let&apos;s get started
        </p>
        </>)
        }
        {questionPointer<=4 &&
        (<div className={[styles.imageContainer, displaySubClass].join(' ')}>
        <h2 className={styles.titleh2}>
          Score <span>5</span> points because </h2><Image className={styles.image} src={Wynaut} height={80} width={80} title="Wynaut"/> 
        
        </div>)}

        {points<5 && <h3 className={[styles.heading3, displayPointsClass].join(' ')}>Points: {points} / 5</h3>}
        <div className={displayQuizClass}>

        {questionPointer<=4 && <Quiz questionData={data[questionPointer]} answeredCorrect={answeredCorrect} answeredIncorrect={answeredIncorrect}/>}
        </div>

        {questionPointer>4 && <Result points={points} resetGame={resetGame}/>}

      </main>

      <footer className={styles.footer}>
          
      </footer>
    </div>)}
    {points === 5 && <Form/>}
    </>
  )
}

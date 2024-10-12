import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Quiz({questionData, answeredCorrect, answeredIncorrect}) {

    const [answer1Class, setAnswer1Class] = useState(styles.card)
    const [answer2Class, setAnswer2Class] = useState(styles.card)
    const [answer3Class, setAnswer3Class] = useState(styles.card)
    const [answer4Class, setAnswer4Class] = useState(styles.card)
    const [showError, setShowError] = useState(false)
    const [showFunny, setShowFunny] = useState(false)

    useEffect(()=>{
        setShowError(false)
        setShowFunny(false)
        setAnswer1Class(styles.card)
        setAnswer2Class(styles.card)
        setAnswer3Class(styles.card)
        setAnswer4Class(styles.card)
    },[questionData])


    const selected1Answer = (e) =>{
        if(questionData.answer === 'All'){
            setShowFunny(true)
        }
        if(e.target.textContent === questionData.answer || questionData.answer === 'All'){
            setAnswer1Class(styles.correctCard)
            answeredCorrect()
        }
        else{
            setAnswer1Class(styles.incorrectCard)
            answeredIncorrect()
            setShowError(true)
        }
    }

    const selected2Answer = (e) =>{
        if(questionData.answer === 'All'){
            setShowFunny(true)
        }
        if(e.target.textContent === questionData.answer || questionData.answer === 'All'){
            setAnswer2Class(styles.correctCard)
            answeredCorrect()
        }
        else{
            setAnswer2Class(styles.incorrectCard)
            answeredIncorrect()
            setShowError(true)
        }
    }

    const selected3Answer = (e) =>{
        if(questionData.answer === 'All'){
            setShowFunny(true)
        }
        if(e.target.textContent === questionData.answer || questionData.answer === 'All'){
            setAnswer3Class(styles.correctCard)
            answeredCorrect()
        }
        else{
            setAnswer3Class(styles.incorrectCard)
            answeredIncorrect()
            setShowError(true)
        }
    }

    const selected4Answer = (e) =>{
        if(questionData.answer === 'All'){
            setShowFunny(true)
        }
        if(e.target.textContent === questionData.answer || questionData.answer === 'All'){
            setAnswer4Class(styles.correctCard)
            answeredCorrect()
        }
        else{
            setAnswer4Class(styles.incorrectCard)
            answeredIncorrect()
            setShowError(true)
        }
    }

    return (
        <>
        <p className={styles.description}>Q. {questionData.question}</p>
        <div className={styles.grid}>
          <div className={answer1Class} onClick={(e)=>selected1Answer(e)}>
            <h2>{questionData.options[0]}</h2>
          </div>

          <div className={answer2Class} onClick={(e)=>selected2Answer(e)}>
            <h2>{questionData.options[1]}</h2>
          </div>

          <div className={answer3Class} onClick={(e)=>selected3Answer(e)}>
            <h2>{questionData.options[2]}</h2>
          </div>

          <div className={answer4Class} onClick={(e)=>selected4Answer(e)}>
            <h2>{questionData.options[3]}</h2>
          </div>
        </div>
        {showError && <p className={styles.error}>{questionData.error}</p>}
        {showFunny && <p className={styles.funny}>No incorrect answers here</p>}
        </>
    )
}

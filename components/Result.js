import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Form from './Form'

export default function Result({points, resetGame}) {

    const [show, setShow] = useState(false)
    
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1200)
    },[])

    const showClass = show ? styles.fadeIn : styles.fadeOut
    
    return <div className={[styles.title, showClass].join(' ')}><a onClick={resetGame}>Try again?</a></div>
  
}

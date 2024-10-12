import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Form() {

  const [displayForm, setDisplayForm] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
        setDisplayForm(true)
    },1200)
  },[])

  const displayFormClass = displayForm ? styles.fadeIn : styles.fadeOut

  const handleChange = (e)=>{
    setInput(e.target.value)
    if(error){
      setError(false)
      setErrorMessage('')
    }
  }

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaste = (e) =>{
    setError(true)
    setErrorMessage("Gotta type it chigga, no cheating")
    e.preventDefault();
  }

  const checkInput = () =>{
    if(input==="Mera bhai parmaatma hai wah kya baat hai maja hi aa gaya tadow"){
      setError(false);
      window.location.href =
        "https://www.youtube.com/watch?v=t3x-eu9R-qo&ab_channel=LAUGHCHECKPOINT";
      return;
    }
    if(input.length>0 && "Mera bhai parmaatma hai wah kya baat hai maja hi aa gaya tadow".includes(input)){
        setError(true);
        setErrorMessage("Lazy");  
        return;  
    }
    setError(true);
    setErrorMessage("Cmon");
  }

  return (
    <div className={styles.container}>
      <main className={[styles.main, displayFormClass].join(' ')}>
      <div className={styles.circularImageWrapper}>
      <Image 
        src="/didi.JPG" // Make sure the image is in the public directory or import it properly
        alt="Resized Circular Image"
        layout="intrinsic"
        width={140}  // Adjust these numbers according to the required size
        height={180}
        className={styles.circularImage} // Add circular class for styling
      />
    </div>
        <h1 className={styles.title2}>
          Happy Birthday <a href="https://www.urbandictionary.com/define.php?term=Queen">Queen</a>
        </h1>

        <p className={styles.description}>
          Enter 	&quot;Mera bhai parmaatma hai wah kya baat hai maja hi aa gaya tadow&quot; in the input box below
        </p>

        <div className={styles.grid}>
        <TextField
          onPaste={handlePaste}
          className={styles.inputval}
          fullWidth={true}
          id="standard-helperText"
          label={error? ":(" : ":)"}
          error={error}
          helperText={error? errorMessage : undefined}
          value={input}
          onChange={handleChange}
        />
        </div>
        <div className={styles.grid}>
        <Button title="Because Enter Key won't work" color="primary" onClick={(e)=>{checkInput()}}>Yeppers</Button>
        
        </div>
      </main>
    </div>
  )
}

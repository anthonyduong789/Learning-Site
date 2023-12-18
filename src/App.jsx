import React, { useEffect, useState } from 'react'
import './App.css'
import ResponsiveNavbar from './components/ResponsiveNavbar'
import GapTimer from './components/GapTimer'

function App() {

  const [savedTimeLeft, setSavedTimeLeft] = useState(15);
  const [savedTimeNextRest, setSavedTimeNextRest] = useState(5);
  const [savedTimePause, setSavedTimePause] = useState(5);


  const [timerLeft, setTimerleft] = useState(savedTimeLeft);
  const [timeNextRest, setTimerNextRest] = useState(savedTimeNextRest);
  const [timePause, setTimePause] = useState(savedTimePause);
  

  const [isRunning, setIsRunning] = useState(false);



  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if(timerLeft == 0){
          setIsRunning(false);
          resetTimer();
        }
        else if(timeNextRest==0 && timePause>0){
          setTimerleft(timerLeft - 1);
          setTimePause(timePause-1);
        }
        else if(timePause==0){
          setTimerNextRest(savedTimeNextRest-1);
          setTimePause(savedTimePause);
          setTimerleft(timerLeft - 1);
          // setTimerNextRest(timeNextRest-1);
        }
        else if(timeNextRest>0){
          setTimerleft(timerLeft - 1);
          setTimerNextRest(timeNextRest-1);
        }
        

      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[isRunning, timerLeft]);





  const toogleTimer = () => {
    
      setIsRunning(!isRunning);
    
  };

  const resetTimer = () => {
    setTimerleft(savedTimeLeft);
    setTimerNextRest(savedTimeNextRest);
    setTimePause(savedTimePause);
    setIsRunning(false);
  };

  

  return (
    <>
    <div className='App'>
    <ResponsiveNavbar />
    <div className='GapDiv'>
    <GapTimer timeLeft={timerLeft} nextRest={timeNextRest} toogleTimer={toogleTimer} pause={timePause} resetTimer={resetTimer} isRunning={isRunning}/>
    
    </div>
    
  
    </div>

    </>
  )
}

export default App

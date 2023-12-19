import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import GapTimer from "./components/GapTimer";
import beepSound from "./assets/beep-06.mp3";

function App() {
  //handles the logic for the settings
  const [savedTimeLeft, setSavedTimeLeft] = useState(1800);
  const [savedTimeNextRest, setSavedTimeNextRest] = useState(180);
  const [savedTimePause, setSavedTimePause] = useState(10);

  // handles the logic for the timer and when it is running
  const [timerLeft, setTimerleft] = useState(savedTimeLeft);
  const [timeNextRest, setTimerNextRest] = useState(savedTimeNextRest);
  const [timePause, setTimePause] = useState(savedTimePause);
  const [isRunning, setIsRunning] = useState(false);

  //playing audio
  const audioRef = useRef()  

  const playAudio = () => {
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }, 1400);
  };

  //handles the logic for the random value
  function generateRandomValue(maxValue) {
    const minValue = 0;
    if (maxValue < minValue) {
      throw new Error("Max value must be greater than 60");
    }
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }


  //logic for running the timer
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (timerLeft == 0) {
          setIsRunning(false);
          playAudio();
          resetTimer();
        } else if (timeNextRest == 0 && timePause > 0) {
          if (timePause == savedTimePause) {
            playAudio();
          }
          setTimerleft(timerLeft - 1);
          setTimePause(timePause - 1);
        } else if (timePause == 0) {
          setTimerNextRest(generateRandomValue(savedTimeNextRest) - 1);
          setTimePause(savedTimePause);
          setTimerleft(timerLeft - 1);
          playAudio();
          // setTimerNextRest(timeNextRest-1);
        } else if (timeNextRest > 0) {
          setTimerleft(timerLeft - 1);
          setTimerNextRest(timeNextRest - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerLeft]);

  const toogleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimerleft(savedTimeLeft);
    setTimerNextRest(generateRandomValue(savedTimeNextRest));
    setTimePause(savedTimePause);
    setIsRunning(false);
  };

  return (
    <>
    
      <div className="App">
      <audio ref={audioRef} src={beepSound} preload="metadata"/>
      {/* <audio ref={audioRef} controls>
        <source src={beepSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
        <ResponsiveNavbar />
        <div className="GapDiv">
          <GapTimer
            timerLeft={timerLeft}
            timeNextRest={timeNextRest}
            toogleTimer={toogleTimer}
            timePause={timePause}
            resetTimer={resetTimer}
            isRunning={isRunning}
            setSavedTimeLeft={setSavedTimeLeft}
            setSavedTimeNextRest={setSavedTimeNextRest}
            setSavedTimePause={setSavedTimePause}
            savedTimeLeft={savedTimeLeft}
            savedTimeNextRest={savedTimeNextRest}
            savedTimePause={savedTimePause}
          />
        </div>
      </div>
    </>
  );
}

export default App;

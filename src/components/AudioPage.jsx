import React from "react";
import "./AudioPage.css";
import fortyHz from "../assets/40hzLogo.png";
import whiteNoise from "../assets/lowLevelWhiteNoise.png";
import fortyHzAudio from "../assets/40HZBinauralBeats.mp3";
import whiteNoiseAudio from "../assets/lowLevelWhiteNoise.mp3";
import { useState, useRef } from "react";

function AudioPage() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(new Audio(fortyHzAudio));

  const [play2, setPlay2] = useState(false);
  const audioRef2 = useRef(new Audio(fortyHzAudio));

  const toggleAudio = () => {
    const audio = audioRef.current;
    const audio2 = audioRef2.current;
    if (!audio2.paused) {
      audio2.pause();
      setPlay2(false)
    }
    if (audio.paused) {
      audio.play();
      setPlay(true)
    } else {
      audio.pause();
      setPlay(false)
    }
  };

  const changeVolume = (e) => {
    const { value } = e.target;
    const volume = Number(value) / 100;
    audioRef.current.volume = volume;
  };

  const toggleAudio2 = () => {
    const audio = audioRef2.current;
    const audio2 = audioRef.current;
    if (!audio2.paused) {
      audio2.pause();
      setPlay(false)
    }


    if (audio.paused) {
      audio.play();
      setPlay2(true)
    } else {
      audio.pause();
      setPlay2(false)
    }
  }

  const changeVolume2 = (e) => {
    const { value } = e.target;
    const volume = Number(value) / 100;
    audioRef2.current.volume = volume;
  }



  return (
    <div class="main">
      <div id="fortyHz" className="fortyHzDivContainer">
        <div class="card">
          <div class="content">
            <div class="image-container">
              <img src={fortyHz} alt="waves" class="image" />

              <div
                className="button"
                onClick={() => {
                  toggleAudio();
                }}
              >
                {play ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                  </svg>
                )}
              </div>
            </div>
            <h1 class="text">40Hz Binural Beats</h1>
            {/* <dl class="description-list">
            <dd class="text">Sound Title</dd>
          </dl> */}
            <div class="volume-control">
              <input
                type="range"
                class="volume-range"
                min={0}
                max={15}
                defaultValue={7.5}
                step={0.1}
                // value={volume}
                onChange={(e) => changeVolume(e)}
              />
              <div class="volume-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="fortyHzDescription">
        Binaural beats are created when you hear two slightly different frequencies in each ear using headphones.<br></br><br></br> Research from 2017 by Colzato found that a 40 Hz binaural beat can enhance concentration and cognitive performance.<br></br><br></br> For optimal results, listen to this beat for 30 minutes before work or learning.

        </p>
      </div>
      <audio ref={audioRef} id="audioPlayer" loop>
        <source src={fortyHzAudio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div id="whiteNoise" className="fortyHzDivContainer">
        <div class="card">
          <div class="content">
            <div class="image-container">
              <img src={whiteNoise} alt="waves" class="image" />

              <div
                className="button"
                onClick={() => {
                  toggleAudio2();
                }}
              >
                {play2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                  </svg>
                )}
              </div>
            </div>
            <h1 class="text">Low Level White Noise</h1>
            <div class="volume-control">
              <input
                type="range"
                class="volume-range"
                min={0}
                max={17}
                defaultValue={8.5}
                step={0.1}
                onChange={(e) => changeVolume2(e)}
              />
              <div class="volume-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="fortyHzDescription">
          Low-level white noise can enhance learning and focus
          individuals, as evidenced by a study. 
          <br></br><br></br>This steady background sound helps minimize distractions and
          maintain concentration by masking disruptive environmental noises.
        
        </p>
      </div>
      <audio ref={audioRef2} id="audioPlayer" loop>
        <source src={whiteNoiseAudio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPage;

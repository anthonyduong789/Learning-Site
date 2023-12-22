import React, { useState, useEffect } from "react";
import infoIcon from "../assets/info-fill.png";
import styled from "styled-components";
import playButton from "../assets/play-fill.png";
import pauseButton from "../assets/pause-fill.png";
import redo from "../assets/arrow-clockwise-fill.png";
import setting from "../assets/sliders-horizontal-fill.png";
import GapInfoPage from "./GapInfoPage";
import RangeSlider from "./Sliders";
import CircularProgressBar from "./CircularProgressBar";

const Heading = styled.div`
  // background: #E9E8E8;
  // padding: 0;
  // margin-top: 50;
  display: flex;
  // width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const HeadingText = styled.h1`
  color: #67729D;
  text-decoration: none;
  font-size: 2.5rem;
  padding: 10px 0 0 0; 
  margin: 0.3rem 0;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const InfoIcon = styled.img`
  margin-top: 0.5rem;
  margin-left: 0.4rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TimerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 25rem;
  // height: 60vh;
  // background: #ffeaea;
  border-radius: 29px;
  //    padding-left: 1rem;
  // padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    height: 100%;
    max-height: 25rem;
  }
`;

const Container = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

`;

const TimeLeftContainer = styled.div`
  width: 100%;

  text-align: left;
  padding-left: 1rem;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }
`;

const TimeLeftText = styled.h1`
  color: black;
  font-family: "Itim", "regular";
  font-weight: 500;
  font-size: 2.7rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  padding: 0;
  margin: 0.3rem;
`;

const PauseContainer = styled.div`
  width: 100%;

  text-align: center;
  margin-top: 1.8rem;
`;

const PauseText = styled.h1`
  color: black;
  font-size: 2rem;
  font-family: "Itim", "regular";
  font-weight: 500;
  margin-right: 2rem;
  @media (max-width: 768px) {
  }
`;

const ControlBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 300px;
  border-radius: 33px;
  justify-content: space-between;
  // border: 0.2rem solid black;
  // align-items: center
  margin-top: 0.4rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    // gap: 3rem;
    width: 80%;
  }
  
`;

const ControlPannel = styled.div`
  width: 33%;
  transition: transform 0.2s, background-color 0.7s; // Smooth transition for the background color
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E6E6E6;
  
  &:active {
    transform: scale(0.8);
    background-color: yellow;

  }
  cursor: pointer;
  &:hover {
    background: #d6d0d0;
    cursor: pointer;
  }
`;

const ControlPannelPng = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

// for the setting part of the code below

const Sliders = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0s;
  // transition: opacity 0.2s;
  cursor: pointer;
  margin-bottom: 0.1rem;

  /* Thumb styles */
  /* Thumb styles for WebKit browsers */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    margin-top: 0px;
    background: white;
    border: 0.2rem solid black;
    cursor: pointer;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  /* Thumb styles for Firefox */
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
    margin-top: -5px;
  }

  /* Thumb styles for Edge */
  &::-ms-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
    margin-top: -5px;
  }

  /* Track styles */
  &::-webkit-slider-runnable-track {
    height: 20px;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      blue 0%,
      blue ${(props) => props.sliderPercentage},
      #ddd ${(props) => props.sliderPercentage},
      #ddd 100%
    );
  }

  &::-moz-range-track {
    height: 20px;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      blue 0%,
      blue ${(props) => props.sliderPercentage},
      #ddd ${(props) => props.sliderPercentage},
      #ddd 100%
    );
  }
  &::-webkit-slider-runnable-track {
    height: 25px;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      blue 0%,
      blue ${(props) => props.sliderPercentage},
      #ddd ${(props) => props.sliderPercentage},
      #ddd 100%
    );
  }
  height: 30px;
`;

const SliderValues = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;
const Value = styled.span`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;



const handleSmoothScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
};

function GapTimer(props) {
  const [play, setPlay] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const [sliderPercentageTotal, setSliderPercentageTotal] = useState("0%");
  const [sliderPercentageNextRest, setSliderPercentageNextRest] =
    useState("0%");
  const [sliderPercentagePause, setSliderPercentagePause] = useState("0%");

  useEffect(() => {
    const percentage = ((props.savedTimeLeft - 600) / (5400 - 600)) * 100;
    setSliderPercentageTotal(`${percentage}%`);

    const percentageNextRest =
      ((props.savedTimeNextRest - 60) / (300 - 60)) * 100;
    setSliderPercentageNextRest(`${percentageNextRest}%`);

    const percentagePause = ((props.savedTimePause - 5) / (25 - 5)) * 100;
    setSliderPercentagePause(`${percentagePause}%`);
  }, []);

  const handleSliderChangeTotal = (event) => {
    const newValue = event.target.value;
    props.setSavedTimeLeft(newValue);
    const percentage =
      ((newValue - event.target.min) / (event.target.max - event.target.min)) *
      100;
    setSliderPercentageTotal(`${percentage}%`);
  };

  const handleSliderChangeEnd = (e) => {
    // setSliderValue(e.target.value);
    props.setSavedTimeLeft(e.target.value);
  };

  const handleSliderChangeNextRest = (event) => {
    const newValue = event.target.value;
    props.setSavedTimeNextRest(newValue);
    const percentage =
      ((newValue - event.target.min) / (event.target.max - event.target.min)) *
      100;
    setSliderPercentageNextRest(`${percentage}%`);
  };

  const handleSliderChangePause = (event) => {
    const newValue = event.target.value;
    props.setSavedTimePause(newValue);
    const percentage =
      ((newValue - event.target.min) / (event.target.max - event.target.min)) *
      100;
    setSliderPercentagePause(`${percentage}%`);
  };

  const goToInfo = () => {
    console.log("go to info");
  };

  const SettingContainer = () => {
    return (
      <>
        {" "}
        <div
          
          style={{
            padding: "30px",
            display: "flex",
            height: "80%",
            flexDirection: "column",
            // alignItems: "space-between",
            // gap: "1rem",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "100%" }}>
            <Sliders
              type="range"
              min="600"
              max="5400"
              step="600"
              value={props.savedTimeLeft}
              // defaultValuev={props.savedTimeLeft}
              onChange={handleSliderChangeTotal}
              // onMouseUp={handleSliderChangeEnd}
              sliderPercentage={sliderPercentageTotal}
            />
            <SliderValues>
              <Value>
                {"10"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"20"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"30"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"40"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"50"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"60"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"70"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"80"}
                <br />
                {"min"}
              </Value>
              <Value>
                {"90"}
                <br />
                {"min"}
              </Value>
            </SliderValues>
          </div>

          <div style={{ width: "100%", marginTop: "5%" }}>
            <Sliders
              type="range"
              min="60"
              max="300"
              step="60"
              value={props.savedTimeNextRest}
              onChange={handleSliderChangeNextRest} //handleSliderChangeNextRest}
              sliderPercentage={sliderPercentageNextRest}
            />
            <SliderValues>
              <Value>1 min</Value>
              <Value>2 min</Value>
              <Value>3 min</Value>
              <Value>4 min</Value>
              <Value>5 min</Value>
            </SliderValues>
          </div>

          <div style={{ width: "100%", marginTop: "5%" }}>
            <Sliders
              type="range"
              min="5"
              max="25"
              step="5"
              value={props.savedTimePause}
              onChange={handleSliderChangePause}
              sliderPercentage={sliderPercentagePause}
            />
            <SliderValues>
              <Value>5 sec</Value>
              <Value>10 sec</Value>
              <Value>15 sec</Value>
              <Value>20 sec</Value>
              <Value>25 sec</Value>
            </SliderValues>
          </div>
        </div>
      </>
    );
  };

  // write me a function that when given seconds, returns a string in the format of mm:ss
  // 1 -> 01:00
  // 60 -> 01:00
  // 61 -> 01:01

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <Container>
        <Heading>
          <HeadingText>Gap Learning Timer</HeadingText>
          <div onClick={goToInfo}>
            <a href="#info">
              <InfoIcon src={infoIcon} alt="info" />
            </a>
          </div>
        </Heading>
        <TimerContainer
          style={{ backgroundColor: showSetting ? "#F0ECE5" : "transparent" }}
        >
          {showSetting ? (
            <SettingContainer />
          ) : (
            <>
              <CircularProgressBar
                savedTimeLeft={props.savedTimeLeft}
                timerLeft={props.timerLeft}
                savedTimePause={props.savedTimePause}
                timePause={props.timePause}
                timeNextRest={props.timeNextRest}
              />
            </>
          )}
        </TimerContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ControlBox >
            <ControlPannel
            style={{borderTopLeftRadius:"33px", borderBottomLeftRadius:"33px"}}
              onClick={() => {
                if (showSetting == false) {
                  props.resetTimer();
                }
              }}
            >
              <ControlPannelPng  src={redo} alt="redo" />
            </ControlPannel>
            <ControlPannel
              className="btn"
              onClick={() => {
                if (showSetting == false) {
                  props.toogleTimer();
                }
              }}
            >
              {props.isRunning ? (
                <ControlPannelPng src={pauseButton} alt="play" />
              ) : (
                <ControlPannelPng src={playButton} alt="pause" />
              )}
            </ControlPannel>
            <ControlPannel
            style={{borderTopRightRadius:"33px", borderBottomRightRadius:"33px"}}
              onClick={() => {
                {
                  setShowSetting(!showSetting);
                  props.resetTimer();
                }
              }}
            >
              <ControlPannelPng src={setting} alt="setting" />
            </ControlPannel>
          </ControlBox>
        </div>

        <div id="info"
          style={{marginBottom:"8vh", marginTop:"2rem", padding: "10px 20px 0px 20px", gap: "0px" }}
        >
          <GapInfoPage />
        </div>
      </Container>
    </>
  );
}

export default GapTimer;

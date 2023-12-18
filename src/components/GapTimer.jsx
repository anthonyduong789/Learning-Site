import React, { useState, useEffect } from "react";
import infoIcon from "../assets/info-fill.png";
import styled from "styled-components";
import playButton from "../assets/play-fill.png";
import pauseButton from "../assets/pause-fill.png";
import redo from "../assets/arrow-clockwise-fill.png";
import setting from "../assets/sliders-horizontal-fill.png";
import GapInfoPage from "./GapInfoPage";
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
  color: black;
  text-decoration: none;
  font-size: 3rem;  

  margin: 1rem 0;
  @media (max-width: 768px) { 
    font-size: 2.2rem;

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
  height: 250px;
  background: #ffeaea;
  border-radius: 29px;
  //    padding-left: 1rem;
  padding-top: 1.5rem;
  @media (max-width: 768px) {
    height: 205px;
  }
`;

const Container = styled.div`
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 2%;
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
  width: 100%;
  // background: #ffeaea;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  gap: 8rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 3rem;
  }
`;

const ControlPannel = styled.div`
  height: 100px;
`;

const ControlPannelPng = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

function GapTimer(props) {
  const [play, setPlay] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const goToInfo = () => {
    console.log("go to info");
  };
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTime((prev) => {
  //         if (prev === 0) {
  //           clearInterval(timer);
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }, []);
  return (
    <>
      <Container>
        <Heading>
          <HeadingText>Gap Learning Timer</HeadingText>
          <div onClick={goToInfo}>
            <InfoIcon src={infoIcon} alt="info" j />
          </div>
        </Heading>
        <TimerContainer>
          {showSetting ?  (null ):( <> <TimeLeftContainer>
            <TimeLeftText>Time Left: {props.timeLeft}</TimeLeftText>
          </TimeLeftContainer>
          <TimeLeftContainer>
            <TimeLeftText>Next Rest:{props.nextRest}</TimeLeftText>
          </TimeLeftContainer>
          <PauseContainer>
            <PauseText>Pause:{props.pause}</PauseText>
          </PauseContainer></>)}
        
        </TimerContainer>
        <ControlBox>
          <ControlPannel onClick={() => {props.resetTimer();}}
           >
            <ControlPannelPng src={redo} alt="redo" />
          </ControlPannel>
          <ControlPannel onClick={() => props.toogleTimer()}>
            {props.isRunning ? (
              <ControlPannelPng src={pauseButton} alt="play" />
            ) : (
              <ControlPannelPng src={playButton} alt="pause" />
            )}
          </ControlPannel>
          <ControlPannel onClick={() => {setShowSetting(!showSetting)}}>
            <ControlPannelPng src={setting} alt="setting" />
          </ControlPannel>
        </ControlBox>
        <GapInfoPage />
      </Container>
    </>
  );
}

export default GapTimer;

import React, { useState } from 'react';
import styled from 'styled-components';

// Define a styled input component
const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  /* Thumb styles */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    border-radius: 50%;
  }

  /* Track styles */
  &::-webkit-slider-runnable-track {
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(to right, blue 0%, blue ${(props) => props.sliderPercentage}, #ddd ${(props) => props.sliderPercentage}, #ddd 100%);
  }

  &::-moz-range-track {
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(to right, blue 0%, blue ${(props) => props.sliderPercentage}, #ddd ${(props) => props.sliderPercentage}, #ddd 100%);
  }
`;

const RangeSlider = (props) => {
  const [value, setValue] = useState(props.value);
  const [sliderPercentage, setSliderPercentage] = useState('0%');

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const percentage = ((newValue - event.target.min) / (event.target.max - event.target.min)) * 100;
    setSliderPercentage(`${percentage}%`);
  };

  return (
    <StyledRangeInput
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={()=>{props.onChange(); handleSliderChange()}}
      sliderPercentage={sliderPercentage} // Pass the percentage as a prop
    />
  );
};

export default RangeSlider;


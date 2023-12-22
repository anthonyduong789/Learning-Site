import React, { useState } from 'react';
import styled from 'styled-components';
import timer from '../assets/timer.png';
import whiteNoiseIcon from '../assets/whiteNoiseIcon.png';
import fortyHzIcon from '../assets/40HzIcon.png';


const Nav = styled.nav`
  background: #E9E8E8;
  position: fixed;

  display: flex;
  width: 100%;
  max-height: 45px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  @media (max-width: 768px) {
    justify-content: flex-end;
`;

const Logo = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2em;
  // max-height: 100px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 35px;
    left: 0;
    background: #E9E8E8;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 1.2em;
  transition: background 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #F0ECE5;
    color: red;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 2.5em;
  cursor: pointer;
  display: none;
  float: right;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ToggleButtonLabel = styled.span`
  display: none;
  margin-left: 9rem;
  @media (max-width: 768px) {
    display: block;
  }
`;


const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [GapTimer, setGapTimer] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      
      
      <ToggleButton onClick={toggleNav}>
        ☰
      </ToggleButton>
      
    
      <NavItems isOpen={isOpen}>
        <NavLink href="#GapTimer" onClick={toggleNav}>Gap Timer<img style={{height: "var(--NavBarIconSize)"}} src={timer} alt="" /></NavLink>
        <NavLink href="#fortyHz" onClick={toggleNav}>40 hz Binural Beats<img style={{height: "var(--NavBarIconSize)"}} src={fortyHzIcon} alt="" /></NavLink>
        <NavLink href="#whiteNoise" onClick={toggleNav}>Low Level White Noise<img style={{height:"var(--NavBarIconSize)"}} src={whiteNoiseIcon}></img></NavLink>
      </NavItems>
    </Nav>
  );
};

export default ResponsiveNavbar;

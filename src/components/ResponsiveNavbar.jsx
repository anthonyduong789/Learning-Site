import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #E9E8E8;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 50px;
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
  transition: background 0.3s;
  &:hover {
    background: #ddd;
    color: #333;
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
  @media (max-width: 768px) {
    display: block;
  }
`;



const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">Logo</Logo>
      <ToggleButton onClick={toggleNav}>
        ☰
      </ToggleButton>
      <NavItems isOpen={isOpen}>
        <NavLink href="#home" onClick={toggleNav}>Gap Timer</NavLink>
        <NavLink href="#news" onClick={toggleNav}>News</NavLink>
        <NavLink href="#contact" onClick={toggleNav}>Contact</NavLink>
        <NavLink href="#about" onClick={toggleNav}>About</NavLink>
      </NavItems>
    </Nav>
  );
};

export default ResponsiveNavbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../public/logo.png'; // Adjust the path as necessary

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><Link to="/Journal">Journal</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

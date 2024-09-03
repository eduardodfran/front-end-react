import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../public/logo.png'; // Adjust the path as necessary

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/journal">Journal</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
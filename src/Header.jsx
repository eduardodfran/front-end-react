import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Eduardo D. Fran</h1>
      <h2 className="header-subtitle">Computer Science Student</h2>
      <p className="header-description">
        Passionate about technology and coding, I am a dedicated Computer Science student with a strong foundation in full stack web development (MERN), desktop development with Java and MySQL, Python, and Linux. Eager to apply my skills and knowledge to real-world projects and contribute to innovative solutions.
      </p>
      <div className="cta-buttons">
        <button className="cta-button primary">Download Resume</button>
        <button className="cta-button secondary">Contact Me</button>
      </div>
    </header>
  );
};

export default Header;
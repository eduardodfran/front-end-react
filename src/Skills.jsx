import React from 'react';
import { FaReact, FaJava, FaLinux } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill">
        <FaReact className="skill-icon" />
        <h3>Full Stack Web Development (MERN)</h3>
        <p>Expertise in MongoDB, Express.js, React, and Node.js</p>
      </div>
      <div className="skill">
        <FaJava className="skill-icon" />
        <h3>Desktop Application Development</h3>
        <p>Proficient in Java and MySQL for robust desktop applications</p>
      </div>
      <div className="skill">
        <FaLinux className="skill-icon" />
        <h3>Linux and System Administration</h3>
        <p>Strong foundation in Linux environments and system management</p>
      </div>
    </div>
  );
};

export default Skills;
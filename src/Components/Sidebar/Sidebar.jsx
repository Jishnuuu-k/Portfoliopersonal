import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="socials" smooth={true} duration={500}>Socials</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

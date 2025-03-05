import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div className="banner parallax">
      <div className="banner-content">
        <div className="profile-image">
          <img src="../../public/images/1177.jpg" alt="Jishnu K" />
        </div>
        
        <div className="banner-text">
          <h1>Jishnu K</h1>
          <h2>MERN Stack Web Developer</h2>
          <p>Full Stack Developer | React Enthusiast | Node.js Specialist</p>
          
          <div className="social-links">
            <a href="https://github.com/Jishnuuu-k " target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jishnu-k-b14841278" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/speedmonn?igsh=MXd6bTJsZWd4YTRpaw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div id='home' className="banner parallax">
      <div className="banner-content">
        <div className="profile-image">
          <img src="../../public/images/1177.jpg" alt="Jishnu K" />
        </div>
        
        <div className="banner-text">
          <h1>Jishnu K</h1>
          <h2>MERN Stack Web Developer</h2>
          <p>Full Stack Developer | React Enthusiast | Node.js Specialist</p>
          
          <div className="social-links">
            <button className="cv-btn">Hire Me</button>
            <a href="hhttps://wa.me/7902286179?text=Hello!%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
import React from "react";
import './App.css'
import { Parallax } from 'react-parallax';

import minions from '../public/images/minions.jpg'
import mountain from '../public/images/mountain.png'

function App() {
  return (
  <div className="App">
    <Parallax bgImage={minions} strength={500} bgImageStyle={{ width: '100%', height: '100%' }}>
    <div  className="banner ">
          <div className="banner-content">
        
              <div className="profile-image">
                <img src="/images/toji.jpeg" alt="Jishnu K" />
              </div>

            
              <div className="banner-text">
                <h1>Jishnu K</h1>
                <h2>MERN Stack Web Developer</h2>
                <p>Full Stack Developer | React Enthusiast | Node.js Specialist</p>

                <div className="social-links">
                  <button className="cv-btn">Hire Me</button>
                  <a href="https://wa.me/7902286179?text=Hello!%20I%20visited%20your%20portfolio!"  target="_blank"  rel="noopener noreferrer">Get In Touch</a>
                </div>
              </div>

          </div>
          <img src={mountain} alt="" className="mountain"/>
      </div>
    </Parallax>


    <Parallax bgImage={minions} strength={500} bgImageStyle={{ width: '100%', height: '100%' }}>
        <div id='about' className="aboutme-container">
      <div className="aboutme-header">
        <h1>About Me</h1>
      </div>
      
      <div className="aboutme-content">
        <div className="aboutme-text">
          <p>
            I am a passionate MERN Stack Web Developer with a strong foundation in building
            scalable and user-friendly web applications. With experience in React, Node.js, and MongoDB,
            I love crafting efficient and visually appealing websites.
          </p>
          <p>
            My journey started with Computer Engineering, where I developed an interest in
            web development and problem-solving. Since then, I have worked on several projects,
            including a table booking system BOOKMYTABLE and an AI-powered assistant Nova.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills. My goal is to
            build innovative solutions that enhance user experiences and solve real-world problems.
          </p>
        </div>
        
        <div className="aboutme-skills-section">
          <h2>Skills</h2>
          <div className="aboutme-skills">
            <div className="skill-item">React</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Git</div>
          </div>
        </div>

        <div className="aboutme-contact-section">
          <h2>Connect With Me</h2>
          <div className="aboutme-contact">
            <a href="mailto:your.email@example.com" className="contact-link">Email</a>
            <a href="https://github.com/yourusername" className="contact-link">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" className="contact-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    </Parallax>


      



  </div>
  );
}

export default App;

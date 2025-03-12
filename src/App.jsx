import React from "react";
import './App.css';
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';
import bgImage from '../public/images/bgImage.jpg'
import toji from '../public/images/toji.jpeg'
import css from '../public/images/css.png'
import express from '../public/images/expressjs.png'
import html from '../public/images/html.png'
import java from '../public/images/java-script.png'
import mongodb from '../public/images/mongodb.png'
import react from '../public/images/react.png'
import nodejs from '../public/images/nodejs.png'
import phone from '../public/images/phone.png'
import mail from '../public/images/mail.png'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import social from '../public/images/social.png'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Parallax
        bgImage={bgImage}
        strength={500}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="main-title">JISHNU K</h1>
            <div className="type-container">
              <TypeAnimation
                sequence={[
                  'MERN STACK DEVELOPER',
                  2000,
                  'FRONTEND SPECIALIST',
                  2000,
                  'BACKEND ENGINEER',
                  2000,
                  'PROBLEM SOLVER',
                  2000
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="typewriter-text"
              />
            </div>
            <div className="cta-container">
              <a href="#about" className="cta-button">DISCOVER</a>
            </div>
          </div>
        </div>
      </Parallax>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={toji} alt="Profile" />
            </div>
            <div className="about-text">
              <p>
                I am a passionate MERN Stack Web Developer with a strong foundation in building scalable and user-friendly web applications. With experience in React, Node.js, and MongoDB, I love crafting efficient and visually appealing websites.
              </p>
              <p>
                My journey started with Computer Engineering, where I developed an interest in web development and problem-solving. Since then, I have worked on several projects, including a table booking system BOOKMYTABLE and an AI-powered assistant Nova.
              </p>
              <p>
                I am always eager to learn new technologies and improve my skills. My goal is to build innovative solutions that enhance user experiences and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Parallax
        bgImage={bgImage}
        strength={300}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <section id="skills" className="skills-section">
          <div className="section-container">
            <h2 className="section-title">SKILLS</h2>
            <div className="skills-container">
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
              <div className="skillbox"></div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">MY PROJECTS</h2>
          <div className="projects-container">
            <div className="project-item">
              <div className="project-image">
                <img src={toji} alt="BOOKMYTABLE" />
              </div>
              <div className="project-info">
                <h3>BOOKMYTABLE</h3>
                <p>A comprehensive table booking system for restaurants .</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">DEMO</a>
                  <a href="#" className="project-link">CODE</a>
                </div>
              </div>
            </div>
            
            <div className="project-item">
              <div className="project-image">
                <img src={toji} alt="Nova AI" />
              </div>
              <div className="project-info">
                <h3>NOVA AI ASSISTANT</h3>
                <p>An intelligent AI-powered assistant that helps users with daily tasks and information.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>AI/ML</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">DEMO</a>
                  <a href="#" className="project-link">CODE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Parallax
        bgImage={bgImage}
        strength={400}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <section id="contact" className="contact-section">
          <div className="section-container">
            <h2 className="section-title">GET IN TOUCH</h2>
            <div className="contact-container">
              <div className="contact-info">
                <p>Ready to start a project or have questions? Reach out!</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <img src={mail} alt="Email" />
                    </div>
                    <p>email@example.com</p>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <img src={phone} alt="Phone" />
                    </div>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <img src={github} alt="GitHub" />
                  </a>
                  <a href="#" className="social-link">
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="#" className="social-link">
                    <img src={social} alt="social" />
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="NAME" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="EMAIL" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="YOUR MESSAGE" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 | DESIGNED & BUILT WITH ATTITUDE</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
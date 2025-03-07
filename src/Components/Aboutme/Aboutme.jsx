import React, { useEffect, useState } from 'react';
import './aboutme.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate <span className="highlight">MERN Stack Web Developer</span> with a strong foundation in building
              scalable and user-friendly web applications. With experience in React, Node.js, and MongoDB,
              I love crafting efficient and visually appealing websites.
            </p>
            <p>
              My journey started with Computer Engineering, where I developed an interest in
              web development and problem-solving. Since then, I have worked on several projects,
              including a table booking system (<span className="highlight">BOOKMYTABLE</span>) and an AI-powered assistant (<span className="highlight">Nova</span>).
            </p>
            <p>
              I am always eager to learn new technologies and improve my skills. My goal is to
              build innovative solutions that enhance user experiences and solve real-world problems.
            </p>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder"></div>
              <div className="image-decoration top-right"></div>
              <div className="image-decoration bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
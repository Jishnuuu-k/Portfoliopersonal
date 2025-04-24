import React, { useState, useEffect } from "react";
import './App.css';
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { SiHyperskill } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import bgImage1 from '../public/images/bgImage1.jpg'
import bgImage2 from '../public/images/bgImage2.jpg'
import bgImage3 from '../public/images/bgImage3.jpg'
import toji from '../public/images/toji.jpeg'
import project1 from '../public/images/project1.png'
import project2 from '../public/images/project2.png'
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
import Whatsapp from "./Components/Whatsapp/Whatsapp";

// Navigation items array for cleaner code
const navItems = [
  { id: 'home', icon: IoIosHome },
  { id: 'about', icon: FcAbout },
  { id: 'Skills', icon: SiHyperskill },
  { id: 'projects', icon: GrProjects },
  { id: 'contact', icon: IoMdContact },
  { id: 'footer', icon: IoMdContact }
];

// Skills data for easier management
const skills = [
  { name: 'HTML', icon: html, color: '#E44D26' },
  { name: 'CSS', icon: css, color: '#1572B6' },
  { name: 'JavaScript', icon: java, color: '#F7DF1E' },
  { name: 'React', icon: react, color: '#61DAFB' },
  { name: 'Node.js', icon: nodejs, color: '#339933' },
  { name: 'Express', icon: express, color: '#000000' },
  { name: 'MongoDB', icon: mongodb, color: '#47A248' },
  { name: 'github', icon: github, color: '#000000' },
];

// Project data for cleaner rendering
const projects = [
  {
    name: "BOOKMYTABLE",
    image: project1,
    description: "A comprehensive table booking system for restaurants.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "https://bookmytablee.netlify.app/",
    codeLink: "https://github.com/Jishnuuu-k/Tablebooking-UI",
    isReverse: false
  },
  {
    name: "MOTO HUB",
    image: project2, // You might want to change this to a proper image
    description: "E-Commerce  website  designed for selling motorcycle accessories online. Users can browse, select, and purchase various bike-related products such as helmets, lights, and riding gear. ",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "https://github.com/Jishnuuu-k/e-commerce",
    codeLink: "https://github.com/Jishnuuu-k/e-commerce-backend",
    isReverse: true
  }
];

function App() {
  const currentYear = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [scrollTimer, setScrollTimer] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Add scroll event listener to track scroll position and control nav visibility
  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Show navigation when scrolling
      setIsNavVisible(true);
      
      // Clear previous timeout if exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to hide navigation after 3 seconds of no scrolling
      scrollTimeout = setTimeout(() => {
        setIsNavVisible(false);
      }, 3000);
      
      // Update last scroll position
      lastScrollTop = scrollTop;
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener and timeout
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://portfolio-pag9.onrender.com/clients/clientmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Whatsapp/>
      {/* NAVBAR - Added animation classes based on visibility state */}
      <div className={`NavigationBar ${isScrolled ? 'transparent' : ''} ${isNavVisible ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="Nav-options-container">
          {navItems.map((item, index) => (
            <div 
              key={item.id}
              className="Navoptions-links" 
              onClick={() => scrollToSection(item.id)}
            >
              <item.icon className="Nav-icons"/>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <Parallax
        bgImage={bgImage1}
        strength={700}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <div className="hero-container" id="home">
          <div className="hero-content">
            <h1 className="main-title">JISHNU K</h1>
            <h3>WEB DEVELOPER</h3>
            <div className="type-container">
              <TypeAnimation
                sequence={[
                  'MERN STACK DEVELOPER',
                  2000,
                  'FRONTEND SPECIALIST',
                  2000,
                  'BACKEND ENGINEER',
                  2000
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="typewriter-text"
              />
            </div>
            <div className="cta-container">
              <a href="#about" className="cta-button">CHECK OUT</a>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Rest of the component remains the same */}
      
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
        bgImage={bgImage2}
        strength={700}
        bgImageStyle={{ height: "100%", width: "100%" }}
      >
        <section id="Skills" className="skills-section">
          <div className="skill-section-container">
            <div className="Skill-wheel">
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                SKILLS
              </motion.h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: `0 10px 25px rgba(0, 0, 0, 0.2)`,
                      borderColor: skill.color
                    }}
                    onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                  >
                    <motion.div 
                      className="skill-icon-container"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    </motion.div>
                    <h3 className="skill-name">{skill.name}</h3>
                    {activeSkill === index && (
                      <motion.div
                        className="skill-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>Advanced proficiency in {skill.name}</p>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress" 
                            initial={{ width: 0 }}
                            animate={{ width: `${85 + Math.random() * 15}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">MY PROJECTS</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`project-item ${project.isReverse ? 'reverse' : ''}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link">DEMO</a>
                    <a href={project.codeLink} className="project-link">CODE</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Parallax
        bgImage={bgImage3}
        strength={700}
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
                    <p>im.jishnuu@gmail.com</p>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">
                      <img src={phone} alt="Phone" />
                    </div>
                    <p>+91 7902286179</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/Jishnuuu-k" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/jishnu-k-b14841278/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/speedmonn?igsh=MXd6bTJsZWd4YTRpaw==" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src={social} alt="Instagram" className="insta"/>
                  </a>
                </div>
              </div>

              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="NAME" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"  
                      placeholder="EMAIL" 
                      required 
                      value={formData.email} 
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      placeholder="YOUR MESSAGE" 
                      required 
                      value={formData.message} 
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="submit_container">
                    <div className="submit_wrapper">
                      <button type="submit" className="submit_btn">Submit</button>
                      <div className="submit_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                          <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Footer */}
      <div className="footer-bottom" id="footer">
        <p className="copyright">© {currentYear} All rights reserved.</p>
        <p className="attribution">
          Designed and Developed with <span className="heart">♥</span> by 
          <a href="https://www.instagram.com/speedmonn?igsh=MXd6bTJsZWd4YTRpaw==" className="instalink" target="_blank" rel="noopener noreferrer"> speedmon</a>
        </p>
      </div>
    </div>
  );
}

export default App;
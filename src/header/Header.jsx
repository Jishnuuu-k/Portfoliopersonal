import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={sticky ? 'navbar sticky' : 'navbar'}>
      <ul className="nav-items">
        <li>
          <a 
            href="#home" 
            className={activeLink === 'home' ? 'active' : ''} 
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'active' : ''} 
            onClick={() => handleLinkClick('about')}
          >
            About me
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeLink === 'projects' ? 'active' : ''} 
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'active' : ''} 
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header
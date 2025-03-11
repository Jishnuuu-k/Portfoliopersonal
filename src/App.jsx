import React from "react";
import './App.css'
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

import bgImage from '../public/images/bgImage.jpg'
import leaf from '../public/images/leaf.png'

function App() {
  return (
  <div className="App">
    <Parallax bgImage={bgImage} strength={200} bgImageStyle={{ height: "100%", width: "100%" }}>
      <div  className="Landingpage-Container">
        <img src={leaf} alt="" className="leaf" />
        <div className="Text-Container">
          <div className="Bitext-Container">
            <h1>JISHHNU K</h1>
            <h3>MEARN STACK WEB DEVELOPER</h3><br />
            <TypeAnimation sequence={['Full Stack Developer . .',1000,'React Enthusiast . .',1000,'Node.js Specialist . .',1000]} wrapper="h2" speed={50} repeat={Infinity} className="Typeanimation"/>
          </div>
        </div>
      </div>
    </Parallax>

    <Parallax bgImage={bgImage} strength={500} bgImageStyle={{ height: "100%", width: "100%" }}>
      <div id='about' className="aboutme-container">
      
      </div>
    </Parallax>
  </div>
  );
}

export default App;

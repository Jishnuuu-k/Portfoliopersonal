import React from 'react'
import Banner from './Components/Banner/Banner'
import Chatnow from './Components/Chatnow/Chatnow'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/Aboutme/Aboutme'
import Projects from './Components/Projects/Projects'
import Socials from './Components/Socials/Socials'

function App() {
  return (
    <div>
      <Chatnow/>
      <Sidebar/>
      <Banner/>
      <About/>
      <Projects/>
      <Socials/>
    </div>
  )
}

export default App
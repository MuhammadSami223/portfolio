import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/Maincontent/Maincontent'
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from '../src/components/portfolio/Portfolio'
import Skills from './components/skills/Skills';
// import {ThemeContext} from './Context'
import { useContext } from 'react';
import { themeContext } from './Context';




function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return(
    <div
      style={{
        background: darkMode?"black":"",
        color:darkMode?"white":""

      }}
    >
    
   

   

 <Navbar />
<MainContent/>
 <Services/>
 <Skills/>
 <Portfolio/>
 <Contact/>
 <Footer/>
 </div>
 )
}
export default App;
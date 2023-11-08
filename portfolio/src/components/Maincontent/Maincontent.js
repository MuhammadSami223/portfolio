import React from 'react'
import './Maincontent.css'
import Typed from 'typed.js';
import Vector1 from '../../images/Vector1.png'
import boy3 from '../../images/boy3.png'
import Vector2 from '../../images/Vector2.png'
import crown from '../../images/crown.png'
import thumbup from '../../images/thumbup.png'
import glassesimoji from '../../images/glassesimoji.png'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Floatingdiv from '../floatingdiv/Flaotingdiv'
import {motion}from 'framer-motion'
import { themeContext } from '../../Context';
import { useContext } from 'react';
function MainContent() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  const el = React.useRef(null);
  const transition = {duration:2 , type:'spring'}
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['web developer', 'Raect js dveloper'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
  
    <div className="container">
<div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6 col-12">
    
        <div className='name-content'>Hy I'm <span>Sami Rasheed</span></div>
     
        
        <div className="App">
        <span className='animation-content' style={{color:darkMode?'white':''}}>And I'm</span>
      <span className='color' ref={el} />
    </div>
        <p className='content-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum laborum cum vel, </p>
            <div>
              <button className="btn">Hire me</button>
              <div className='icons'> 
<a href="https://github.com/MuhammadSami223 "target='blank' className='github'><h1><FaGithub/></h1></a>
<a href="https://github.com/MuhammadSami223 "target='blank' className='github'><h1><FaInstagram/></h1></a>
<a href="https://www.linkedin.com/in/muhammad-sami-b0814027a/ "target='blank' className='github'><h1><FaLinkedin/></h1></a>
          
           
              </div>
            </div>
            </div>
    <div className="col-sm-12 col-md-6 col-lg-6 col-12 boy right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy3} className='man' alt="" />
      <motion.div 
      initial={{left:"7rem",top:"0rem"}}
      whileInView={{left:"0rem"}}
      transition={transition}
  className='crown' >
      <Floatingdiv image={crown} txt1='Web' txt2='Developer' />
      </motion.div>
       
        <motion.img src={glassesimoji} alt="" 
        initial={{left:"33%"}}
        whileInView={{left:"54%"}}
        transition={transition}
        className='glassesemoji'
        />
      <div className="emoji " style={{top:'-10%',left:'-20%' }}>
        <div className="blur box"></div>
        
             
        <div className="blur1 "></div>
      </div>
      
      <motion.div 
      initial={{left:"-10rem",top:"18rem"}}
      whileInView={{left:"0rem"}}
      transition={transition}
      style={{top:'127%',left:'-15%'}}>
      <Floatingdiv image={thumbup} txt1='Best ' txt2='Developer'  style={{color:darkMode?'white':''}}/>
      </motion.div>
      </div>
</div>
    </div>
  )
}

export default MainContent
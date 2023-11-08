import React ,{useState}from 'react'
import './Footer.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaArrowUp} from 'react-icons/fa6'
import Wave from '../../images/wave.png'
function Footer() {

    const [visible, setVisible] = useState(false) 
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 
    
  return (
    <div>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <h3 className='email'>a.sami02234@gmail.com</h3>
        <div className='icons icons1 email'> 
<a href="https://github.com/MuhammadSami223 "target='blank' className='github'><h1><FaGithub/></h1></a>
<a href="https://github.com/MuhammadSami223 "target='blank' className='github'><h1><FaInstagram/></h1></a>
<a href="https://github.com/MuhammadSami223 "target='blank' className='github'><h1><FaLinkedin/></h1></a>
          

              <button  className='scrolltop' onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}}>
              <h3 className='span'> < FaArrowUp/></h3> 
              </button>
           
              </div>
    </div>

  )
}

export default Footer
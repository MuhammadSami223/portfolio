import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import boy2 from '../../images/boy2.jpeg'
import Toggle from '../Toggle/Toggle'
import { useContext } from 'react'
import { themeContext } from '../../Context'


function Navbar() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div><nav className="navbar navbar-expand-lg text-center ">
    <div className="container-fluid">
      <Link spy={true} to={Navbar} smooth={true} activeClass='activeClass'>
<a className="navbar-brand" href="#">
  <div className='img-logo' >
<img className='logo' src={boy2} />
<span>Sami</span>
  </div>
<Toggle/>

</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav list-style me-auto mb-2 mb-lg-0" >
          <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'>
          <li className="nav-item nav-margin" >
            <a className="nav-link active" aria-current="page" href="#" style={{color:darkMode?'white':''}}>Home</a>
          </li>
          </Link>
          <Link spy={true} to="Services" activeClass='activeClass'>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="Services" style={{color:darkMode?'white':''}}>Services</a>
          </li>
          </Link>
          <Link spy={true} to="skills" activeClass='activeClass'>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{color:darkMode?'white':''}}>Skills</a>
          </li>
          </Link>
          <Link spy={true} to="portfolios"activeClass='activeClass'>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{color:darkMode?'white':''}}>Portfolio</a>
          </li>
          </Link>
         
          
        </ul>
   <div>
   <Link spy={true} to="contact"activeClass='activeClass'>
    <button className="btn navbar1">Contact Us</button>
    </Link>
   </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar
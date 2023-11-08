import React from 'react'
import {FaRegMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'
import './Toggle.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';


function Toggle() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  const handleClick =()=>{
  theme.dispatch({type:'toggle'})
  }
  return (
    <div className='toggle' onClick={handleClick} >
      <div className='moon'>
      <FaSun/>
      </div>
      <div className='sun'>
<FaRegMoon/>
      </div>
      <div className='t-button'style={darkMode?{left:"6px"}:{right:"30px"}}>
j
      </div>
    </div>
  )
}

export default Toggle

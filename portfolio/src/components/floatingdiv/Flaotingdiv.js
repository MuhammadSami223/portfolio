import React from 'react'
import './Floatingdiv.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
function Floatingdiv({image,txt1,txt2}) {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div>
        <div className="floatingdiv" style={{color:darkMode?'white':''}}>
            <img src={image} alt="" />
            <span style={{color:darkMode?'black':''}}>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    </div>
  )
}

export default Floatingdiv
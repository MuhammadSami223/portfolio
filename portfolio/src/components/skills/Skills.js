import React from 'react'
import './Skills.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Skills() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    
    <div>
        <div className="skills"  style={{color:darkMode?'white':''}}>
            <h1>My Skills</h1>
            <li>
                <h3>Html

                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h3>Css
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="Css"></span></span>
            </li>
            <li>
                <h3>Javascript
                <span className='percentage javapercentage'>90%</span>
                </h3>
                    <span className="bar"><span className="Javascript"></span></span>
            </li>
            <li>
                <h3>React
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="React"></span></span>
            </li>
        </div>
        <div className="skills1"  style={{color:darkMode?'white':''}}>
          
            <li>
                <h3>Html
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h3>Css
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="Css"></span></span>
            </li>
            <li>
                <h3>Javascript
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="Javascript"></span></span>
            </li>
            <li>
                <h3>React
                <span className='percentage'>90%</span>
                </h3>
                    <span className="bar"><span className="React"></span></span>
            </li>
        </div>
    </div>
  )
}

export default Skills
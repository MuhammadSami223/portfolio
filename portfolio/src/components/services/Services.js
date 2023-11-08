import React from "react";
import "./Services.css";
import {motion}from 'framer-motion'
import { useContext } from "react";
import { themeContext } from "../../Context";
// import Resume from "./resume.pdf";
function Services() {
  const transition = {duration:2 , type:'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="container" id="Services">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <div className="name-content ">
           <span>My Awesome</span> 
          <h1 className="heading-service name">Services</h1>
          </div>
          <p className="service-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          </p>
          <div>
            {/* <a href={Resume} download> */}
              <button className="btn">Download CV</button>
            {/* </a> */}
          </div>
            {/* <div className="blur2"style={ { background:"var:(--purple)"}}></div> */}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <motion.div initial={{left:"63%"}}
            whileInView={{left:"54%"}}
            transition={transition}
            className="card"
            style={{color:darkMode?'white':''}}>
          <h2>Mern Stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicin Dolorem ratione
            rerum a.
          </p>
          <button className="service-btn">Learn more</button>
            </motion.div>
            <div className="card1">
          <h2>Mern Stack</h2>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicin Dolorem ratione
            rerum a.
          </p>
          <button className="service-btn">Learn more</button>
            </div>
            <div className="card1">
          <h2>Mern Stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicin Dolorem ratione
            rerum a.
          </p>
          <button className="service-btn">Learn more</button>
            </div>
            <motion.div
            initial={{left:"43%"}}
            whileInView={{left:"54%"}}
            transition={transition}
            className="card2">
          <h2> Stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicin Dolorem ratione
            rerum a.
          </p>
          <button className="service-btn">Learn more</button>
            </motion.div>
          
           
        </div>
      </div>
    </div>
  );
}

export default Services;
import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
// import portfolio3 from "../../images/portfolio3.png";
import {FaArrowUpRightFromSquare} from 'react-icons/fa6'

function Portfolio() {
  return (
    <div>
      <div className="container "id="portfolios">
        <h2 className="portfolio">portfolio</h2>
        <h2 className="projects">Latest project</h2>
        <div className="row">
          <div className="wrapper">
            <div className="image first">
              <img src={portfolio1} alt="" />
              <div className="content">
                <h2>E-commerce-project</h2>
                <p>This is e-coomerce website using Html,Css,Javascript and React</p>
                <div className="icon">
                  <a href="https://frontend-cyan-delta.vercel.app/" target="blank">
<FaArrowUpRightFromSquare/>
                  </a>
                  </div>
              </div>
            </div>
            <div className="image2 first">
              <img src={portfolio2} alt="" />
              <div className="content">
                <h2>E-commerce-project</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="icon">
                  <FaArrowUpRightFromSquare/>
                  </div>
              </div>
            </div>
            <div className="image3 first">
              <img src={portfolio2} alt="" />
              <div className="content">
                <h2>E-commerce-project</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="icon">
                  <FaArrowUpRightFromSquare/>
                  </div>
              </div>
            </div>
           
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
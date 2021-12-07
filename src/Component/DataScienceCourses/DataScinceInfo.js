import React from "react";
// icons
import { faStar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import './style.css'
// img
import img1 from "./dataImage/img1.png";


const DataScinceInfo = () => {
  return (
     <div className="info">
      <div className="container">
        <div className="row">
          <div className="texts col-lg-6">
            <h1> Data science</h1>
            <span>
              <FontAwesomeIcon icon={faUserFriends} /> 1190{" "}
            </span>  <span className="ml-4 pl-4">
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41",marginLeft:"10px",fontSize:"20px" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#4785f1" }} />
            </span>  
            <p className="lower">by : eren yuger __ last update :31/10/2021</p>
        
              <p className="lower-text-p">
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills .
            </p>

          
          </div>
          <div style={{ padding: "30px" }} className="col-lg-4 Beginner-info">
            <div className="  mt-4">
              <img src={img1} />
              <h3>
                <span> start</span> learning now and get Discount{" "}
                <span> 40% </span> for all courses of{" "}
                <span>data science </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default DataScinceInfo;

import React from "react";
// style
import './style.css';
// icons
import { faStar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// img
import img1 from './images/img1.png'

const GameDeveloInfo = () => {
  return (
    <div className="info-game">
      <div className="container">
        <div className="row">
          <div className="texts col-lg-6">
            <h1> game development</h1>
            <span>
              <FontAwesomeIcon icon={faUserFriends} /> 11,290
            </span>
            <span className="ml-4 pl-4">
              <FontAwesomeIcon
                icon={faStar}
                style={{
                  color: "#db2d41",
                  marginLeft: "10px",
                  fontSize: "20px",
                }}
              />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#4785f1" }} />
            </span>
            <p className="lower">by : john smith __ last update :31/10/2021</p>
            <p className="lower-text-p col-lg-12">
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills .
            </p>
          </div>
          <div
            style={{ padding: "30px", marginTop: "-16px" }}
            className="col-lg-4 Beginner-info"
          >
            <img src={img1} style={{ width: "40%" }} />
            <h3>
              <span> start</span> learning now and get Discount
              <span> 40% </span> for all courses of
              <span>web development </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDeveloInfo;

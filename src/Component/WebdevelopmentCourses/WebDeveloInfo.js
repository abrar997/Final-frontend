import React from "react";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const WebDeveloInfo = () => {
  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="texts col-lg-6">
            <h6>skill path to </h6>
            <h1> web development</h1>
            <p className="info-text">
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript. Then, master the back-end and
              APIs to round out your full-stack skills .
            </p>
            <p className="lower">by : john smith __ last update :31/10/2021</p>
          </div>
          <div className="Beginner-info col-lg-4 card">
            <h4>Beginner way to start learn frontend web development </h4>
            <div className="basics">
              <h6>Beginner level </h6>
              <p>HTML,CSS,JavaScript </p>
              <h6>mid level </h6>
              <p>HTML5,CSS3,Bootstrap,OOP,API,React basics </p>
              <h6>advenced level </h6>
              <p>React,Hooks,Redux,Sass,Authentication,Ecommerece </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloInfo;

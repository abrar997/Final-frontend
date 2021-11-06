import React, { Component } from "react";
import Webdevelopment from "./Allcourses/Webdevelopment/Webdevelopment";
import DataScience from "./Allcourses/DataScience/DataScience";
import MobileDevelopment from "./Allcourses/MobileDevelopment/MobileDevelopment";
import GameDevelopment from "./Allcourses/GameDevelopment/GameDevelopment";
import "./Course.css";

export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      div: <Webdevelopment />,
    };
  }
  handleClick = () => {
    this.setState({
      div: <Webdevelopment />,
    });
  };
  handleClick1 = () => {
    this.setState({
      div: <DataScience />,
    });
  };
  handleClick2 = () => {
    this.setState({
      div: <MobileDevelopment />,
    });
  };
  handleClick3=()=>{
    this.setState({
      div:<GameDevelopment />
    })
  }

  render() {
    return (
      <div id="courses">
        <div className="Courses" >
          <div className="container">
            <h4>Courses... </h4>
            <h1>A broad selection of courses</h1>
            <h5>
              Choose from 10,000 online video courses with new additions
              published every month
            </h5>

            <div className="buttons">
              {/* buttons for courses good job !!! */}
              <button onClick={this.handleClick}>web development </button>
              <button onClick={this.handleClick1}>data science</button>
              <button onClick={this.handleClick2}>Mobile development</button>
              <button onClick={this.handleClick3}>Game development</button>
            </div>
            <div className="conatin">{this.state.div} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;

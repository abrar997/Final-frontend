import React, { useState } from "react";
// comp
import Webdevelopment from "./Allcourses/Webdevelopment/Webdevelopment";
import DataScience from "./Allcourses/DataScience/DataScience";
import MobileDevelopment from "./Allcourses/MobileDevelopment/MobileDevelopment";
import GameDevelopment from "./Allcourses/GameDevelopment/GameDevelopment";
// styel
import "./Course.css";

const Courses = () => {  
  const [div, setDiv] = useState(<Webdevelopment />);
  const handleClick = () => {
    setDiv(<Webdevelopment />);
  };
  const handleClick1 = () => {
    setDiv(<DataScience />);
  };

  const handleClick2 = () => {
    setDiv(<MobileDevelopment />);
  };
  const handleClick3 = () => {
    setDiv(<GameDevelopment />);
  };

  return (
    <div id="courses">
      <div >
        <div className="Courses">
          <div className="container">
            <div data-aos="fade-right"
              > <h4>Courses... </h4>
              <h1>A broad selection of courses</h1>
              <h5>
                Choose from 10,000 online video courses with new additions
                published every month
              </h5>
            </div>
            <div className="buttons">
              {/* buttons for courses good job !!! */}
              <button onClick={handleClick}>web development </button>
              <button onClick={handleClick2}>Mobile development</button>
              <button onClick={handleClick3}>Game development</button>
              <button onClick={handleClick1}>data science</button>
            </div>
            <div className="conatin">{div} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

//  export class Courses extends Component {
//    constructor(props) {
//      super(props);
//      state = {
//        div: <Webdevelopment />,
//      };
//    }
//    handleClick = () => {
//      setState({
//        div: <Webdevelopment />,
//      });
//    };
//    handleClick1 = () => {
//      setState({
//        div: <DataScience />,
//      });
//    };
//    handleClick2 = () => {
//      setState({
//        div: <MobileDevelopment />,
//      });
//    };
//    handleClick3=()=>{
//      setState({
//        div:<GameDevelopment />
//      })
//    }

//    render() {
//      return (
//        <div id="courses">
//          <div className="Courses">
//            <div className="container">
//              <h4>Courses... </h4>
//              <h1>A broad selection of courses</h1>
//              <h5>
//                Choose from 10,000 online video courses with new additions
//                published every month
//              </h5>

//              <div className="buttons">
//                {/* buttons for courses good job !!! */}
//                <button onClick={handleClick}>web development </button>
//                <button onClick={handleClick2}>Mobile development</button>
//                <button onClick={handleClick3}>Game development</button>
//                <button onClick={handleClick1}>data science</button>
//              </div>
//              <div className="conatin">{state.div} </div>
//            </div>
//          </div>
//        </div>
//      );
//    }
//  }

//  export default Courses;

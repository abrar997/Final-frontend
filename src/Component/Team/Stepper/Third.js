import React from "react";
import img3 from "./stepperImages/3.png";
import "./Stepper.css";



// third button in stepper
const Third = () => {
  return (
    <div className="firstbutton">
      <div className="container">
        <div className="row ">
          <div className="d-flex ml-4 m-auto" >
            <div className="col-lg-4 textfirst">
              <h4>launch your course </h4>
              <p>
                Gather your first ratings and reviews by promoting your course
                through social media and your professional networks.Your course
                will be discoverable in our marketplace where you earn revenue
                from each paid enrollment.
              </p>
            </div>{" "}
            <div className="col-lg-4 img-third">
              <img src={img3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;

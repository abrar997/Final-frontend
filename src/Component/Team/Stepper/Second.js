import React from "react";
import './Stepper.css';
// img
import img2 from './stepperImages/2.png';


// second button from stepper
const Second = () => {
  return (
    <div className="firstbutton">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 textfirst">
            <h4>Record your video </h4>
            <p>
              Use basic tools like a smartphone or a DSLR camera. Add a good
              microphone and you’re ready to start.If you don’t like being on
              camera, just capture your screen. Either way, we recommend two
              hours or more of video for a paid course.
            </p>
          </div>
          <div className="col-lg-6">
            
            <img src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./Stepper.css";
import img1 from "./stepperImages/1.png";

// first button in stepper
const First = () => {
  return (
    <Fragment>
      <div className="firstbutton">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 textfirst">
              <h4>plan your goals </h4>
              <p>
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights
                tool.The way that you teach — what you bring to it — is up to
                you.
              </p>
              {/* <link to="/second"> next </link>  */}
            </div>
            <div className="col-lg-6">
              <img src={img1} />{" "}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default First;

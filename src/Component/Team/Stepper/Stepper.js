import React, { useState } from "react";
import "./Stepper.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
const Stepper = () => {
  const [data, setdata] = useState(<First />);
  const first = () => {
    setdata(<First />);
  };
  const second = () => {
    setdata(<Second />);
  };
  const third = () => {
    setdata(<Third />);
  };

  return (
    <div className="stepper">
      <div className="container">
        <div className="row">
          <h1>How to begin ...! </h1>
          <p>follow steps bellow and you will be instructore . </p>
          <div className="buttons  ">
            <button onClick={first} active>firstly </button>
            <button onClick={second}>secondly </button>
            <button onClick={third}> thirdly </button>
          </div>
          <div>{data} </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

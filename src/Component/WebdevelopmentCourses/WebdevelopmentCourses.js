import React, { useState } from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import WebDeveloInfo from "./WebDeveloInfo";
import StepperComp from "./StepperComp";
import  Comment  from "../Comment/Comment";
const WebdevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <WebDeveloInfo />                  
          <Products />   
          {/* <StepperComp /> */}
          <Comment />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default WebdevelopmentCourses;

import React, { useState } from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import WebDeveloInfo from "./WebDeveloInfo";


const WebdevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <WebDeveloInfo />
          <Products />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default WebdevelopmentCourses;

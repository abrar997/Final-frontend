import React  from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import WebDeveloInfo from "./WebDeveloInfo";
import  Comment  from "../Comment/Comment";
const WebdevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <WebDeveloInfo />                  
          <Products />   
          <Comment />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default WebdevelopmentCourses;
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
          <WebDeveloInfo
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          />
          <Products />
          <Comment data-aos="fade-left"/>
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default WebdevelopmentCourses;

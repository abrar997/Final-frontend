import React from "react";
// react-router
import { BrowserRouter as Router } from "react-router-dom";
// comp
import Products from "./Products/Products";
import Footer from '../Footer/Footer'
import MobileDeveloInfo from "./MobileDeveloInfo";
import Comment from "../Comment/Comment";

const MobileDevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <MobileDeveloInfo />
          <Products />
          <Comment/>
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default MobileDevelopmentCourses;

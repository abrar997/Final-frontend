import React from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../Footer/Footer'
import MobileDeveloInfo from "./MobileDeveloInfo";

const MobileDevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <MobileDeveloInfo />
          <Products />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default MobileDevelopmentCourses;

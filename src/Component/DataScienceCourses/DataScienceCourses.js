import React from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import DataScinceInfo from "./DataScinceInfo";
import Comment from "../Comment/Comment";
const DataScienceCourses = () => {
  return (
    <Router>
      <>
        <div>
          <DataScinceInfo />
          <Products />
          <Comment />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default DataScienceCourses;

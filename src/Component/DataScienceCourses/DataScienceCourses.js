import React from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import DataScinceInfo from "./DataScinceInfo";

const DataScienceCourses = () => {
  return (
    <Router>
      <>
        <div>
          <DataScinceInfo />
          <Products />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default DataScienceCourses;

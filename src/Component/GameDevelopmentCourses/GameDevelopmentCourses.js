import React from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import GameDeveloInfo from "./GameDeveloInfo";

const GameDevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <GameDeveloInfo />
          <Products />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default GameDevelopmentCourses;

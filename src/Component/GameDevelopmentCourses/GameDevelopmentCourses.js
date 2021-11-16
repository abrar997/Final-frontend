import React from "react";
import Products from "./Products/Products";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import GameDeveloInfo from "./GameDeveloInfo";
import Comment from "../Comment/Comment";

const GameDevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <GameDeveloInfo />
          <Products />
          <Comment />
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default GameDevelopmentCourses;

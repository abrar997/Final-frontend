import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Team from './Component/Team/Team'
import { Route,Switch } from "react-router";
import Comment from "./Component/Comment/Comment";
import WebdevelopmentCourses from "./Component/WebdevelopmentCourses/WebdevelopmentCourses";
import Cart from './Component/Cart/Cart'
import { CartProvider } from "react-use-cart";
import MobileDevelopmentCourses from "./Component/MobileDevelopmentCourses/MobileDevelopmentCourses";
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Team} path="/Team" />
          <Route component={Comment} path="/Comment" />
          <Route component={Cart} path="/Cart" />
          <Route
            component={WebdevelopmentCourses}
            path="/WebdevelopmentCourses"
          />
          <Route
            component={MobileDevelopmentCourses}
            path="/MobileDevelopmentCourses"
          />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

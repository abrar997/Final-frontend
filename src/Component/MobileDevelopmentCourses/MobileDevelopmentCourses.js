import Products from "./Products/Products";
import Cart from "../Cart/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import React from 'react'

const MobileDevelopmentCourses = () => {
  return (
    <Router>
      <>
        <div>
          <Products />
        </div>
        <Switch>
          <Route component={Products} path="./" exact />
          <Route component={Cart} path="./Cart" />
        </Switch>
      </>
    </Router>
  );
};

export default MobileDevelopmentCourses;

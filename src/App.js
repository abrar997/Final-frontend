import React, { useState, useEffect, Fragment } from "react";
import {  BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Team from "./Component/Team/Team";
import Comment from "./Component/Comment/Comment";
import WebdevelopmentCourses from "./Component/WebdevelopmentCourses/WebdevelopmentCourses";
import Cart from "./Component/Cart/Cart";
import MobileDevelopmentCourses from "./Component/MobileDevelopmentCourses/MobileDevelopmentCourses";
import GameDevelopmentCourses from "./Component/GameDevelopmentCourses/GameDevelopmentCourses";
import DataScienceCourses from "./Component/DataScienceCourses/DataScienceCourses";
import Home from "./Component/Home/Home";
import app from "./Component/Authentication/firebase";

const auth = app.auth();
const user = auth.currentUser;

const App = () => {
 const [user, setUser] = useState(null);
  useEffect((user) => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="./" exact  />
          <Route component={Team} path="/Team"  />
          <Route component={Comment} path="/Comment"  />
          <Route component={Cart} path="/Cart"  />
          <Route
            component={WebdevelopmentCourses}
            path="/WebdevelopmentCourses"
          />
          <Route
            component={MobileDevelopmentCourses}
            path="/MobileDevelopmentCourses"
          />
          <Route
            component={GameDevelopmentCourses}
            path="/GameDevelopmentCourses"
          />
          <Route component={DataScienceCourses} path="/DataScienceCourses" />
          <Route component={Team} path="/Team" />
        </Switch>
        <div>{user?<Redirect to="/Home" user={user}/>:<Redirect to="/Home" />}</div>
      </Router>
    </CartProvider>
  );
};

export default App;

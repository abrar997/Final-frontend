import React, { useState, useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Route, Switch } from "react-router";
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
import CommnetsRefrence from './Component/Comment/CommnetsRefrence'
import "./App.css";
// firebase authentication
const auth = app.auth();
const user = auth.currentUser;

const App = () => {

  const [contact, setcontact] = useState('')
  const [user, setUser] = useState(null);
  useEffect((user) => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  
  return (
    <CartProvider>
      <Router>
        <Navbar  user={user}/>
        <Switch>
          <Route component={Home} path="./" exact />
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
          <Route
            component={GameDevelopmentCourses}
            path="/GameDevelopmentCourses"
          />
          <Route component={DataScienceCourses} path="/DataScienceCourses" />
          <Route component={Team} path="/Team" />
          <Route component={CommnetsRefrence} path="/CommnetsRefrence" />
        </Switch>
   
      </Router>
    </CartProvider>
  );
};

export default App;

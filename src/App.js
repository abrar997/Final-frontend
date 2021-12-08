import React, { useState, useEffect,Fragment} from "react";
// react-router-dom
import { HashRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
// from library
import { CartProvider } from "react-use-cart";
// comp
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
import Login from "./Component/Authentication/Login/Login";
import Signup from "./Component/Authentication/Signup/Signup";

// firebase authentication
const auth = app.auth();
const user = auth.currentUser;

// main
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
        <Navbar user={user} />
        <Switch>
          <Route component={Home} path="/Home" exact />
          <Route component={Team} path="/Team" />
          <Route component={Comment} path="/Comment" />
          <Route component={CommnetsRefrence} path="/CommnetsRefrence" />
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
          <Route component={Login} path="/Login" />
          <Route component={Signup} path="/Signup" />
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;

//     // "command":"CI=npm run build " ,
// in package json insted  build
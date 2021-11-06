import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Team from './Component/Team/Team'
import { Route,Switch } from "react-router";
import Comment from "./Component/Comment/Comment";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Switch>
          {/* <Route component={Home} path="/Home"  /> */}
          <Route component={Team} path="/Team" />
          <Route component={Comment} path="/Comment" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

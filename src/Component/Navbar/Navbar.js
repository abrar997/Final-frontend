import React, { useState, Fragment } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DropNav from "./DropNav/DropNav";
import { style, menu, span, categ, categs, categs2 } from "./Navstyle";
// comp
import "./Navbar.css";
import Login from "../Home/Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";

import totalUniqueItems from '../Cart/Cart'
const Navbar = () => {
  // as state in class for scroll
  const [colorChange, setColorchange] = useState(false);
  //  for diplay drop nav
  const [showResults, setShowResults] = useState(false); //means initial state of showResults is false =iplay =none

  const handleDisplay = () => setShowResults((showResults) => !showResults);

  // changeNavbarColor function ue in addEventListener
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      // instead of setState
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Fragment>
        <nav className=" navbar-expand-lg " data-aos="fade-down">
          <div className="container-fluid">
            <div className={colorChange ? "navbar colorChange" : "navbar"}>
              {/* logo */}
              <NavLink to="/" className="navbar-brand" href="#">
                code/<span> Mu. </span>
              </NavLink>
              {/* responsive button of navbar */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* dropdown menu categeories */}
              <li className="dropdown  ">
                <button className="dropbtn" style={categ}>
                  categeories
                </button>
                <div className="dropdown-content">
                  <NavLink
                    to="/WebdevelopmentCourses"
                    href="#"
                    activeClassName="dropdown"
                  >
                    web development
                  </NavLink>
                  <NavLink to="/" href="#">
                    data science
                  </NavLink>
                  <NavLink to="/MobileDevelopmentCourses" href="#">
                    mobile development
                  </NavLink>
                  <NavLink to="/" href="#">
                    game development
                  </NavLink>
                </div>
              </li>

              {/* form */}
              <div className="navbar-nav">
                <form className="d-flex form">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="search for any thing ..."
                    aria-label="Search"
                  />
                </form>
              </div>

              {/* log in and sign up */}
              <div
                className="collapse navbar-collapse d-flex "
                id="navbarSupportedContent"
              >
                <NavLink to="/Login" activeClassName="icon ml-3">
                  <button style={categs}>Log in </button>
                </NavLink>

                <NavLink to="/Signup" activeClassName="icon ml-4">
                  <button style={categs2}>Sign up </button>
                </NavLink>

                {/* list of icons right side  */}
                <div className="navbar-nav me-auto">
                  <ul className=" icons">
                    <NavLink to="/">
                      <li>
                        <span style={span}>1</span>
                        <FontAwesomeIcon icon={faHeart} style={style} />
                      </li>
                    </NavLink>
                    <NavLink to="/Cart">
                      <li>
                        <span style={span}>{totalUniqueItems} </span>
                        <FontAwesomeIcon icon={faShoppingBag} style={style} />
                      </li>
                    </NavLink>
                    <NavLink to="/">
                      <li style={{ transition: "all .6s ease-in-out" }}>
                        <FontAwesomeIcon
                          icon={faBars}
                          style={menu}
                          // name of display funtion
                          onClick={handleDisplay}
                        />
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* condition of diplay this nav bar */}
        <div>{showResults ? <DropNav /> : null}</div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={Login} path="/Login" />
          <Route component={Signup} path="/Signup" />
        </Switch>
      </Fragment>
    </>
  );
};

export default Navbar;

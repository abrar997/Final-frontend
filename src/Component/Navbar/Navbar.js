import React, { useState, Fragment } from "react";
// style
import "./Navbar.css";
import { style, menu, span, categ, categs, categs2 } from "./Navstyle";
// react-router-dom
import { NavLink, Route, Switch } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag,faHeart,faBars } from "@fortawesome/free-solid-svg-icons";
// comp
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Home from "../Home/Home";
import DropNav from "./DropNav/DropNav";
import { useCart } from "react-use-cart";

const Navbar = () => {
  // as state in class for scroll
  const [colorChange, setColorchange] = useState(false);
  //  for diplay drop nav
  const [showResults, setShowResults] = useState(false); //means initial state of showResults is false =iplay =none

  const handleDisplay = () => setShowResults((showResults) => !showResults);

  const {
    totalItems,
  } = useCart();

  // changeNavbarColor function ue in addEventListener
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
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
              <NavLink to="/Home" className="navbar-brand" href="#">
                code/<span> Mu. </span>
              </NavLink>
              {/* responsive button of navbar */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon"
                  style={{ backgroundColor: "ButtonFace" }}
                >
                  <FontAwesomeIcon icon={faBars} />{" "}
                </span>
              </button>
              <div
                className="collapse navbar-collapse active"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav responivebar">
                  {/* dropdown menu categeories */}

                    <button
                      className="sub-menu-parent nav-item"
                      tab-index="0"
                      style={categ}
                    >
                      categeories
                      <ul
                        class="sub-menu nav-link"
                        aria-labelledby="navbarDropdown"
                      >
                        <NavLink
                          to="/WebdevelopmentCourses"
                          href="#"
                          activeClassName="dropdown"
                        >
                          web development
                        </NavLink>
                        <NavLink to="/DataScienceCourses" href="#">
                          data science
                        </NavLink>
                        <NavLink to="/MobileDevelopmentCourses" href="#">
                          mobile development
                        </NavLink>
                        <NavLink to="/GameDevelopmentCourses" href="#">
                          game development
                        </NavLink>
                      </ul>
                    </button>

                  {/* form  search input */}
                  <div className="nav-item">
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
                    className="collapse navbar-collapse d-flex  nav-item firebase"
                    id="navbarSupportedContent"
                  >
                    <NavLink to="/Login" activeClassName="icon  ml-3">
                      <button style={categs}>Log in </button>
                    </NavLink>

                    <NavLink to="/Signup" activeClassName="icon sign ml-4">
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
                            <span style={span}> {totalItems}</span>
                            <FontAwesomeIcon
                              icon={faShoppingBag}
                              style={style}
                            />
                          </li>
                        </NavLink>
                        <NavLink to="/Home">
                          <li
                            className="menue"
                            style={{ transition: "all .6s ease-in-out" }}
                          >
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
            </div>
          </div>
        </nav>

        {/* condition of diplay this nav bar */}
        <div>{showResults ? <DropNav /> : null}</div>

        <Switch>
          <Route component={Home} path="/Home" exact />
          <Route component={Login} path="/Login" />
          <Route component={Signup} path="/Signup" />
        </Switch>
      </Fragment>
    </>
  );
};

export default Navbar;

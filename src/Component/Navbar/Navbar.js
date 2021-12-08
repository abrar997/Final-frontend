import React, { useState} from "react";
// style
import "./Navbar.css";
import { style, menu, span, categs, categs2 } from "./Navstyle";
// react-router-dom
import { NavLink,Redirect } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag,faHeart,faBars } from "@fortawesome/free-solid-svg-icons";
// comp
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Home from "../Home/Home";
import DropNav from "./DropNav/DropNav";
import { useCart } from "react-use-cart";

const Navbar = ({ user }) => {
  // as state in class for scroll
  const [colorChange, setColorchange] = useState(false);
  //  for diplay drop nav
  const [showResults, setShowResults] = useState(false); //means initial state of showResults is false =iplay =none

  const handleDisplay = () => setShowResults((showResults) => !showResults);

  const { totalItems } = useCart();

  // changeNavbarColor function ue in addEventListener
  const changeNavbarColor = () => {
    if (window.scrollY >=10) {
      // instead of setState
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <>
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
             
                >
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
              <>
                <div
                  className="collapse navbar-collapse active items"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav responivebar">
                    {/* dropdown menu categeories */}

                    <button
                      className="sub-menu-parent dropdown"
                      tab-index="0"
                      // style={categ}
                    >
                      categeories
                      <ul
                        class="sub-menu nav-link"
                        aria-labelledby="navbarDropdown"
                      >
                        <NavLink
                          to="/WebdevelopmentCourses"
                          href="#"
                          activeClassName="dropdown-item"
                        >
                          web development
                        </NavLink>

                        <NavLink to="/MobileDevelopmentCourses" href="#">
                          mobile development
                        </NavLink>
                        <NavLink to="/GameDevelopmentCourses" href="#">
                          game development
                        </NavLink>
                        <NavLink to="/DataScienceCourses" href="#">
                          data science
                        </NavLink>
                      </ul>
                    </button>

                    {/* form  search input */}
                    <div className="nav-item items">
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
                      className="collapse navbar-collapse d-flex  nav-item firebase items"
                      id="navbarSupportedContent"
                    >
                      <NavLink to="/Login" activeClassName="ico  ml-3">
                        <button style={categs} className="icon-login">
                          Log in{" "}
                        </button>
                      </NavLink>

                      <NavLink to="/Signup" activeClassName="icon sign ml-4">
                        <button style={categs2} className="icon-nv-display">
                          Sign up{" "}
                        </button>
                      </NavLink>

                      {/* list of icons right side  */}
                      <div className="navbar-nav me-auto items">
                        <ul className=" icons">
                          <NavLink to="/Home">
                            <li
                              className="tags icon-nv-display"
                              gloss="add to favourite"
                            >
                              <span style={span}>1</span>
                              <FontAwesomeIcon icon={faHeart} style={style} />
                            </li>
                          </NavLink>
                          <NavLink to="/Cart">
                            <li
                              className="tags-nav mt-4"
                              gloss1={
                                totalItems === 0
                                  ? "your cart is empty start shopping now"
                                  : `your cart contain ${totalItems} courses`
                              }
                            >
                              <span style={span}> {totalItems}</span>
                              <FontAwesomeIcon
                                icon={faShoppingBag}
                                style={style}
                              />
                            </li>
                          </NavLink>
                          <>
                            <li
                              className="menue icon-nv-display"
                              style={{ transition: "all .6s ease-in-out" }}
                            >
                              <FontAwesomeIcon
                                icon={faBars}
                                style={menu}
                                // name of display funtion
                                onClick={handleDisplay}
                                className="menu-icon"
                              />
                            </li>
                          </>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </nav>

        {/* condition of diplay this nav bar */}
        <div>{showResults ? <DropNav /> : null}</div>

        <div>
          {user ? <Redirect to="/Cart" user={user} /> : <Redirect to="/Home" />}
        </div>
      </>
    </>
  );
};

export default Navbar;

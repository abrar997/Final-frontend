import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropNav.css";
const DropNav = () => {
  // as state in class for scroll
  const [display, setColorchange] = useState(false);
  //  for diplay drop nav
  const [showResults, setShowResults] = useState(false); //means initial state of showResults is false =iplay =none

  const handleDisplay = () => setShowResults((showResults) => !showResults);

  // changeNavbarColor function ue in addEventListener
  const changeNavbarColor = () => {
    if (window.scrollY>=9) {
      // instead of setState
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={display ? "navbardrop display" : "navbardrop"}>
        <div className="dropnav">
          <nav className="navbar navbar-expand-lg mb-4 drop">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="container ml-4">
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/Home" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Cart" className="nav-link">
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Comment" className="nav-link">
                        your opinion
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Login" className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Signup" className="nav-link">
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DropNav;

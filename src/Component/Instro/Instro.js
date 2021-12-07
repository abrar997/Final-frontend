import React, { Fragment } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// img
import img1 from "./InstroImage/back 5.png";
// style
import "./Instro.css";

const Instro = () => {
  return (
    <>
      <div className="instru" id="instr">
        <div className="container">
          <div className="row">
            <div className="imege col-lg-6">
              <img src={img1} />
            </div>
            <div className="textsss col-lg-6 " data-aos="fade-up-right">
              <h1>Become an instructors</h1>
              <p>
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>
              <Link to="/Team">
                <button>
                  contact with our instructor and ask what you want...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instro;

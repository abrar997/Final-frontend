import React from "react";
// icons
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import "./Footer.css";

// img
import img1 from "./FooterImages/prog.jpg";
import img2 from "./FooterImages/prog2.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2 brand">
                code/Mu.
              </h5>
              <p className="mb10">
                educational company give student and who want to imporve self
                and successful , your dream will come true just believe in your
                skills you can do it ...
              </p>
            </div>

            <div
              className=" col-sm-4 col-md  col-6 col pl-4 text-footer"
              style={{ marginLeft: "30px" }}
            >
              <h5 className="headin5_amrc col_white_amrc pt2">Company</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#About">who we are ?</a>
                </li>

                <li>
                  <a href="#Opinion">Students say</a>
                </li>
                <li>
                  <Link to="/Team">ask our istructor</Link>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col text-footer">
              <h5 className="headin5_amrc col_white_amrc pt2">Courses</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <Link to="/Cart">cart</Link>
                </li>
                <li>
                  <Link to="/Webdevelopment">web development </Link>
                </li>
                <li>
                  <Link to="/GameDevelopment"> game development</Link>
                </li>
                <li>
                  <Link to="/MobileDevelopment">Mobile development</Link>
                </li>
                <li>
                  <Link to="/DataScience">data science</Link>
                </li>
                <li>
                  <Link to="/Team">Instructore</Link>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col imag ">
              <h5 className="headin5_amrc col_white_amrc pt2">our road</h5>

              <ul className="footer_ul2_amrc d-flex images">
                <li>
                  <img src={img1} />
                </li>
                <li>
                  <img src={img2} />
                </li>
              </ul>
              <h5>your dream will come true </h5>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="text-center mt-4">
            Copyright @2021 | Designed With by{" "}
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "17px",
              }}
            >
              code/Mu.{" "}
            </a>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

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

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Company</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="">who we are ?</a>
                </li>
                <li>
                  <a href="#">our goals</a>
                </li>
                <li>
                  <a href="#">Students say</a>
                </li>
                <li>
                  <a href="#">ask our istructor</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Courses</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="#">Remove Background</a>
                </li>
                <li>
                  <a href="#">web development </a>
                </li>
                <li>
                  <a href="#"> game development</a>
                </li>
                <li>
                  <a href="#">Mobile development</a>
                </li>
                <li>
                  <a href="#">data science</a>
                </li>
                <li>
                  <a href="#">others</a>
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

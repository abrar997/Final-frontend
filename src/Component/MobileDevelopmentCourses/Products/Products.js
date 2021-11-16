import React from "react";
import "./Products.css";

import data from "../MobileDevelopmentData";
// import {faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faStar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";



const Products = () => {
const {addItem} =useCart()

  return (
    <div className="Products-mobile ">
      <div className="container">
        <div className="row">
          <h1>All courses ... </h1>
          <h6>
            <FontAwesomeIcon icon={faUserFriends} />
            19,971,031 learners
          </h6>
          <p>
            Each aspect of creating websites and applications entails a unique
            set of skills. Udemy offers a host of courses to bring you up to
            speed on modern front-end, back-end, and fullstack web development
            practices and skills.
          </p>
          <div>
            {data.MobileData.map((item) => {
              return (
                <div className="card">
                  <img src={item.img} />
                  <div className="card-contain">
                    <h5> {item.name}</h5>
                    <h6>{item.instru} </h6>
                    <span>
                      {item.views} <FontAwesomeIcon icon={faUserFriends} />
                    </span>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#db2d41" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#db2d41" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#db2d41" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#db2d41" }}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#4785f1" }}
                      />
                    </p>
                    <h6>
                      <mark
                        style={{ backgroundColor: "#db2d41", color: "white" }}
                      >
                        {" "}
                        ${item.price}{" "}
                      </mark>
                    </h6>
                  </div>
                  <div className="btns d-flex mt-2">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "transparent",
                        width: "50px",
                        height: "50px",
                        padding: "5px",
                        marginLeft: "10px",
                        fontSize: "20px",
                        border: "1px solid #4785f1",
                        color: "#4785f1",
                      }}
                      onClick={() => addItem(item)}
                    >
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "transparent",
                        width: "50px",
                        height: "50px",
                        padding: "5px",
                        marginLeft: "10px",
                        fontSize: "20px",
                        border: "1px solid #4785f1",
                        color: "#4785f1",
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <div className="contsinWeb">
                    <h4>{item.name} </h4>
                    <p>{item.text}</p>
                    <h6>{item.instru} </h6>
                    <h5
                      style={{
                        color: "#db2d41",
                        backgroundColor: "#eee",
                        padding: "10px",
                        width: "130px",
                        margin: "auto",
                      }}
                    >
                      ${item.price}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import "./Products.css";
import data from "../DataScienceCoursesData";

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
  const { addItem } = useCart();

  return (
    <div className="Products ">
      <div className="container">
        <div className="row">
          <h1>All Courese... </h1>
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
            {data.dataScience.map((item) => {
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
                  </div>

                  <div className="btns d-flex">
                    <button className="btn" onClick={() => addItem(item)}>
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "transparent",
                        // borderRadius: "100%",
                        width: "50px",
                        height: "50px",
                        padding: "5px",
                        marginLeft: "10px",
                        fontSize: "20px",
                        border: "1px solid #4785f1",
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

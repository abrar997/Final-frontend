import React, { useState } from "react";
import "./Products.css";
import data from "../GameDevelopmentCoursesData";
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
  const [dataShow, setDataShow] = useState(data);
  const [dataFilter, setdDataFilter] = useState(data.GameData);

  const handlefilterdata = (e) => {
    if (e.target.value === "40-120") {
      const datasFilterlist = dataShow.GameData.filter((items) => {
        return items.priceValue === "40-120";
      });
      setdDataFilter(datasFilterlist);
    }

    if (e.target.value === "130-200") {
      const datasFilterlist = dataShow.GameData.filter((items) => {
        return items.priceValue === "130-200";
      });
      setdDataFilter(datasFilterlist);
    }
    if (e.target.value === "210-500") {
      const datasFilterlist = dataShow.GameData.filter((items) => {
        return items.priceValue === "210-500";
      });
      setdDataFilter(datasFilterlist);
    }
  };

  return (
    <div className="Products-game ">
      <div className="container">
        <div className="row">
          <div className=" all-courses-top col-lg-12  d-flex">
            <div className="dropdown col-lg-8  ">
              <h1>All courses og game development ... </h1>
              <h5
                style={{
                  color: "#db2d41",
                  marginLeft: "10px",
                  paddingBottom: "10px",
                }}
              >
                we have
                <span
                  style={{ borderBottom: "3px solid gray", fontSize: "30px" }}
                >
                  {dataFilter.length}
                </span>
                courses for you ...
              </h5>
            </div>
            <div className="col-lg-4">
              <div className="checkbox-input">
                <h4 className="dropdown-toggle" type="button">
                  sorted by price...
                </h4>
                <div className="d-flex">
                  <div className="form-check ml-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="40-120"
                      onChange={handlefilterdata}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      $ 40-120
                    </label>
                  </div>
                  <div className="form-check ml-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="130-200"
                      onChange={handlefilterdata}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      $130-200
                    </label>
                  </div>

                  <div className="form-check ml-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="210-500"
                      onChange={handlefilterdata}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      $ 210-500
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-web col-lg-12">
            {dataFilter.map((items) => {
              return (
                <div
                  className="card col-lg-4 "
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <img src={items.img} />
                  <div className="card-contain">
                    <h5> {items.name}</h5>
                    <h6>{items.instru} </h6>
                    <span>
                      {items.views} <FontAwesomeIcon icon={faUserFriends} />
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

                  <div className="btns d-flex mt-2">
                    <button className="btn" onClick={() => addItem(items)}>
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
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

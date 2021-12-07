import React, { useState } from "react";
import data from "../WebDevelopmentData";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faStar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

// css
import "./Productsweb.css";

// cart
import { useCart } from "react-use-cart";
const Products = () => {
  const { addItem } = useCart();
  const [dataList, setDataList] = useState(data);
  const [dataFilter, setDataFilter] = useState(data.productsItems);
  const handlefilterdata = (e) => {
    if (e.target.value == "frontend") {
      const datasss = dataList.productsItems.filter((data) => {
        //callback function
        return data.type == "frontend";
      });

      setDataFilter(datasss);
    }
    if (e.target.value == "backend") {
      const datasss = dataList.productsItems.filter((data) => {
        //callback function
        return data.type == "backend";
      });
      setDataFilter(datasss);
    }
    if (e.target.value == "fullstack") {
      const datasss = dataList.productsItems.filter((data) => {
        //callback function
        return data.type == "fullstack";
      });
      setDataFilter(datasss);
    }
  };

  return (
    <div className="Products-web ">
      <div className="container">
        <div className="row">
          <div className=" all-courses-top col-lg-12  d-flex">
            <div className="dropdown col-lg-8  " data-aos="fade-right">
              <h1>All courses of web development </h1>
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
            <div className="col-lg-4 col-xs-12 col-md-12 col-sm-12 checkbox-inputa-web">
              <h4 className="dropdown-toggle" type="button">
                sorted by type...
              </h4>
              <div className="d-flex">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="frontend"
                    onChange={handlefilterdata}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Frontend
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="backend"
                    onChange={handlefilterdata}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Backend
                  </label>
                </div>

                <div className="form-check ml-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="fullstack"
                    onChange={handlefilterdata}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Fullstack
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-web col-lg-12">
            {dataFilter.map((items, ind) => {
              return (
                <div
                  className="card "
                  key={ind}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <img src={items.img} />
                  <div className="card-contain">
                    <h5 style={{ color: "#4785f1" }}> {items.name}</h5>

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
                    <h6>
                      <mark
                        style={{ backgroundColor: "#db2d41", color: "white" }}
                      >
                        ${items.price}
                      </mark>
                    </h6>
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

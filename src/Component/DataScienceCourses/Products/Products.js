import React,{useState} from "react";
// style
import "./Products.css";
// comp
import data from "../DataScienceCoursesData";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faStar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
// library
import { useCart } from "react-use-cart";

const Products = () => {
const { addItem } = useCart();
const [dataShow, setDataShow] = useState(data);
const [dataFilter, setdDataFilter] = useState(data.dataScience);

const handlefilterdata = (e) => {
  if (e.target.value === "40-120") {
    const datasFilterlist = dataShow.dataScience.filter((items) => {
      return items.priceValue === "40-120";
    });
    setdDataFilter(datasFilterlist);
  }

  if (e.target.value === "130-240") {
    const datasFilterlist = dataShow.dataScience.filter((items) => {
      return items.priceValue === "130-240";
    });
    setdDataFilter(datasFilterlist);
  }
  if (e.target.value === "250-500") {
    const datasFilterlist = dataShow.dataScience.filter((items) => {
      return items.priceValue === "250-500";
    });
    setdDataFilter(datasFilterlist);
  }
};

  return (
    <div className="Products-data ">
      <div className="container">
        <div className="row">
          <h1>All Courese... </h1>
          <h5
            style={{
              color: "#db2d41",
              marginLeft: "10px",
              paddingBottom: "10px",
            }}
          >
            we have
            <span style={{ borderBottom: "3px solid gray", fontSize: "30px" }}>
              {dataFilter.length}
            </span>
            courses for you ...
          </h5>
          <div className="col-lg-8">
            {dataFilter.map((item) => {
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
          <div className="col-lg-4">
            <div className="checkbox-input">
              <h4 className="dropdown-toggle" type="button">
                sorted by price...
              </h4>
              <div className="form-check ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="40-120"
                  onChange={handlefilterdata}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  $ 40-120
                </label>
              </div>
              <div className="form-check ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="130-240"
                  onChange={handlefilterdata}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  130-240
                </label>
              </div>

              <div className="form-check ml-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="250-500"
                  onChange={handlefilterdata}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  $ 250-500
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

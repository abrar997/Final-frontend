import React from "react";
import "./Products.css";
import data from "../WebDevelopmentData";

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
    <div className="Products ">
      <div className="container">
        <div className="row">
          <h2>All Web Development courses </h2>
          <h6>
            <FontAwesomeIcon icon={faUserFriends} />
            19,971,031 learners
          </h6>
          <div>
            {data.productsItems.map((items) => {
          return  (<div className="card col-lg-4">
              <img src={items.img} />
              <div className="card-contain">
                <h1>{items.id} </h1>
                <h5> {items.name}</h5>
                <h6>{items.instru} </h6>
                <span>
                  {items.views} <FontAwesomeIcon icon={faUserFriends} />
                </span>
                <p>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#db2d41" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#4785f1" }} />
                </p>
              </div>

              <div className="btns d-flex">
                <button className="btn" onClick={() => addItem(items)}>
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
                <h4>{items.name} </h4>
                <p>{items.text}</p>
                <h6>{items.instru} </h6>
                <h5
                  style={{
                    color: "#db2d41",
                    backgroundColor: "#eee",
                    padding: "10px",
                    width: "130px",
                    margin: "auto",
                  }}
                >
                  {items.price}
                </h5>
              </div>
            </div>
        )    })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
  //  return (
  //               <ProductItem
                
  //                 img={items.img}
  //                 name={items.name}
  //                 views={items.views}
  //                 instru={items.instru}
  //                 text={items.text}
  //                 price={items.price}
  //                 items={items.id}
  //                 key={items.id}
  //               />
  //             );
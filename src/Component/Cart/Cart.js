import React from "react";
import { useCart } from "react-use-cart";
import { BrowserRouter as Router } from "react-router-dom";

import img1 from "./CartImage/cart.png";
import "./Cart.css";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty) {
    return (
      <div>
        {" "}
        <h3
          style={{
            textAlign: "center",
            backgroundColor: " #caddff",
            color: "black",
            padding: "10px",
          }}
        >
          Your cart is empty back and add what u need ....
        </h3>
        <img src={img1} style={{ marginLeft: "540px", width: "600px" }} />
      </div>
    );
  }
  return (
    <>
      <Router>
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="d-flex cards">
                {items.map((item) => (
                  <div key={item.id} className="card col-lg-12">
                    <div className="imagesCart">
                      <img src={item.img} />
                    </div>

                    <div className="textsss">
                      <h4> {item.name}</h4>
                      <h6>{item.price}</h6>
                      <button
                        className="cartbtn"
                        onClick={() => removeItem(item.id)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
              </div>{" "}
              <h1>total items ({totalUniqueItems})</h1>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Cart;

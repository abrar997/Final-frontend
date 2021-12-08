import React from "react";
// style
import "./Cart.css";
// library
import { useCart } from "react-use-cart";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// firebase
import { getAuth } from "@firebase/auth";
// img
import img1 from "./CartImage/cart.png";
import ModalBox from "./Modal";
const auth = getAuth();

const Cart = ({ user }) => {
  // from library
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <div className="cart-empty">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: " #caddff",
            color: "black",
            padding: "10px",
          }}
        >
          Your cart is empty back and add what u need ....
          <ModalBox />
        </h3>
        <img src={img1} className="image-empty" />

        <div></div>
      </div>
    );
  }

  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="row">
            <h2>shopping cart </h2>

            <div className="d-flex cards">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="card col-lg-4 col-md-8 col-sm-8 p-10"
                >
                  <div className="imagesCart col-sm-4 col-md-4">
                    <img src={item.img} />
                  </div>

                  <div className="textsss pb-4 ">
                    <h4> {item.name}</h4>
                    <p>{item.text} </p>

                    <h6>${item.price}</h6>
                    <button
                      className="cartbtn"
                      onClick={() => removeItem(item.id)}
                      title="remove course"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="total">
          <div> <h4>Total price : {cartTotal} $ </h4>
            <h5 style={{ color: "gray" }}>
              {/* Cart ({totalUniqueItems}) */}
              total Items:({totalItems})
            </h5></div> 
            <button className="btn " onClick={() => emptyCart()}>
              empty cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import img1 from "./CartImage/cart.png";
import { getAuth } from "@firebase/auth";


const auth = getAuth();

const Cart = ({ user }) => {
  // const SignOut = () => {
  //   auth.signOut();
  // };
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
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
            <Link to="/Home" style={{textDecoration:"none"}}>start now </Link>
        </h3>
        <img src={img1} style={{ marginLeft: "540px", width: "600px" }} />

        <div>
          
       
        </div>
      </div>
    );
  }
  return (
    <>
      <Router>
        <div className="cart">
          <div className="container">
            <div className="row">
              <h2>shopping cart </h2>
              <h5 style={{ color: "gray" }}>
                {/* Cart ({totalUniqueItems}) */}
                total Items:({totalItems})
              </h5>

              <div className="d-flex cards">
                {items.map((item) => (
                  <div key={item.id} className="card col-lg-4 p-10">
                    <div className="imagesCart">
                      <img src={item.img} />
                    </div>

                    <div className="textsss pb-4 ">
                      <h4> {item.name}</h4>
                      <p>{item.text} </p>

                      <h6>${item.price}</h6>
                      <button
                        className="cartbtn"
                        onClick={() => removeItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total">
              <h4>Total price : {cartTotal} $ </h4>
              <button className="btn " onClick={() => emptyCart()}>
                empty cart
              </button>
            </div>
          </div>
        </div>
        {/* <Redirect to="/" totalItems={totalItems} /> */}
        {/* <button onClick={()=>SignOut()}>start with new account </button> */}
      </Router>
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import Products from "./Products/Products";
import Cart from "../Cart/Cart";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router  } from "react-router-dom";
import { Route,Switch } from "react-router";
import Navbar from "../Navbar/Navbar";
const WebdevelopmentCourses = () => {

return (
  <Router>
    <>
      <div>
        <Products />
        {/* <Cart /> */}
      </div>   
      <Switch>
      <Route component={Products} path="./" exact />
      <Route component={Cart} path="./Cart" />
    </Switch>
    </>
 
  </Router>
);
};

export default WebdevelopmentCourses;



//  addCart = (id) => {
//    const { products, cart } = this.state;
//    const check = cart.every((item) => {
//      return item._id !== id;
//    });
//    if (check) {
//      const data = products.filter((product) => {
//        return product._id === id;
//      });
//      this.setState({ cart: [...cart, ...data] });
//    } else {
//      alert("The product has been added to cart.");
//    }
//  };

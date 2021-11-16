import React, { Fragment, useCallback } from "react";
import app from "../firebase";
import { Link } from "react-router-dom";
import "firebase/compat/auth";

const auth = app.auth();
const Login = () => {

  const LogWithEmail = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        alert("thank you for your trust ,you can start learning with us now");
      })
      .catch((error) => {
        alert(error);
      });
  }, []); // to run one time jsut when page loading
 
  return (
    <Fragment>
      <div className="form-style-10">
        <h1>Log in</h1>
        <form onSubmit={LogWithEmail}>
          <div className="section"></div>

          <div className="section">Email</div>
          <div className="inner-wrap">
            <label>
              <input type="email" name="email" placeholder="email..." />
            </label>
          </div>

          <div className="section">Passwords</div>
          <div className="inner-wrap">
            <label>
              <input
                type="password"
                name="password"
                placeholder="password..."
              />
            </label>
          </div>
          <div className="button-section">
            <input type="submit" name="Sign Up" />
          </div>
        </form>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "600",
          color: "gray",
        }}
      >
        if you have not account ,<Link to="/Signup">create new account</Link>
      </p>
    </Fragment>
  );
};

export default Login;

import React, { useCallback } from "react";

// react-router-dom
import { Link } from "react-router-dom";
// icons
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// firebase
import "firebase/compat/auth";
import app from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = app.auth();

const Login = () => {
// login with emai
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
    <section className="form-login">
      <div className="form-style-10" style={{marginTop:"120px"}}>
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

    
    </section>
  );
};

export default Login;

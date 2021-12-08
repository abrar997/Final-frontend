import React, { useCallback, useRef } from "react";
// style
import "./Signup.css";
// icons
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// firebase
import app from "../firebase";
import "firebase/compat/auth";
const provider = new GoogleAuthProvider();
const auth = app.auth(); // use app to connect login and signup data with fireabse

const Signup = (props) => {
  const auth = app.auth();
  const { name, email, password } = useRef(null);
// sign up with email
  const SignWithEmail = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await auth
      .createUserWithEmailAndPassword(email.value, password.value)

      .then((res) => {
        return "Sign up is sucssesful";
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  // sign out
  const SignOut = () => {
    auth.signOut();
  };



  return (
    // sign up
    <div className="Signup">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 form-info">
            <div className="form-style-10 ">
              <h1>
                Sign Up
                <span>Sign and start learning with us... </span>
              </h1>
              <form onSubmit={SignWithEmail}>
                <div className="section">
                  <span>1</span>Name
                </div>
                <div className="inner-wrap">
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="full name.."
                      ref={name}
                    />
                  </label>
                </div>

                <div className="section">
                  <span>2</span>Email
                </div>
                <div className="inner-wrap">
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email..."
                      ref={email}
                    />
                  </label>
                </div>

                <div className="section">
                  <span>3</span>Passwords
                </div>
                <div className="inner-wrap">
                  <label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password..."
                      ref={password}
                    />
                  </label>
                </div>
                <div className="button-section">
                  <input type="submit" name="Sign Up"></input>
                  <span className="privacy-policy">
                    <input type="checkbox" name="field7" />
                    You agree to our Terms and Policy.
                  </span>
                </div>
              </form>
            </div>

            <div className="signup-textbelow">
              <h6
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                you have an account ,<Link to="/Login">Log in</Link>
              </h6>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                if you forget your password
                <button
                  onClick={() => SignOut()}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "blue",
                  }}
                >
                  log out
                </button>
                and start with new account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { Fragment, useCallback } from "react";
import app from "../firebase";
import { Link } from "react-router-dom";
import "firebase/compat/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const provider = new GoogleAuthProvider();

const auth = app.auth();
const Login = (props) => {

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
 
   const SignUpWithGoogle = () => {
     auth
       .signInWithPopup(provider)
       .then(() => {
         //nevr forger res u will have beauty error stp your work when you click on button
         alert("signed with google ");
       })
       .catch((error) => {
         alert("some thing wrong ,please try again later ");
       });
   };

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

      <button
        type="button"
        className="w-20 secondary  btns-signup"
        onClick={SignUpWithGoogle}
        style={{
          marginTop: "20px",
          margin: "auto",
          width: "300px",
          marginLeft: "690px",
        }}
      >
        sign up with google <FontAwesomeIcon icon={faGoogle} />
      </button>
    </Fragment>
  );
};

export default Login;

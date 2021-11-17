import React, { useCallback, useRef } from "react";
import './Signup.css'
import app from "../firebase";
import "firebase/compat/auth";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const provider = new GoogleAuthProvider();
const auth = app.auth(); // use app to connect login and signup data with fireabse

const Signup = (props) => {
  const auth = app.auth();
  const { name, email, password} = useRef(null);

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
  const SignOut = () => {
    auth.signOut();
  };

  return (
    // sign up
    <div className="Signup">
      <div className="container">
        <div className="form-style-10">
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
                  // onChange={handlechange}
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
                  // onChange={handlechange}
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
                  // onChange={handlechange}
                  ref={password}
                />
              </label>
            </div>
            <div className="button-section">
              <input type="submit" name="Sign Up" />
              <span className="privacy-policy">
                <input type="checkbox" name="field7" />
                You agree to our Terms and Policy.
              </span>
            </div>
          </form>
        </div>
    <div className="signup-textbelow">
        <h6 style={{ textAlign: "center", marginTop: "10px", color: "gray" }}>
          you have an account ,<Link to="/Login">Log in</Link>
        </h6>

        <p
          style={{ textAlign: "center", marginTop: "10px", color: "gray" }}
        >
          {" "}
          if you forget your password
          <button  onClick={() => SignOut()} style={{border:"none",backgroundColor:"transparent",color:"blue"}}> log out</button> and start with new
          account{" "}
        </p>

        <button
          type="button"
          className="secondary mr-4 btn-signup"
          onClick={SignUpWithGoogle}
          style={{
            margin: "auto",
            width: "300px",
            marginLeft: "487px",   
            marginTop: "0px",

          }}
        >
        Or sign up with google <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
    </div></div>
  );
};

export default Signup;

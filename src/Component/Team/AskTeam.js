import React, { useState } from "react";
import { useEffect } from "react";
import "./Team.css";
import img1 from "./TeamImage/boysss.png";
import emailjs from "emailjs-com";

const AskTeam = () => {
  const [ask, setAsk] = useState({
    name: "",
    instruct: "",
    question: "",
  });
  // we always use const with function
  const handleSubmit = (e) => {
    e.preventDefault();
    // services id,tenplate i,  

  emailjs
  .sendForm(
    "service_b3gqo19",
    "template_zunsjdw",
    e.target,
    "user_SNPTszdvRiyww8wHwfkEQ"
  )
  .then((res) => {
    console.log(res);
  }); // write important information inde this func

  };
  // for your name
  const handleName = (e) => {
    setAsk({ name: e.target.value });
  };

  // for instructor name and  question

  const hanleChange = (e) => {
    setAsk({
      [e.target.name]: e.target.value //to geet valu from name
    });


  };

  let header = "";
  if (ask.name) {
    header = (
      <h4 style={{ padding: "10px" }}>
        Hello {ask.name},thank you for your trust, we will answer your question
        during 48h
      </h4>
    );
  } else {
    header = "";
  }
  
   const {name, instruct, question} = ask;

  return (
    <div className="askTeam">
      <div
        className="textHeader"
        // style={{
        //   textAlign: "center",
        //   backgroundColor: "#a31727",
        //   color: "rgb(219, 216, 216)",
        //   marginBottom: "30px",
        // }}
      >
        {/* hidden text appear when you write your name in fyour name input */}
        {header}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>welcome back </h1>
              <h3>start your journey with instructor job we will give you a road to be profisional instructor, </h3>
            <p>ask what you want ... </p>

            {/* form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="your name"
                  name="name"
                  onChange={handleName} //for get name from inpt and print in heaer pargraph
                  value={name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  instructor name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="instructor name"
                  name="instruct"
                  onChange={hanleChange}
                  value={instruct}
                />
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  name="question"
                  onChange={hanleChange}
                  value={question}
                ></textarea>
                <label htmlFor="floatingTextarea2">your question</label>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Send
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            {" "}
            <img src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskTeam;

import React, { useState } from "react";
import './Team.css'
import emailjs from "emailjs-com";
import FirstSectionDivs from '../FirstSectionDivs/FirstSectionDivs'

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
      <h4 style={{ padding: "17px",color:" rgb(240, 240, 240)" }}>
       Hello {ask.name},thank you for your trust, we will answer your question
        during 48h
      </h4>
    );
  } else {
    header = "";
  }
  
   const {name, instruct, question} = ask;

  return (
    <div className="askTeam" >
      <div className="textHeader">
        {/* hidden text appear when you write your name in fyour name input */}
        {header}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <h1>You won’t have to do it alone</h1>
      
            <p>ask instructor what you need ... </p>

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

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 component-firttDiv">
            <FirstSectionDivs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskTeam;

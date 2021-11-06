import React from "react";
import "./FirstSectionDivs.css";
import img from "./FisrtImages/back1.png";

const FirstSectionDivs = () => {
  return (
    <div className="boyy">
      <section className="FirstSectionDivs">
        <div className="container">
          <div className="row">
            {/* blue cilcle  with boy */}
            <div className="imageAll  m-auto ">
              <h1> learn with us</h1>
              <h3>
                trust in me and start learning now .it hard but you can do it
                ...
              </h3>
              <button type="button"> make your dream come true </button>
              <div className="images">
                <img src={img} />
              </div>
              {/*  first Square */}
              <div className="text">
                <h1>Development courses </h1>
                <p>From zero to hero... </p>
                <button>Start your free trail</button>
              </div>
              {/* second Square */}
              <div className="texts">
                <h1>certificate and Awards</h1>
                <p>
                  get your Award and you are sitting
                  <br /> in your home ...
                </p>
                <button>don't be later </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSectionDivs;

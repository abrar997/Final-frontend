import React from "react";
// img
import img from "./FisrtImages/back1.png";
// style
const style = {
  backgroundColor: "#4785f1",
  borderRadius: "50%",
  width: "400px",
  height: "400px",
  textAlign: "center",
};

const text = {
  color: "white",
  marginTop: "10px",
  letterSpacing: "1px",
  lineHeight: "30px",
};
const button = {
  border: "2px solid white",
  backgroundColor: "transparent",
  padding: "10px",
  color: "white",
  fontSize: "15px",
  width: "80%",
  margin: "auto",
  marginTop: "30px",
};

const images = { marginRight: "-300px", marginTop: "-200px" };

const FirstSectionDivs = () => {
  return (
    <div className="boyy">
      <section className="FirstSectionDivs">
        <div className="container">
          <div className="row">
            {/* blue cilcle  with boy */}
            <div className="imagesAll  " style={style}>
              <h1 style={{ color: "white", marginTop: "100px" }}>
                start with us
              </h1>
              <h3 style={text}>
                trust in us and be instructore now . maybe it hard but you can
                do it ...
              </h3>
              <p type="button" style={button}>
                make your dream come true
              </p>
              <div className="images" style={images}>
                <img src={img} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSectionDivs;

import React from 'react'
import "./NewSection.css";
const NewSection = () => {
    return (
      <div className="NewSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={require("./NewImage/bss.png").default} />
            </div>
            <div className="col-lg-6 text-newswection"
             data-aos="fade-left"
             >
              <h1>code/Mu. academy </h1>
              <br />
              <h6>
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies.
              </h6>
                <div
                  className="btn"
                  style={{ background: "#0000ff", color: "white" }}
                >
                  start now
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewSection

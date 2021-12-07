import React from 'react'
import { Link } from 'react-router-dom';
import "./NewSection.css";
import ModalBox from "../Cart/Modal";
const NewSection = () => {
    return (
      <div className="NewSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={require("./NewImage/bss.png").default} />
            </div>
            <div className="col-lg-6">
              <h1>code/Mu. academy </h1>
              <h6>
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies.
              </h6>
                                  
                <div className="btn">  <ModalBox  style={{color:"white"}}/></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewSection

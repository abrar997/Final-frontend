import React, { useState } from "react";
// img
import img1 from "./ServicesImage/programming.png";
import img2 from "./ServicesImage/certificate.png";
import img3 from "./ServicesImage/code.png";

// comp
import "./Services.css";

const Services = () => {
  const [data, setData] = useState([
    {
      img: img1,
      h3: "Online Courses",
      p: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blindtexts.",
    },
    {
      img: img2,
      h3: "Earn A Certificates",
      p: "  Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blindtexts.",
    },
    {
      img: img3,
      h3: "Learn with Expert",
      p: " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ]);

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div 
    //       data-aos="fade-right"
    //  data-aos-offset="300"
    //  data-aos-easing="ease-in-sine"
     >
          <h4>  SERVICES... </h4>
          <h1>Facts that Make us Unique</h1></div>
          <div className="col-lg-4  serva"></div>
          <div className="cards col-lg-8  d-flex">
            {data.map((card, indf) => {
              return (
                <div
                  className="card col-lg-4 col-md-4 col-sm-12"
                  key={indf}
                >
                  <img src={card.img}/>
                  <h3> {card.h3} </h3>
                  <p>{card.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

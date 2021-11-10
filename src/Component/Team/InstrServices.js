import React from "react";

const InstrServices = ({ services }) => {
  return (
    <div className="InstrServices">
      <div className="container">
        <div className="row">
          <h1>So many reasons to start</h1>
          {services.map((item, ind) => {
            return (
              <div className="card col-lg-4">
                <img src={item.img} />
                <h3>{item.name} </h3>
                <p>{item.text} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstrServices;

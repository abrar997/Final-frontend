import React from 'react'
// style
import './Companys.css'
// img
import img1 from './Companyimage/1.png'
import img2 from './Companyimage/2.png'
import img3 from './Companyimage/3.png'
import img4 from "./Companyimage/4.jpg";
import img5 from './Companyimage/5.png'
import img6 from './Companyimage/6.png'
import img7 from './Companyimage/7.png'
import img8 from "./Companyimage/8.png";

const Companys = () => {
    return (
      <div className="companies">
        <div className="container">
          <div className="row">
              <h2 data-aos="fade-left">
                We collaborate with
                <span style={{ color: " #0000ff" }}>
                  +200 leading universities and companies
                </span>
              </h2>
            <ul className="d-flex">
              <li>
                <img src={img1} />
              </li>
              <li>
                <img src={img2} />
              </li>
              <li>
                <img src={img3} />
              </li>
              <li>
                <img src={img4} />
              </li>
              <li>
                <img src={img5} />
              </li>
              <li>
                <img src={img6} />
              </li>
              <li>
                <img src={img7} />
              </li>
              <li>
                <img src={img8} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Companys

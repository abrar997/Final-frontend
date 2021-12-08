import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useCart } from "react-use-cart";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faAngleUp, faShoppingBag, faUserFriends } from "@fortawesome/free-solid-svg-icons";
// swiper
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const iconfaAngleUp = {
  position: "absolute",
  top: "-20px",
  fontSize: "25px",
  borderRadius: "10px",
  color: "#eee",
  right: "140px",
};

const DataScience = () => {
    const { addItem } = useCart();

  const [dataaa, setDataaa] = useState([]);
  useEffect(() => {
    // to get data from json file
    axios.get("Json/Courses.json").then((res) => {
      console.log(res.data.dataScince);
      setDataaa(res.data.dataScince); //u on not need to {} inside setData of put it u will have error (dataa.map is not afunction)
    });
  }, []);

  return (
    <div className="webdevelopment">
      <h2>Lead data-driven decisions with Data Science</h2>
      <p>
        Data science is everywhere. Better data science practices are allowing
        corporations to cut unnecessary costs, automate computing, and analyze
        markets. Essentially, data science is the key to getting ahead in a
        competitive global climate.
      </p>
      {/* <button className="btn" style={{border:"1px solid grau"}}>all courses </button> */}
      <div className="swiper">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          //   navigation={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {dataaa.map((item, inds) => {
            return (
              <div key={inds}>
                <SwiperSlide className="myswiper">
                  <div className="card">
                    <div>
                      <img src={item.img} />
                      <h3>{item.name}</h3>
                      <h5>{item.instru} </h5>
                      <p>
                        {item.views} <FontAwesomeIcon icon={faUserFriends} />
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#db2d41" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#db2d41" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#db2d41" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#db2d41" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#4785f1" }}
                        />
                      </p>
                    </div>
                    <div className="contsinWeb">
                      <FontAwesomeIcon icon={faAngleUp} style={iconfaAngleUp} />
                      <h4>{item.name} </h4>
                      <p>{item.text}</p>
                      <h6>{item.instru} </h6>
                      <h5
                        style={{
                          color: "#db2d41",
                          backgroundColor: "#eee",
                          padding: "10px",
                          width: "130px",
                          margin: "auto",
                        }}
                      >
                        ${item.price}
                      </h5>
                      <button className="btn" onClick={() => addItem(item)}>
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </button>
                      <button
                        className="btn heart"
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: "100%",
                          width: "50px",
                          height: "50px",
                          padding: "5px",
                          marginLeft: "10px",
                          fontSize: "20px",
                          color: "red",
                          border: "1px solid #4785f1",
                        }}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DataScience;

{/* <h3>Data science </h3>; */}

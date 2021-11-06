import React, { useState, useEffect } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faAngleUp, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules

SwiperCore.use([Pagination]);

const iconfaAngleUp = {
  position: "absolute",
  top: "-20px",
  fontSize: "25px",
  borderRadius: "10px",
  color: "#eee",
  right: "140px",
};

const MobileDevelopment = () => {
  const [dataaa, setDataaa] = useState([]);
  useEffect(() => {
    // to get data from json file
    axios.get("Json/Courses.json").then((res) => {
      console.log(res.data.Mobile);
      setDataaa(res.data.Mobile); // do not need to {} inside setData of put it u will have error (dataa.map is not afunction)...
    });
  }, []);

  return (
    <div className="webdevelopment">
      <h2>Expand your career opportunities with mobile development</h2>
      <p>
        The world of web development is as wide as the internet itself. Much of
        our social and vocational lives play out on the internet, which prompts
        new industries aimed at creating, managing, and debugging the websites
        and applications that we increasingly rely on.
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
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          className="mySwiper"
        >
          {dataaa.map((item, indb) => {
            return (
              <div key={indb}>
                <SwiperSlide className="myswiper">
                  <div className="card">
                    <div>
                      <img src={item.img} />
                      <h3>{item.name}</h3>
                      <h5>{item.instru} </h5>
                      <p>
                        {item.views} <FontAwesomeIcon icon={faUserFriends} />{" "}
                      </p>
                    </div>
                    <div className="contsinWeb">
                      <FontAwesomeIcon icon={faAngleUp} style={iconfaAngleUp} />
                      <h4>{item.name} </h4>
                      <p>{item.text}</p>
                      <h6>{item.instru} </h6>
                      <button className="btn">more details</button>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: "100%",
                          width: "50px",
                          height: "50px",
                          padding: "5px",
                          marginLeft: "10px",
                          fontSize: "20px",
                          color: "gray",
                          border: "1px solid #4785f1",
                        }}
                      >
                        <FontAwesomeIcon icon={faHeart} />{" "}
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

export default MobileDevelopment;

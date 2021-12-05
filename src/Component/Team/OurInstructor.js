import React, { useState } from "react";
// style
import "./Team.css";
// img
import img1 from "./TeamImage/teaxh1.webp";
import img2 from "./TeamImage/teaxh2.webp";
import img3 from "./TeamImage/teaxh3.webp";
import img4 from "./TeamImage/teaxh4.webp";
import img5 from "./TeamImage/teaxh5.webp";
import img6 from "./TeamImage/teaxh6.webp";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);


const OurInstructor = () => {
  const [team, setTeam] = useState([
    { img: img1, name: "khalid jamal", job: "data science" },
    { img: img2, name: "menna ali", job: "web development" },
    { img: img3, name: "judy aboot", job: "ui/ux courses" },
    {
      img: img4,
      name: "mekasa ackerman",
      job: "front end react web evelopment",
    },
    { img: img5, name: "mustafa barazan", job: "flutter" },
    { img: img6, name: "seman mohammed", job: "game development" },
  ]);
  return (
    <div className="instructorteam">
      <div className="container">
        <div className="row">
          <h4>Meet our instructore who begin from zero as you  ...</h4>
          <h1>Certified Instructor </h1>
          <div className="cards">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }
              }
              className="mySwiper"
            >
              {team.map((items, indla) => {
                return (
                  <div key={indla}>
                    <SwiperSlide className="myswiper">
                      <div className="card">
                        <div>
                          <img src={items.img} />
                          <h3> {items.name} </h3>
                          <h5>{items.job} </h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInstructor;

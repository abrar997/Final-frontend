import React,{useState} from "react";
// styel
import "./Latest.css";
// img
import img1 from "./LatestImages/1.png.webp";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Latest = () => {
  const [studnts, setStudnts] = useState([
    {
      name: "john smith",
      say: "it's amazing company for teaching,my lafe change and iam working in large company ....",
    },
    {
      name: "eren yuger",
      say: "it's amazing company for teaching,my lafe change and iam working in large company ....",
    },
    {
      name: "naruto ozomaki",
      say: "it's amazing company for teaching,my lafe change and iam working in large company ....",
    },
    {
      name: "abdullah muthanna",
      say: "it's amazing company for teaching,my lafe change and iam working in large company ....",
    },
  ]);

  return (
    <div className="latest" id="stuents">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 images">
            <img src={img1} />
          </div>

          <div className="col-lg-6 textssssss" data-aos="fade-left">
            <h4>be unique with us..... </h4>
            <h1> our students say </h1>

            <div className="">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                className="mySwiper"
              >
                {studnts.map((student, indjj) => {
                  return (
                    <div key={indjj}>
                      <SwiperSlide className="slides">
                        <h3>{student.name}</h3>
                        <p> {student.say} </p>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

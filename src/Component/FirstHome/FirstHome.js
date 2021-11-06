import React from "react";
import "./FirstHome.css";
import img1 from './Images/back.webp'
import img2 from './Images/back.png'
import img3 from "./Images/girll.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation])

const FirstHome = () => {
  return (
    <div className="topweb">
      <div className="swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text">
              <h1>Take the first step to learn with us </h1>
              <p>
                learn development and take new skills with us or be instructore
                and be with our team. MAke your dream Come true ...
              </p>
              <img src={img2} />
              <div className="d-flex buttons">
                <button>
                  <a href="#courses"> our courses</a>
                </button>
                <button>start now </button>
              </div>
            </div>

            <div className="swiprimage">
              <img src={img3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              <h1 data-aos="fade-right" data-aos-duration="2000">
                Take the first step to learn with us
              </h1>
              <p data-aos="fade-right" data-aos-duration="2000">
                learn development and take new skills with us or be instructore
                and be with our team. MAke your dream Come true ...
              </p>
              <div
                className="d-flex buttons"
                data-aos="fade-right"
                data-aos-duration="4000"
              >
                <button>
                  <a href="#courses"> our courses</a>
                </button>
                <button>start now </button>
              </div>
              <img src={img2} />
            </div>

            <div className="swiprimage">
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FirstHome;

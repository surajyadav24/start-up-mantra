import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import profile from "../images/profile.png";
import "./Testimonial.css";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function TestimonialSlider() {
  return (
    <>
    <div className="slider-root">

   
      <Swiper
       slidesPerView={3}
        spaceBetween={30}
        effect={"fade"}

        navigation={true}
        // pagination={{
        //   clickable: false,
        // }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="swiperslidepara">
            They created an awesome online marketing strategy that drove the
            quality traffic to our website with very good SERPS. I am really
            happy with their services and agile marketing strategy. Highly
            recommend.
          </p>
          <div className="profile">
            <div className="icon">
              <img src={profile} alt="" />
            </div>
            <div className="discription">
              <h3 className="name">Riza Joy O'Hara</h3>
              <p>Jamguitar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <p className="swiperslidepara">
            They created an awesome online marketing strategy that drove the
            qu.
          </p>
          <div className="profile">
            <div className="icon">
              <img src={profile} alt="" />
            </div>
            <div className="discription">
              <h3 className="name">hello</h3>
              <p>Jamguitar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="swiperslidepara">
            They created an awesome online marketing strategy that drove the
            quality traffic to our website with very good SERPS. I am really
            happy with their services and agile marketing strategy. Highly
            recommend.
          </p>
          <div className="profile">
            <div className="icon">
              <img src={profile} alt="" />
            </div>
            <div className="discription">
              <h3 className="name">Riza Joy O'Hara</h3>
              <p>Jamguitar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <p className="swiperslidepara">
            They created an awesome online marketing strategy that drove the
            qu.
          </p>
          <div className="profile">
            <div className="icon">
              <img src={profile} alt="" />
            </div>
            <div className="discription">
              <h3 className="name">hello</h3>
              <p>Jamguitar</p>
            </div>
          </div>
        </SwiperSlide>
    
      </Swiper>
      </div>
    </>
  );
}

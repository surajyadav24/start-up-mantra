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
              I'm really glad I found her, she obviously knows what she's doing.
              My site looks much cleaner now, with proper SEO and loading time.
              I highly recommend.
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Olivier Fortie</h3>
                <p>Primos Populi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Had a very good experience working with Sahil and his team . Will
              surely come back to you guys . Great Job!
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Gagandeep Kashyap - My </h3>
                <p>Earthy Life</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Perfect work delivered with high quality on time. Very
              knowledgeable!
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Digitup Experts</h3>
                <p>Suptime</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Great freelancer and great team. Thanks for great work.
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Jitesh G </h3>
                <p> PMcerty</p>
              </div>
            </div>
          </SwiperSlide>
        
          <SwiperSlide>
            <p className="swiperslidepara">
              Super programmer! Clean, precise and dedicated work. It's a
              pleasure to work with professionals. Our requests have not been
              easy but this Freelancer manages to get it done right! Good
              quality
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Sebestian Rantala </h3>
                <p>Sunglobe.net</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Good , Timely completion of work. Very good communication from
              Developer team. Like to work with once again. Thank you!!
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="" />
              </div>
              <div className="discription">
                <h3 className="name">Narender Soni </h3>
                <p> Bhumika Surgicals</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Great Work! Very Pleased with Work! Will hire again for more ON
              PAGE SEO jobs. Thanks again! A+++
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Riza Joy O'Hara - </h3>
                <p>JAMGUITAR</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              They created an awesome online marketing strategy that drove the
              quality traffic to our website with very good serps. I am really
              happy with their services and agile marketing strategy. Highly
              recommend.
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Don L Beebe </h3>
                <p>800PC Help</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Enjoyable and productive experience. Sahil is skilled at what he
              does and we look forward to working with Sahil again for our next
              project!
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Heidi Laitinen </h3>
                <p>epsi-finland</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              "Perfect work delivered with high quality on time. Very
              knowledgeable!"
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Digitup Experts</h3>
                <p>Digitup Experts</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Great work from Sahil always. Very efficient, on-time and
              professional. Anything to do with websites, he’s the man to go to!
              Highly recommended.
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Varuna Mehta</h3>
                <p>Light Digital</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Very good developer and expert. He is very cooperative and
              understanding. I am looking forward in developing other projects
              with him.
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Manoj Singh</h3>
                <p>Smart2be</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Sahil worked well with me and provided good service!
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Daryl Green</h3>
                <p>PMLA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
              Very cooperative and accommodated all requests. Thanks very much
              for all your efforts
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">Marcus S</h3>
                <p>Baselinked</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <p className="swiperslidepara">
            Sahil did a good job on designing the posts, they all look fantastic - the content was ok.. Each post was unique and looked great!! 
            </p>
            <div className="profile">
              <div className="icon">
                <img src={profile} alt="profile-client" />
              </div>
              <div className="discription">
                <h3 className="name">James Morgan</h3>
                <p>Organiconesies</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

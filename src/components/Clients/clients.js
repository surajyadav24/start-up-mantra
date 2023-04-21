import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./client.css"
import img1 from "./clientsimg/Baselinked.png";
import img2 from "./clientsimg/Senpex.png";
import img3 from "./clientsimg/The-Dark-Horse.png";
import img4 from "./clientsimg/ascothospitality.png";
import img5 from "./clientsimg/bagthefuture.png";
import img6 from "./clientsimg/bitely.png";
import img7 from "./clientsimg/cibes.png";
import img8 from "./clientsimg/customisedsportswear.png";
import img9 from "./clientsimg/darylgreen.png";
import img10 from "./clientsimg/dronahq.png";
import img11 from "./clientsimg/eleyaesystems.png";
import img12 from "./clientsimg/evergreenhomeexteriors.png";
import img13 from "./clientsimg/gourmate.png";
import img14 from "./clientsimg/govoize.png";
import img15 from "./clientsimg/growingkidchildcare.png";
import img16 from "./clientsimg/healmiddel.png";
import img17 from "./clientsimg/illinoislending.png";
import img18 from "./clientsimg/immunebytes.png";
import img19 from "./clientsimg/isabellayachtsphuket.png";
import img20 from "./clientsimg/jeepers.png";
import img21 from "./clientsimg/kalea-lift.png";
import img22 from "./clientsimg/lightdigital.png";
import img23 from "./clientsimg/maxbusiness.png";
import img24 from "./clientsimg/pencil.png";
import img25 from "./clientsimg/pink-joint.png";
import img26 from "./clientsimg/ray-digital.png";
import img27 from "./clientsimg/shine-bright.png";
import img28 from "./clientsimg/spraytandubai.png";
import img29 from "./clientsimg/startlifeheal.png";
import img30 from "./clientsimg/sunglobe.png";

import img31 from "./clientsimg/thealchemyadvisors.png";
import img32 from "./clientsimg/thejewelsjar.png";
import img33 from "./clientsimg/thevillagecraftstore.png";
import img34 from "./clientsimg/vivanditrichology.png";
import img35 from "./clientsimg/sydneyrenovationshire.png";
function clients() {
  const sliderstyle = {
    height: "140px"
  };
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        autoplay={{
          delay: 500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        className="mySwiper"
        style={sliderstyle}
      >
        <div className="slider-client">
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img17} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img18} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img23} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img24} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img25} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img26} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img27} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img28} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img29} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img30} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img31} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img32} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img33} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img34} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img35} alt="" />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default clients;

import React, { useState } from "react";
import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import MyButton from "./components/button";
import Card from "./components/cards/card";
import Aboutus from "../src/components/aboutus/about";
import Header from "./components/header/header";
import firstcardimg from "../src/components/images/first.png";
import secondcardimg from "../src/components/images/second-card.png";
import thirdcardimg from "../src/components/images/third-card.png";
import Seccard from "./components/secondcard/Seccard";
import firsticon from "./components/images/first-icon.png";
import secondicon from "./components/images/second-icon.png";
import thirdicon from "./components/images/third-icon.png";
import fourthicon from "./components/images/fourth-icon.png";
import fifthicon from "./components/images/fifth-icon.png";
import sixthicon from "./components/images/sixth-icon.png";
import firsticon2 from "./components/images/first-icon-2.png";
import secondicon2 from "./components/images/second-icon-2.png";
import thirdicon2 from "./components/images/third-icon-2.png";
import fourthicon2 from "./components/images/fourth-icon-2.png";
import fifthicon2 from "./components/images/fifth-icon-2.png";
import sixthicon2 from "./components/images/sixth-icon-2.png";
import TestimonialSlider from "./components/testimonial/TestimonialSlider";
import ContactusContent from "./components/contactus/ContactusContent";
import Contactus from "./components/contactus/Contactus";
import Footer from "./components/footer/Footer";
import Startupshine from "./components/startupshine/Startupshine";
import MultiStepForm from "./components/multistepform/form";
import "./Responsive.css";

function App() {
  const firsticoncard = [
    "./components/images/first-icon.png",
    "./components/images/second-icon.png",
  ];
  // slider array

  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
        <MultiStepForm /> 
      </div>
      <Aboutus />

      <div className="abt-stat-wrap">
        <section className="about-us-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-4">
                <div className="card-wrapper">
                  <Card
                    image={firstcardimg}
                    alt="Example image"
                    kit="Basic Startup Kit"
                    invisibleheading="Basic Startup Kit"
                    invisiblepara={[
                      " Logo Design",
                      " 1 Year Domain and Hosting",
                      " 4 Page Website Design",
                      "  3 business email Ids",
                      "  Social Media Page Creation",
                      " Facebook/Instagram/LinkedIn/Twitter",
                      "One Time One Page SEO",
                      "One Month Local SEO",
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4">
                <div className="card-wrapper">
                  <Card
                    image={secondcardimg}
                    alt="Example image"
                    kit="Premium Startup Kit"
                    invisibleheading="Basic Startup Kit"
                    invisiblepara={[
                      " Logo Design",
                      " 1 Year Domain and Hosting",
                      " 4 Page Website Design",
                      "  3 business email Ids",
                      "  Social Media Page Creation",
                      " Facebook/Instagram/LinkedIn/Twitter",
                      "One Time One Page SEO",
                      "One Month Local SEO",
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4">
                <div className="card-wrapper">
                  <Card
                    image={thirdcardimg}
                    alt="Example image"
                    title="Example title"
                    kit="E-Commerce Startup Bundle  Kit"
                    invisibleheading="Basic Startup Kit"
                    invisiblepara={[
                      " Logo Design",
                      " 1 Year Domain and Hosting",
                      " 4 Page Website Design",
                      "  3 business email Ids",
                      "  Social Media Page Creation",
                      " Facebook/Instagram/LinkedIn/Twitter",
                      "One Time One Page SEO",
                      "One Month Local SEO",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="startupshine">
          <div className="container">
            <div className="row">
              <Startupshine phone=" +91-9599449323" />
            </div>
          </div>
        </section>
      </div>
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-root">
                <div className="heading-wrapper">
                  <h2 class="heading">Our Services</h2>
                  <p class="sub-heading">
                    With innovative business solutions, we impart the best
                    startup plans for businesses that are curated according to
                    the individual needs of different startups.
                  </p>
                </div>
                <Seccard
                  heading="Social Media Marketing"
                  image={firsticon}
                  image2={firsticon2}
                  para="You can never go wrong by investing in communities and the human beings within them."
                />
                <Seccard
                  heading="Digital Marketing"
                  image={secondicon}
                  image2={secondicon2}
                  para="Brand builders and storytellers to showcase your business and reach potential clients instantly."
                />
                <Seccard
                  heading="Graphic Designing"
                  image={thirdicon}
                  image2={thirdicon2}
                  para="Turn boring words into engaging graphics that are effective enough to attract more audiences for your business."
                />
                <Seccard
                  heading="Mobile App Development"
                  image={fourthicon}
                  image2={fourthicon2}
                  para="Our erudite developers use a strategic approach for designing and developing websites for your business."
                />
                <Seccard
                  heading="Website Development"
                  image={fifthicon}
                  image2={fifthicon2}
                  para="Our erudite developers use a strategic approach for designing and developing websites for your business."
                />
                <Seccard
                  heading="Start up Brand Kit"
                  image={sixthicon}
                  image2={sixthicon2}
                  para="Turn boring words into engaging graphics that are effective enough to attract more audiences for your business."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="heading-wrapper">
                <h2 class="heading">What are Clients says?</h2>
                <p class="sub-heading">Our Solutions,Your Business Growth</p>
              </div>
              <div className="slider-wrapper">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
              <ContactusContent />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
              <Contactus />
            </div>
          </div>
        </div>
      </section>
      <div className="footer-root">
        <Footer />
      </div>
    </div>
  );
}

export default App;

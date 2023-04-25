import React, { useState } from "react";
import "./App.css";
import whatsapp from "../src/components/images/social-whatsapp.webp";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyButton from "./components/button";
import call from "./components/images/call.png";
import Card from "./components/cards/card";
import Clients from "./components/Clients/clients";
import Cardmob from "./components/cards/cardmob";
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
    "./components/images/second-icon.png"
  ];
  // slider array

  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
        <MultiStepForm />
      </div>
      <Clients />
      <Aboutus />

      <div className="abt-stat-wrap">
        <div className="heading-wrapper">
          <h1 className="heading">Start up Brand Kit</h1>
          <h2 className="sub-heading">
            Startup Mantra – Your Complete Startup Solution!
          </h2>
        </div>
        <section className="about-us-wrapper">
          <div className="container">
            <div className="row row-card">
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 card-column ">
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
                      " Social Media Page Creation (Facebook/Instagram/LinkedIn/Twitter)",
                      "One Time One Page SEO",
                      "One Month Local SEO"
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 card-column ">
                <div className="card-wrapper">
                  <Card
                    image={secondcardimg}
                    alt="Example image"
                    kit="Premium Startup Kit"
                    invisibleheading="Premium Startup Kit"
                    invisiblepara={[
                      "Logo Design",
                      "Business Card and Letter Head Design",
                      "1 Year Domain and Hosting",
                      "5 Page Website Design",
                      "5 business Email Id",
                      "Social Media Page (Creation Facebook/Instagram/LinkedIn/Twitter)",
                      "One Time One Page SEO",
                      "One Month Local SEO"
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 card-column ">
                <div className="card-wrapper">
                  <Card
                    image={thirdcardimg}
                    alt="Example image"
                    title="Example title"
                    kit="E-Commerce Startup Bundle  Kit"
                    invisibleheading="E-Commerce Startup Bundle Kit"
                    invisiblepara={[
                      "Logo Design",
                      "Business Card and Letter Head Design",
                      "1 Year Domain and Hosting",
                      " 5 business Email Id",
                      " Up to 30 Products CMS Based",
                      " Social Media Page Creation( Facebook/Instagram/LinkedIn/Twitter)",
                      "  One Time One Page SEO",
                      " One Month Local SEO",
                      " Website Design"
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
              <Startupshine phone=" +91-9667729323" />
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
                  heading="Company Registration"
                  image={firsticon}
                  image2={firsticon2}
                  para="One of the first steps in starting a business is registering it. However, the process can be complicated, time-consuming, and expensive. That's why at Startup Mantra, we offer company registration services to help new business owners register their companies quickly and efficiently. Our experienced team of professionals will handle all the paperwork and ensure that your company is registered in compliance with all legal requirements."
                />
                <Seccard
                  heading="Website Development"
                  image={fifthicon}
                  image2={fifthicon2}
                  para="In today's digital age, having a website is crucial for any business. A website serves as your online storefront, where customers can learn more about your business and the products or services you offer. At Startup Mantra, we specialize in website development and design. We use the latest technologies and design trends to create a website that is not only visually appealing but also easy to navigate and optimized for search engines."
                />
                <Seccard
                  className="third-icon-wrap"
                  heading="Graphic Designing"
                  image={thirdicon}
                  image2={thirdicon2}
                  para="In addition to your website, your business needs an attractive and consistent visual identity that reflects your brand values and personality. At Startup Mantra, we provide professional graphic design services, including logo design, business card design, brochure design, and other marketing materials. Our team of designer’s works closely with you to understand your brand and create designs that will stand out and make a lasting impression on your customers."
                />
                <Seccard
                  heading="Digital Marketing"
                  image={secondicon}
                  image2={secondicon2}
                  para="Once your website is up and running, the next step is to attract visitors and convert them into customers. That's where digital marketing comes in. At Startup Mantra, we offer a range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and email marketing. Our goal is to help you reach your target audience and drive more traffic to your website, resulting in increased leads and sales."
                />

                <Seccard
                  heading="Mobile App Development"
                  image={fourthicon}
                  image2={fourthicon2}
                  para="In today's mobile-first world, having a mobile app is no longer a luxury but a necessity for businesses. A mobile app can help you reach more customers, enhance their experience, and improve customer loyalty. At Startup Mantra, we offer mobile app development services for both iOS and Android platforms. Our team of experienced developers will work closely with you to understand your business needs and create a mobile app that meets your requirements."
                />

                <Seccard
                  heading="Start up Brand Kit"
                  image={sixthicon}
                  image2={sixthicon2}
                  para="Our Startup Brand Kit includes everything you need to create a strong brand identity that resonates with your target audience. From logo design and business card templates to social media graphics and website design, we've got you covered. Our team of experts will work closely with you to understand your brand vision and create a customized solution that meets your specific needs.  "
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
        <div className="whatsapp-wrap">
          <a
            href={`https://chatwith.io/s/startup-mantra`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
        </div>
        <div className="call-wrap">
          <a href="tel: +91-9667729323">
            <img src={call} alt="phonecall" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

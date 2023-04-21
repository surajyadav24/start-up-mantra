import React from "react";
import "./about.css";
import threepeople from "../images/people.png";
function about() {
  return (
    <>
      <section className="abt" id="abt">
        <div className="container">
          <div className="heading-wrapper">
            <h1 className="heading">About Startup Mantra</h1>
            <h2 className="sub-heading">
              A COMPLETE STARTUP SOLUTION FOR YOUR BUSINESS GROWTH
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="abt-wrapper">
                <p className="abt-paragraph">
                  Starting a new business can be an overwhelming experience. As
                  a new entrepreneur, you must manage all aspects of your
                  business, including registration, website development,
                  marketing, and graphic design. With so much to do, it’s easy
                  to get lost in the process.
                </p>
                <p className="abt-paragraph">
                  At Startup Mantra, we believe that every business owner
                  deserves a complete startup solution that will help them grow
                  their business with ease. Our services include company
                  registration, website development, digital marketing, graphic
                  design, and mobile app development, all tailored to meet your
                  unique business needs. Our tagline says it all – A Complete
                  Startup Solution for Your Business Growth.
                </p>
                <p className="abt-paragraph">
                  We at Startup Mantra helps startups to get registered and grow
                  their business online. We offer a variety of services to our
                  clients, including company registration, website development,
                  and online marketing. We building our own technological and
                  creative success. We are committed to helping startups reach
                  their full potential, and we are always looking for new ways
                  to help them grow. If you are a startup owner, we would love
                  to hear from you and see how we can help you grow your
                  business. Our company thrives on passion and the will to
                  innovate in order to achieve success in whatever they do.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default about;

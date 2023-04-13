import React from "react";
import "./about.css";
import threepeople from "../images/people.png"
function about() {
  return (
    <>
      <section className="abt" id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="abt-wrapper">
                <h2 className="heading">About US</h2>
                <h1 className="sub-heading">
                A COMPLETE STARTUP SOLUTION FOR YOUR BUSINESS GROWTH
                </h1>
                <p className="abt-paragraph">
                  We at Startup Mantra helps startups to get registered and grow their business online. We offer a variety of services to our clients, including company registration, website development, and online marketing. We building our own technological and creative success. We are committed to helping startups reach their full potential, and we are always looking for new ways to help them grow. If you are a startup owner, we would love to hear from you and see how we can help you grow your business. Our company thrives on passion and the will to innovate in order to achieve success in whatever they do.
                </p>
             <div className="abt-img">
             <img src={threepeople} alt="" className="text-center" />
             </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;

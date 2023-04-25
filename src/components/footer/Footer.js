import React from "react";
import logo from "../images/Logo.png";
import fb from "../images/fb.png";
import twitter from "../images/tweet.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5 col-sm-5 ">
              <div className="footer-abt-des">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <p>
                  Worry not if your business is new. We are here to give you the
                  appropriate direction- Start-Up Mantra is all that you need!
                </p>
                <div className="social">
                  <div className="social-icon">
                    <a href="https://www.facebook.com/startupmantras">
                      <img src={fb} alt="facebook" />
                    </a>
                  </div>
                
                
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/company/startup-mantra/">
                      <img src={linkedin} alt="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-sm-4 ">
              <h3 className="ul-heading">Services</h3>
              <ul>
                <li>Company Registration</li>
                <li>Website Development</li>
                <li>Graphic Designing</li>
                <li>Digital Marketing</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
            <div className="col-lg-3 col-xl-3 col-sm-3 ">
              <h3 className="ul-heading">Startup Kits</h3>
              <ul>
                <li>Basic Startup Kit</li>
                <li>Premium Startup Kit</li>
                <li>E-Commerce Startup Bundle Kit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="privacy">
                © 2012-2023 Startup Mantra. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

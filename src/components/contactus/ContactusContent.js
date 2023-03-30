import mail from "../images/mail.png";
import location from "../images/location.png";
import phone from "../images/phone.png";
import React from "react";
import "./Contactus.css";
function ContactusContent() {
  return (
    <>
      <div className="contactus-heading">
        <h2>Do you have any query?</h2>
      </div>
      <div className="contact-para">
        If you’d like to talk to our consulting team, contact us via the form
        and we’ll get back to you shortly.
      </div>

      <div className="icon-wrapper">
        <div className="icon">
          <img src={phone} alt="" />
        </div>
        <p>+91-95994 49323</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon">
          <img src={mail} alt="" />
        </div>
        <p>sales@startupmantra.co</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon">
          <img src={location} alt="" />
        </div>
        <p>
          611/612,6th Floor,Mahatta Tower,<br/> B-1 Janakpuri, New Delhi, Delhi
          110058
        </p>
      </div>
    </>
  );
}
export default ContactusContent;

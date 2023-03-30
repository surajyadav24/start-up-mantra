import React from "react";
import "./Contactus.css";
import MyButton from "../button";

function Contactus() {
  return (
    <div className="form-wrapper">
      <div className="form-heading">
        <h2>Request A Callback</h2>
      </div>
      <form action="">
        <input type="text" placeholder="Name*" />
        <input type="text" placeholder="Packages*" />
        <input type="tel" placeholder="Phone Number*" />
        <textarea
          className=" "
          cols="20"
          rows="2"
          placeholder="How can we help you?*"
        />
      </form>
      <MyButton type="submit" variant="primary" label="Send Request" />
    </div>
  );
}

export default Contactus;

import React from "react";
import "./seccard.css";
function seccard(props) {
  const { firsticoncard } = props;
  return (
    <>
    
      <div className="seccard-wrapper">
        <div className="sec-small-card">
          <div className="heading">{props.heading}</div>
          <div className="sec-para">{props.para}</div>
          <div className="card-icon">
            <img className="icon-1"src={props.image} alt="services" />
            <img className="icon-2" src={props.image2} alt="services" />
       
          </div>
        </div>
      </div>
    </>
  );
}

export default seccard;

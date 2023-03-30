import React from "react";
import "./card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="inner-box">
          <div className="invisible-card">
            <h2>{props.invisibleheading}</h2>
            <ul>
              {props.invisiblepara.map((item) => {
               return <li key={item}>{item}</li>
              })}
            </ul>
          </div>
          <div className="front-card">
            <figure>
              <img src={props.image} alt={props.title} />
              <figcaption>{props.kit}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

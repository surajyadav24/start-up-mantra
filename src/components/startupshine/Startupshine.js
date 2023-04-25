import React from 'react'
import meeting from "../images/meeting.png";
import MyButton from '../button';

function Startupshine(props) {
  return (
    <>
    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
    <div className="meeting">
      <img src={meeting} alt="meeting" />
    </div>
  </div>
  <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
    <div className="abt-discription">
      <h2>Make Your Startup Shine</h2>
      <p>
        Track your business progress with Startup Mantra’s exclusive
        packages suitable for every budget. We are here to hear you
        and shape your startup just the way you want!
      </p>
      <a  className='btn btn-primary' href={`tel:${props.phone}`}>
      <i class="bi bi-telephone-fill"></i>
        +91-9667729323</a>
    </div> 
  </div>
  </>
  )
}

export default Startupshine
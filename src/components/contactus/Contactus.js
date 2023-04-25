import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
function Contactus() {
  const [formData, setFormData] = useState({});
  const [completed, setCompleted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    let isValid = true;
    if (!isValid) {
      return;
    }

    event.preventDefault();
    const data = { ...formData };
    axios
      .post(
        "https://sheet.best/api/sheets/364a8f6e-d98c-4f53-be86-8b172ed66256",
        data
      )
      .then((response) => {
        console.log(response);
        setFormData("");
        setCompleted(true);
        setActiveStep(0);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-heading">
        <h2>Request A Callback</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-cont"
          name="name"
          type="text"
          placeholder="Name*"
          value={formData.name || ""}
          onChange={handleInputChange}
        />
        <input
          className="input-cont"
          type="text"
          name="emailaddress"
          placeholder="E-mail Address"
          value={formData.emailaddress || ""}
          onChange={handleInputChange}
        />
        <input
          className="input-cont"
          type="tel"
          placeholder="Phone Number*"
          name="phone"
          value={formData.phone || ""}
          onChange={handleInputChange}
        />
        <textarea
          className="input-cont"
          cols="20"
          rows="5"
          type="text"
          onChange={handleInputChange}
          placeholder="How can we help you?*"
        />
        <Button type="submit" variant="primary">
          Send Request
        </Button>
      </form>
    </div>
  );
}

export default Contactus;

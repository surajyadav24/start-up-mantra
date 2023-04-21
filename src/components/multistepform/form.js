import React, { useState, useEffect } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
const steps = ["step1", "step2"];

const MultiStepForm = () => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [checkboxValues, setCheckboxValues] = useState({
    Services1: false,
    Services2: false,
    Services3: false,
    Services4: false,
  });

  const validateForm = () => {
    let errors = {};
    let errorMessages = [];

    // Validate name field
    if (!formData.name) {
      errors.name = "Name is required";
      errorMessages.push(errors.name);
    }

    // Validate address field
    if (!formData.emailaddress) {
      errors.emailaddress = "Address is required";
      errorMessages.push(errors.emailaddress);
    }

    // Validate phone field
    if (!formData.phone) {
      errors.phone = "Phone is required";
      errorMessages.push(errors.phone);
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is not in the correct format";
      errorMessages.push(errors.phone);
    }

    if (errorMessages.length > 0) {
      const errorMessage = errorMessages.join("\n");
      alert(errorMessage);
      return false;
    }
    setFormErrors(errors);
    console.log(errors);
    return true;
  };

  const validateForm2 = () => {
    let errors = {};
    let isValid = true;
    if (!formData.authorize) {
      errors.authorize = "Please authorize the form submission";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // radio input default changes

  const handleNext = (event) => {
    event.preventDefault();
    let isValid = true;
    switch (activeStep) {
      case 0:
        isValid = validateForm();
        break;
      // Add more cases to validate additional steps
      case 2:
        isValid = validateForm2();
        break;
    }
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    setCheckboxValues({ ...checkboxValues, [checkboxName]: isChecked });
    return;
  };
  // consoling
  useEffect(() => {
    console.log("checkboxValues:", checkboxValues);
  }, [checkboxValues]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    let isValid = true;
    if (!isValid) {
    }

    event.preventDefault();
    const data = { ...formData };
    axios
      .post(
        "https://sheet.best/api/sheets/523a0668-0032-4e7d-849e-913f9a22b963",
        data
      )
      .then((response) => {
        console.log(response);
        setFormData("");
      });
    console.log(formData);
    setCompleted(true);
    setFormData({});
    setActiveStep(0);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <form onSubmit={handleNext}>
              <div className="container">
                <div className="row">
                  <p className="form-heading">
                    Don’t know <span className="green-heading"> where </span>
                    to start?
                  </p>
                  <p className="stroke-heading">We can help</p>
                  <FormControl
                    className="input-box"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    isRequired={true}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.name}
                  </Form.Control.Feedback>
                  <FormControl
                    className=" input-box"
                    type="text"
                    placeholder="Email Address*"
                    name="emailaddress"
                    value={formData.emailaddress || ""}
                    onChange={handleInputChange}
                    isRequired
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.emailaddress}
                  </Form.Control.Feedback>
                  <FormControl
                    className="input-box"
                    placeholder="Phone Number*"
                    type="tel"
                    id="phone"
                    name="phone"
                    required="true"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    isRequired
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.phone}
                  </Form.Control.Feedback>
                  <FormControl
                    className="input-box"
                    type="text"
                    placeholder="company name"
                    name="companyname"
                    value={formData.companyname || ""}
                    onChange={handleInputChange}
                    isRequired
                  />

                  <Form.Control.Feedback type="invalid">
                    {formErrors.companyname}
                  </Form.Control.Feedback>
                </div>
              </div>
            </form>
          </>
        );

      case 1:
        return (
          <>
            <div className="form-wrapaper">
              <p className="form-heading">Services</p>
              <p className="stroke-heading">Required</p>
              <div className="inputs-wrapper d-flex flex-column justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="checkbox"
                    id="Company Registration"
                    name="Services"
                    className="mx-2"
                    value={
                      formData.CompanyRegistration || "CompanyRegistration"
                    }
                    isChecked={checkboxValues.CompanyRegistration}
                    onChange={handleCheckboxChange}
                  />
                  <label for="Website-Development">Company Registration</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="checkbox"
                    id="Website-Development"
                    name="Services"
                    className="mx-2"
                    value={formData.Websitedevelopment || "Websitedevelopment"}
                    isChecked={checkboxValues.Services1}
                    onChange={handleCheckboxChange}
                  />
                  <label for="Website-Development">Website Development</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="checkbox"
                    id="Graphic-Designing"
                    name="Services"
                    className="mx-2"
                    value={
                      formData.GraphicDesigning || "GraphicDesigning"
                    }
                    isChecked={checkboxValues.Services2}
                    onChange={handleCheckboxChange}
                  />
                  <label for="startup-kit">Graphic Designing</label>
                </div>
             
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="checkbox"
                    id="Digital-Marketing"
                    name="Services"
                    className="mx-2"
                    value={formData.DigitalMarketing || "DigitalMarketing"}
                    isChecked={checkboxValues.Services4}
                    onChange={handleCheckboxChange}
                  />
                  <label for="startup-kit">Digital Marketing</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="checkbox"
                    id="Mobile-App-Development"
                    name="Services"
                    className="mx-2"
                    value={formData.MobileAppDevelopment || "MobileAppDevelopment"}
                    isChecked={checkboxValues.Services4}
                    onChange={handleCheckboxChange}
                  />
                  <label for="startup-kit">Mobile App Development</label>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-wrapaper">
              <p className="form-heading">Connect with us:</p>
              <p className="stroke-heading">+91-9599449323</p>
              <p className="intrested">
                Are you interested in getting free consultation?
              </p>
              <div className="inputs-wrapper d-flex flex-row justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="interested"
                    name="intrest"
                    className="mx-2"
                    value={formData.intrested || "intrested"}
                    onChange={handleInputChange}
                  />
                  <label for="company-exist">Yes</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="not-interested"
                    name="intrest"
                    className="mx-2"
                    value={formData.notintrested || "notintrested"}
                    onChange={handleInputChange}
                  />
                  <label for="company-exist">no</label>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  const renderButtons = () => {
    if (completed) {
      return (
        <Button variant="primary" onClick={() => setCompleted(false)}>
          Reset Form
        </Button>
      );
    } else {
      return (
        <>
          <Button
            className="disabled-btn prev-btn"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            className="next-btn"
            variant="primary"
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {completed ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="form-wraper">
                <div className="thanks">
                  <p className="form-heading">Thank</p>
                  <p className="stroke-heading">You !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6">
                <div className="form-wraper">
                  <Form onSubmit={handleSubmit}>
                    {renderForm()}
                    <br />
                    <div className="btn-wrapper">{renderButtons()}</div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;

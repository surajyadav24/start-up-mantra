import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
const steps = ["", "", "", "", "", ""];

const MultiStepForm = () => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
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
          <form onSubmit={handleNext} >
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
                    isRequired={
                      true
                    }
                />
                <FormControl
                  className=" input-box"
                  type="text"
                  placeholder="address"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  isRequired
                />
                <FormControl
                  className="input-box"
                  placeholder="phone no."
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                  isRequired
                />
                <FormControl
                  className="input-box"
                  type="text"
                  placeholder="company name"
                  name="companyname"
                  value={formData.companyname || ""}
                  onChange={handleInputChange}
                  isRequired

                />
              </div>
            </div>
            </form>
          </>
        );
      case 1:
        return (
          <>
            {" "}
            <div className="form-wrapaper">
              <p className="form-heading">Is your company already</p>
              <p className="stroke-heading">Registered?</p>

              <div className="inputs-wrapper d-flex flex-column justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="companyexist"
                    name="companyexist"
                    className="mx-2"
                    value={formData.companyexist || "companyexist"}
                    onChange={handleInputChange}
                  />
                  <label for="company-exist">Yes</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="companynotexist"
                    name="companyexist"
                    className="mx-2"
                    value={formData.notexist || "notexist"}
                    onChange={handleInputChange}
                  />
                  <label for="company-exist">no</label>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-wrapaper">
              <p className="form-heading">Choose your</p>
              <p className="stroke-heading">Company</p>
              <div className="inputs-wrapper d-flex flex-column justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Proprietor"
                    name="companytype"
                    className="mx-2"
                    value={formData.Proprietor || ""}
                    onChange={handleInputChange}
                  />
                  <label for="company-type">Proprietor</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="PartnershipFirm"
                    name="companytype"
                    className="mx-2"
                    value={formData.PartnershipFirm || "PartnershipFirm"}
                    onChange={handleInputChange}
                  />
                  <label for="company-type">Partnership Firm</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Private-Limited"
                    name="companytype"
                    className="mx-2"
                    value={formData.PrivateLimited || "PrivateLimited"}
                    onChange={handleInputChange}
                  />
                  <label for="company-type">Private Limited</label>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-wrapaper">
              <p className="form-heading">Choose your</p>
              <p className="stroke-heading">Startup Kit</p>
              <div className="inputs-wrapper d-flex flex-column justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Basic-Startup-Kit"
                    name="startup-kit"
                    className="mx-2"
                    value={formData.BasicStartupKit || "BasicStartupKit"}
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">Basic Startup Kit</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Premium-Startup-Kit"
                    name="startup-kit"
                    className="mx-2"
                    value={formData.premiumStartupKit || "premiumStartupKit"}
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">Premium Startup Kit</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="E-Commerce-Startup-Bundle-Kit"
                    name="startup-kit"
                    className="mx-2"
                    value={formData.EcomStartupKit || "EcomStartupKit"}
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">E-Commerce Startup Bundle Kit</label>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="form-wrapaper">
              <p className="form-heading">Additional</p>
              <p className="stroke-heading">Services</p>
              <div className="inputs-wrapper d-flex flex-column justify-content-start  ">
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Website-Development"
                    name="services"
                    className="mx-2"
                    value={formData.Websitedevelopment || "Websitedevelopment"}
                    onChange={handleInputChange}
                  />
                  <label for="Website-Development">Website Development</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Social-Media-Marketing"
                    name="services"
                    className="mx-2"
                    value={
                      formData.SocialMediaMarketing || "SocialMediaMarketing"
                    }
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">Social Media Marketing</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Google-Ads"
                    name="services"
                    className="mx-2"
                    value={formData.Goolgeads || "Goolgeads"}
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">Google Ads</label>
                </div>
                <div className="input-div d-flex justify-content-start">
                  <input
                    type="radio"
                    id="Search-Engine-Optimization"
                    name="services"
                    className="mx-2"
                    value={formData.SEO || "SEO"}
                    onChange={handleInputChange}
                  />
                  <label for="startup-kit">Search Engine Optimization</label>
                </div>
              </div>
            </div>
          </>
        );
      case 5:
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
              <p className="authorize">
                <input type="checkbox" id="authorize" width={20} /> I authorize
                VAMedia Box Pvt. Ltd. to call me back
              </p>
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

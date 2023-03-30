import React from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Logo from "../images/Logo.png";
import MultiStepForm from "../multistepform/form";

function Header() {
  return (
    <>
      <div className="header py-3 ">
        <div className="container">
          <Navbar expand="md" className=" navbar d-flex justify-end">
            <Navbar.Brand className="navbar-brand" href="#home">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-0">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#about">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <MultiStepForm />
        </div>
      </div>
    </>
  );
}

export default Header;

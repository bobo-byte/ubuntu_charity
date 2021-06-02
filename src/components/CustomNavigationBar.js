import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavBrand from "./assets/images/ubuntuNav_brand.jpg";
const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;
const { Item } = NavDropdown;

export default () => {
  return (
    <>
      <Navbar expand="lg">
        <Brand>
          <div className="text-center">
            <img
              alt="ubuntu_logo"
              src={NavBrand}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />{" "}
            <span id="nav-brand-text">UBUNTU</span>
            <span
              className="text-muted"
              style={{
                display: "block",
                fontSize: "15px"
              }}
            >
              {" "}
              - Defined by Kindness -
            </span>
          </div>
        </Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-links" href="https://qtmo4.csb.app/">
              Home
            </Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <Item>Coming soon</Item>
              <Item>Coming soon</Item>
              <Item>Donate?</Item>
            </NavDropdown>
            <Link className="nav-links" href="#contact_us">
              Contact us
            </Link>
            <Link className="nav-links" href="/about">
              About us
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

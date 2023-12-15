"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Dropdown, NavDropdown, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaOpencart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import style from "./header.module.scss";

const CustomNavItem = ({ text }) => {
  return (
    <Dropdown.Item className={`${style.dropdown_item} nav-link`}>
      {text}
    </Dropdown.Item>
  );
};

const CustomNavHeader = ({ text }) => {
  return (
    <Dropdown.Header className={`${style.dropdown_header}`}>
      {text}
    </Dropdown.Header>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={`${style.navbar_main_div} `}>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand
            href="#home"
            className={`${style.navbar_brand} me-0 p-0`}
          >
            <Link href="/">
              {/* <Image src={logo} width={233} height={200} alt='Banner Image' /> */}
              <FaOpencart fontSize={50} color="#0ABB92" />
            </Link>
          </Navbar.Brand>
          <div className={`${style.mob_account_icons} `}>
            <Link href="#">
              <FaUser className={`${style.info_icon}`} />
            </Link>
            {/* <Link href="#">
              <div className={`${style.cart_items} `}>
                <FaShoppingCart className={`${style.info_icon}`} />
                <span>3</span>
              </div>
            </Link> */}
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className={`${style.navbar_nav} `}>
              <Nav.Link className={`${style.nav_link} `}> Signin</Nav.Link>
              <Nav.Link className={`${style.nav_link} `}> About</Nav.Link>
              <Nav.Link className={`${style.nav_link} `}> Pricing</Nav.Link>
              <Nav.Link className={`${style.nav_link} `}> Support</Nav.Link>
              {/* <Nav.Link className={`${style.nav_link} `}>
                <FaUser className={`${style.info_icon} me-3`} />
                Account
              </Nav.Link> */}
              <NavDropdown
                title={
                  <>
                    <FaUser className={`${style.info_icon} me-2`} />
                    <span className="text-gray">Avtar</span>
                  </>
                }
                id="basic-nav-dropdown"
                className={`${style.profile_dropdown}`}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

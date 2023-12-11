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
    <div>
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${style.navbar_main_div} `}
        >
          <Navbar.Brand
            href="#home"
            className={`${style.navbar_brand} me-0 p-0`}
          >
            <Link href="/">
              {/* <Image src={logo} width={233} height={200} alt='Banner Image' /> */}
              <FaOpencart fontSize={50} color="#000000" />
            </Link>
          </Navbar.Brand>
          <div className={`${style.mob_account_icons} `}>
            <Link href="/account">
              <FaUser className={`${style.info_icon}`} />
            </Link>
            <Link href="/cart">
              <div className={`${style.cart_items} `}>
                <FaShoppingCart className={`${style.info_icon}`} />
                <span>3</span>
              </div>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className={`${style.navbar_nav} `}>
              {/* <Nav.Link className={`${style.nav_link} `} href='#'>
              Search
            </Nav.Link> */}
              <Nav.Link className={`${style.nav_link} `} onClick={handleShow}>
                Login
              </Nav.Link>

              <NavDropdown
                // className="pr-2 py-2 align-text-top"
                title="Shop"
                id="basic-nav-dropdown"
                className={`${style.nav_link} ${style.mega_menu} mega-menu`}
              >
                <div className="pt-0 mt-0 container-fluid">
                  <Row>
                    <Col xs="12" md="3">
                      <CustomNavHeader text={"TOPS"}>TOPS</CustomNavHeader>
                      <CustomNavItem text={"Long sleeve"}></CustomNavItem>
                      <CustomNavItem text={"3/4 sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Half sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Short sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Sleeveless"}></CustomNavItem>
                    </Col>

                    <Col xs="12" md="3">
                      <CustomNavHeader text={"TUNICS"}>TUNICS</CustomNavHeader>
                      <CustomNavItem text={"Long sleeve"}></CustomNavItem>
                      <CustomNavItem text={"3/4 sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Short sleeve"}></CustomNavItem>
                    </Col>

                    <Col xs="12" md="3">
                      <CustomNavHeader text={"DRESSES"}>
                        DRESSES
                      </CustomNavHeader>
                      <CustomNavItem text={"Long sleeve"}></CustomNavItem>
                      <CustomNavItem text={"3/4 sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Short sleeve"}></CustomNavItem>
                      <CustomNavItem text={"Maxi dresses"}></CustomNavItem>
                    </Col>
                    <Col xs="12" md="3">
                      <CustomNavHeader text={"DRESSES"}>
                        ACCESSORIES
                      </CustomNavHeader>
                      <CustomNavItem text={"View all"}></CustomNavItem>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>
              <Nav.Link
                className={`${style.nav_link} menu-mob-hide`}
                href="/account"
              >
                <FaUser className={`${style.info_icon}`} />
              </Nav.Link>
              <Nav.Link
                className={`${style.nav_link} menu-mob-hide`}
                href="/cart"
              >
                <div className={`${style.cart_items} `}>
                  <FaShoppingCart className={`${style.info_icon}`} />
                  <span>3</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

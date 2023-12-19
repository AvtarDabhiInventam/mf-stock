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
import logo from "../../images/mf-stock-logo.png";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

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
              <Image src={logo} alt="Banner Image" width={65} height={65} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className={`${style.navbar_nav} `}>
              <Nav.Link href="/login" className={`${style.nav_link} `}>
                Login
              </Nav.Link>
              <Nav.Link href="/notification" className={`${style.nav_link} `}>
                {" "}
                <IoMdNotificationsOutline fontSize={25} />
              </Nav.Link>
              <Nav.Link href="wallet" className={`${style.nav_link} `}>
                {" "}
                <IoWalletOutline fontSize={25} />
              </Nav.Link>
              <Nav.Link className={`${style.nav_link} `}>
                {" "}
                <IoCartOutline fontSize={25} />
              </Nav.Link>
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
                <NavDropdown.Item href="/bank-info">
                  Bank & AutoPay
                </NavDropdown.Item>
                <NavDropdown.Item href="/watchlist">Watchlist</NavDropdown.Item>
                <NavDropdown.Item href="/notification">
                  Notification
                </NavDropdown.Item>
                <NavDropdown.Item href="/orderlist">Orders</NavDropdown.Item>
                <NavDropdown.Item href="/profile-setting">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

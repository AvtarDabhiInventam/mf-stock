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
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { persistor } from "@/redux/store";

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
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLoggedin = localStorage.getItem("isLoggedin");
  const user = useSelector((state) => state.authReducer.user);

  return (
    !(
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forgot-password"
    ) && (
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
            <div className={`${style.form_inputs} d-flex`}>
              <input
                class=""
                className={`${style.form_control} form-control`}
                type="text"
                placeholder="Search any product..."
              />
              <IoSearchSharp fontSize={20} className={`${style.search_icon}`} />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className={`${style.navbar_nav} `}>
                <Link href="/dashboard" className={`${style.nav_link} `}>
                  Dashboard
                </Link>
                {!isLoggedin && (
                  <Link href="/login" className={`${style.nav_link} `}>
                    Login
                  </Link>
                )}
                <Link href="/notification" className={`${style.nav_link} `}>
                  <IoMdNotificationsOutline fontSize={25} />
                </Link>
                <Link href="wallet" className={`${style.nav_link} `}>
                  <IoWalletOutline fontSize={25} />
                </Link>
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
                  <NavDropdown.Item>
                    <Link href="/bank-info" className={`${style.nav_link} `}>
                      Bank & AutoPay
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/watchlist" className={`${style.nav_link} `}>
                      Watchlist
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/notification" className={`${style.nav_link} `}>
                      Notification
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/orderlist" className={`${style.nav_link} `}>
                      Orders
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      href="/profile-setting"
                      className={`${style.nav_link} `}
                    >
                      Settings
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logout());
                      // persistor.purge();
                      router.push("/login");
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    )
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import style from "./footer.module.scss";
import Image from "next/image";
import googleImg from "../../images/google-play.webp";

const Footer = () => {
  return (
    <>
      <div className={`${style.footer_main_div}`}>
        <Container>
          <Row className="mob_gap_space">
            <Col xs={12} md={4} lg={3}>
              <div>
                <h5 className={`${style.box_heading}`}>Get in touch</h5>
                <p className={`${style.para_text}`}>Call Us 24/7 Free22</p>
                <h6 className={`${style.highlight_text}`}>1800 6565 222</h6>
                <p className={`${style.para_text}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className={`${style.para_text}`}>support@example.com</p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div>
                <h5 className={`${style.box_heading}`}>Products</h5>
                <Link href="#" className={`${style.para_text}`}>
                  Stocks
                </Link>
                <Link href="#" className={`${style.para_text}`}>
                  Mutual Funds
                </Link>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div>
                <h5 className={`${style.box_heading}`}>Support</h5>
                <Link href="aboutus" className={`${style.para_text}`}>
                  About Us
                </Link>
                <Link href="/blog" className={`${style.para_text}`}>
                  Blog
                </Link>
                <Link href="#" className={`${style.para_text}`}>
                  Help and Support
                </Link>
                <Link href="terms-condtion" className={`${style.para_text}`}>
                  Terms and condition
                </Link>
              </div>
            </Col>
            <Col xs={12} md={8} lg={3}>
              <div>
                <h5 className={`${style.box_heading}`}>Quick Links</h5>
                <Link href="#" className={`${style.para_text}`}>
                  AMC Mutual Funds
                </Link>
                <Link
                  href="https://sipcalculator.in/"
                  className={`${style.para_text}`}
                >
                  Calculators
                </Link>
                <Link href="#" className={`${style.para_text}`} target="_blank">
                  Open Demat Account
                </Link>
                <Link href="#" className={`${style.para_text}`}>
                  Sitemap
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${style.bottom_footer_main_div}`}>
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
            <p className="mb-0">
              ⓒ 2023 Stock Market. All rights reserved, Built with ♥ in India
            </p>
            <Link href="#">
              <Image
                src={googleImg}
                width={170}
                height={50}
                alt="Google Play Service"
              />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;

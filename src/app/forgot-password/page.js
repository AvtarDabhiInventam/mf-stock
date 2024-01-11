"use client";
import React from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import loginImg from "../../images/login-bg.jpg";
import Image from "next/image";
import logo from "../../images/mf-stock-logo.png";

function ForgotPassword() {
  return (
    <>
      <Container>
        <div className={`${styles.auth_page_main_div}`}>
          <Row>
            <Col md={6} className="pe-0">
              <div className={`${styles.contains_div}`}>
                <Image src={loginImg} alt="login img" />
                {/* <div>
                  <h3>Hello There, Join Us </h3>
                  <p>
                    Enter your registrated email address to receive password
                    reset instruction
                  </p>
                </div> */}
              </div>
            </Col>
            <Col md={6} className="ps-0">
              <div className={`${styles.auth_card_div}`}>
                <div className="text-center w-100 mb-3">
                  <Image src={logo} alt="logo" width={65} height={65} />
                </div>
                <h4>Forgot Password</h4>
                <Form>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label className={`${styles.auth_label}`}>
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className={`${styles.auth_form_control}`}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                          Reset Password
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ForgotPassword;

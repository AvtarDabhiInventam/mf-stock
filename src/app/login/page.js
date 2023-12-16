"use client";
import React from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

function Login() {
  return (
    <>
      <div className={`${styles.auth_page_main_div}`}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={`${styles.contains_div}`}>
                <div>
                  <h3>Hello There, Join Us </h3>
                  <p>
                    Please login using email id we will sent OTP for
                    verification
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.auth_card_div}`}>
                <h4>Sign In</h4>
                <Form>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter password"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <div className="d-flex justify-content-between mt-2">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link href="/forgot-password">Forgot Password</Link>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className={`${styles.continue_with}`}>
                        <span> Or Continus with </span>
                      </div>
                      <div className={`${styles.social_icon}`}>
                        <SiGmail />
                      </div>
                    </Col>
                    <Col md={12}>
                      <p className="text-center mt-4 mb-0">
                        Don&apos;t have an account?{" "}
                        <Link href="/register">Sign Up</Link>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;

"use client";
import React from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

function ForgotPassword() {
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
                    Enter your registrated email address to receive password
                    reset instruction
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.auth_card_div}`}>
                <h4>Forgot Password</h4>
                <Form>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                          Reset Password
                        </Button>
                      </div>
                    </Col>
                    <Col md={12}>
                      <p className="text-center mt-4 mb-0">
                        <Link href="#">Terms & Condition Apply</Link>
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

export default ForgotPassword;

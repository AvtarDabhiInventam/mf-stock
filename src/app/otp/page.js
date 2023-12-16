"use client";
import React from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

function OTP() {
  return (
    <>
      <div className={`${styles.auth_page_main_div}`}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={`${styles.contains_div}`}>
                <div>
                  <h3>We care about your account&apos;s security. </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.auth_card_div}`}>
                <h4>Validate OTP</h4>
                <p className="text-center mb-4">
                  Please enter the OTP (one time password) to verify your
                  account. A Code has been sent to *******179
                </p>
                <Form>
                  <Row>
                    <Col md={12}>
                      <div className="d-flex gap-3">
                        <Form.Control type="text" />
                        <Form.Control type="text" />
                        <Form.Control type="text" />
                        <Form.Control type="text" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-4">
                        <Button variant="primary" type="submit">
                          Verify
                        </Button>
                      </div>
                    </Col>

                    <Col md={12}>
                      <p className="text-center mt-4 mb-0">
                        Not received your code?
                        <Link href="#"> Resend code</Link>
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

export default OTP;

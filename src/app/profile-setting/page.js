"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "@/styles//profile-setting.module.scss";

function Profile_Setting() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container className={`mb-4 mt-5`}>
      <Breadcrumb className="mb-3">
        <BreadcrumbItem href="#">Home </BreadcrumbItem>
        <BreadcrumbItem href="#">Stocks</BreadcrumbItem>
        <BreadcrumbItem active>Apple</BreadcrumbItem>
      </Breadcrumb>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className={`${style.profile_setting_tabs} flex-column`}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Basic Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Change Password
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Change Pin
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Form>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Date of Birth</Form.Label>
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="form-control w-100"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="marital status"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label className="mb-3">Gender</Form.Label>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              label="Male"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              label="Female"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                            <Form.Check
                              inline
                              label="Other"
                              type={type}
                              id={`inline-${type}-3`}
                            />
                          </div>
                        ))}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>PAN Number</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="marital status"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Unique Client Code</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="marital status"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={12}>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Form>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter New Password"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={12}>
                      <Button variant="primary" type="submit">
                        Change Password
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Form>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>New Pin</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={6}>
                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <Form.Label>Confirm New Pin</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter New Password"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} md={12}>
                      <Button variant="primary" type="submit">
                        Change Pin
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Profile_Setting;

import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ChangeProfile() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Profile</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col xs={6} md={6}>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Col>
        <Col xs={6} md={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <Form.Control type="email" placeholder="marital status" />
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
            <Form.Control type="email" placeholder="marital status" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Unique Client Code</Form.Label>
            <Form.Control type="email" placeholder="marital status" />
          </Form.Group>
        </Col>
        <Col xs={6} md={12}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ChangeProfile;

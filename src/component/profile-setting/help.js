import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Help() {
  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
        </Col>
        <Col xs={6} md={6}>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Email Address" />
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} className="h-auto" />
          </Form.Group>
        </Col>
        <Col xs={6} md={12}>
          <Button variant="primary" type="submit">
            Change Password
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Help;

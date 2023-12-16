import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function ChangePassword() {
  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Col>
        <Col xs={6} md={6}>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter New Password" />
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

export default ChangePassword;

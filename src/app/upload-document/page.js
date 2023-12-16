"use client";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/auth.module.scss";
import Link from "next/link";

const UploadDocument = () => {
  return (
    <>
      <div className="mt-5">
        <Container>
          <h3 className="main_title text-center">Upload Documents</h3>
          <Row>
            <Col md={12}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pan card</Form.Label>
                      <Form.Control type="file" className="doc_upload_input" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Aadhar card</Form.Label>
                      <Form.Control type="file" className="doc_upload_input" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Bank Statement</Form.Label>
                      <Form.Control type="file" className="doc_upload_input" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div className="text-center mt-4">
                      <Button variant="primary">Upload</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UploadDocument;

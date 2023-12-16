"use client";
import React from "react";
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
import style from "@/app/bank-info/bank-info.module.scss";
import { IoWalletOutline } from "react-icons/io5";
import { Radio, RadioGroup } from "@/component/radio-group";

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Bank Name",
    selector: (row) => row.title,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "14px",
      textTransform: "uppercase",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "14px",
    },
  },
};

const data = [
  {
    id: 1,
    title: (
      <div className="d-flex align-items-center">
        <div>
          <img
            width={50}
            src="https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fs-6 mb-2 fw-semibold">
            Axis Bank Share Purchase
          </span>
          <span className="gray-color fw-medium">XXXX XXXX XXXX 4545</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div className="d-flex align-items-center">
        <div>
          <img
            width={50}
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fs-6 mb-2 fw-semibold">
            HDFC Bank Share Purchase
          </span>
          <span className="gray-color fw-medium">XXXX XXXX XXXX 4545</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div className="d-flex align-items-center">
        <div>
          <img
            width={50}
            src="https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fs-6 mb-2 fw-semibold">
            ICICI Bank Share Purchase
          </span>
          <span className="gray-color fw-medium">XXXX XXXX XXXX 4545</span>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: (
      <div className="d-flex align-items-center">
        <div>
          <img
            width={50}
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fs-6 mb-2 fw-semibold">SBI Bank Share Purchase</span>
          <span className="gray-color fw-medium">XXXX XXXX XXXX 4545</span>
        </div>
      </div>
    ),
  },

  {
    id: 1,
    title: (
      <div className="d-flex align-items-center">
        <div>
          <img
            width={50}
            src="https://companyurlfinder.com/marketing/assets/img/logos/axisdirect.in.png.pagespeed.ce.CLxqY0vOkM.png"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fs-6 mb-2 fw-semibold">
            Axis Bank Share Purchase
          </span>
          <span className="gray-color fw-medium">XXXX XXXX XXXX 4545</span>
        </div>
      </div>
    ),
  },
];

function page() {
  return (
    <Container className={`${style.my_wallet} mb-4 mt-5`}>
      <Row>
        <Col sm={12}>
          <Breadcrumb className="mb-3">
            <BreadcrumbItem href="/">Home </BreadcrumbItem>
            <BreadcrumbItem href="#" active>
              Wallet
            </BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h5 className="fw-semibold mb-3 ms-lg-4 ms-sm-0">Add Another Bank</h5>
          <Form className="ms-lg-4 ms-sm-0">
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Name (as per bank detail)</Form.Label>
                  <Form.Control type="password" placeholder="Enter Name" />
                </Form.Group>
              </Col>
              <Col xs={6} md={12}>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Name of Bank</Form.Label>
                  <Form.Control type="password" placeholder="Enter Bank Name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={12}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Account Number"
                  />
                </Form.Group>
              </Col>
              <Col xs={6} md={12}>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control type="password" placeholder="Enter IFSC Code" />
                </Form.Group>
              </Col>
              <Col xs={6} md={12}>
                <Button variant="primary" type="submit">
                  Add Bank
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default page;

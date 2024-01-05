"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import style from "@/app/wallet/wallet.module.scss";
import { IoWalletOutline } from "react-icons/io5";
import { Radio, RadioGroup } from "@/component/radio-group";

import DataTable from "react-data-table-component";
import { FaCheck } from "react-icons/fa";

const columns = [
  {
    name: "Bank Name",
    selector: (row) => row.title,
  },
  {
    name: "Amount",
    selector: (row) => row.year,
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
          <span className="gray-color fw-medium">15 Apr 2022</span>
        </div>
      </div>
    ),
    year: <span className="fs-6 mb-2 fw-semibold text-danger">- $2000.00</span>,
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
          <span className="gray-color fw-medium">15 Apr 2022</span>
        </div>
      </div>
    ),
    year: (
      <span className="fs-6 mb-2 fw-semibold text-success">+ $3000.00</span>
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
          <span className="gray-color fw-medium">15 Apr 2022</span>
        </div>
      </div>
    ),
    year: <span className="fs-6 mb-2 fw-semibold text-success">+ 6200.00</span>,
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
          <span className="gray-color fw-medium">15 Apr 2022</span>
        </div>
      </div>
    ),
    year: <span className="fs-6 mb-2 fw-semibold text-danger">- $4565.00</span>,
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
          <span className="gray-color fw-medium">15 Apr 2022</span>
        </div>
      </div>
    ),
    year: <span className="fs-6 mb-2 fw-semibold text-danger">- $2000.00</span>,
  },
];

function page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
          <Col sm={12} md={12} lg={8}>
            <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
            />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className={`${style.my_wallet_right}`}>
              <div className={`${style.my_wallet_icon} text-center`}>
                <IoWalletOutline fontSize={70} />
              </div>
              <p className={`${style.my_wallet_title} text-center`}>
                Your Total Balance
              </p>
              <p className={`${style.my_wallet_amount} text-center`}>₹700.00</p>
              <Tab.Container id="left-tabs-example">
                <Nav variant="pills" justify>
                  <Nav.Item className="me-3">
                    <Nav.Link
                      eventKey="first"
                      className={`${style.my_wallet_tab_link}`}
                    >
                      Add Money
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className={`${style.my_wallet_tab_link}`}
                    >
                      Withdraw
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="pt-3">
                  <Tab.Pane eventKey="first">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Enter Amount</Form.Label>
                        <Form.Control type="email" placeholder="Enter Amount" />
                      </Form.Group>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Withdraw"
                        />
                      </Form.Group>
                      <Form.Group className="custom-radio">
                        <RadioGroup>
                          <Radio id="basic" name="radio">
                            <h3>HDFC Bank</h3>
                            <p>XXXX XXXX XXXX 4565</p>
                          </Radio>
                          <Radio id="advanced" name="radio">
                            <h3>ICICI Bank</h3>
                            <p>XXXX XXXX XXXX 4565</p>
                          </Radio>
                        </RadioGroup>
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3 w-100"
                        onClick={handleShow}
                      >
                        Withdraw
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-confirm"
        centered
      >
        <Modal.Header closeButton className="text-center">
          <div className="icon-box">
            {" "}
            <FaCheck fontSize={45} />
          </div>
          <h4 class="modal-title w-100">SUCCESS!</h4>
        </Modal.Header>
        <Modal.Body className="text-center">
          your autopay request has been submitted successfully
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} className="w-100">
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default page;

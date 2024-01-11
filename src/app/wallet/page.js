"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  FormText,
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
import { useDispatch, useSelector } from "react-redux";
import { addWithdrawal, getWallateHistory } from "@/redux/slices/wallateSlice";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

function page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { walletHistoryList } = useSelector((state) => state.walletReducer);
  const bankList = useSelector((state) => state.bankReducer.banks);

  const validationSchema = Yup.object({
    amount: Yup.string()
      .matches(/^\d+$/, "Please enter valid amount")
      .required("Amount is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }); //

  const onSubmit = (data) => {
    const payload = {
      _id: Date.now(),
      name: "Dorothy Churchill",
      bankName: data.bankName,
      logo: "https://i.pinimg.com/originals/ff/d5/31/ffd531a6a78464512a97848e14506738.png",
      accountNo: "42232954127",
      IFSC: "ICICI1231444",
      amount: data.amount,
      date: formattedDate,
      type: "withdraw",
    };
    dispatch(addWithdrawal(payload));
    handleShow();
  };

  useEffect(() => {
    dispatch(getWallateHistory());
  }, []);

  const TABLE_DATA = walletHistoryList.map((wallet, index) => ({
    key: wallet._id,
    id: wallet._id,
    title: (
      <div className="d-flex align-items-center">
        <div>
          {/* <img
            width={50}
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ScFaLDnH6FW4n_OIvB2q1A.png"
          /> */}
        </div>
        <div className="d-flex flex-column">
          <span className="fs-6 mb-2 fw-semibold">{wallet.bankName}</span>
          <span className="gray-color fw-medium">{wallet?.date}</span>
        </div>
      </div>
    ),
    year: (
      <span
        className={`fs-6 mb-2 fw-semibold ${
          wallet?.type === "withdraw" ? "text-danger" : "text-success"
        } `}
      >
        {wallet?.type === "withdraw" ? "-" : "+"}
        {wallet?.amount}
      </span>
    ),
  }));

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
              data={TABLE_DATA}
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
                    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Controller
                          name="amount"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="text"
                              autoComplete="off"
                              placeholder="amount"
                              isInvalid={!!errors.amount}
                            />
                          )}
                        />
                        {errors.amount && (
                          <FormText className="text-danger">
                            {errors.amount.message}
                          </FormText>
                        )}
                      </Form.Group>
                      <Form.Group className="custom-radio">
                        <RadioGroup>
                          {bankList.map((bank, index) => (
                            // <Radio
                            //   id={bank.bankName}
                            //   name="bankName"
                            //   key={index}
                            //   // register={register}
                            // >
                            //   <h3>{bank.bankName}</h3>
                            //   <p>{bank.accountNo}</p>
                            // </Radio>
                            <>
                              <input
                                type="radio"
                                id={bank.bankName}
                                name="bankName"
                                value={bank.bankName}
                                checked={bankList[0]?.bankName}
                                {...register("bankName")}
                              />
                              <label
                                className="radio-label"
                                htmlFor={bank.bankName}
                              >
                                <h3>{bank.bankName}</h3>
                                <p>{bank.accountNo}</p>
                              </label>
                            </>
                          ))}
                        </RadioGroup>
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3 w-100"
                        type="submit"
                        // onClick={handleShow}
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
          <h4 className="modal-title w-100">SUCCESS!</h4>
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

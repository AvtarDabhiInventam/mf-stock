"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  FormText,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import style from "@/app/bank-info/bank-info.module.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "react-data-table-component";
import { addBank } from "@/redux/slices/bankSlice";
import { BANK_DETAILS } from "@/jsondata/accountConstant";

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

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(30)
    .required("Name is required"),
  bankName: Yup.string()
    .matches(/^[a-zA-Z0-9\s-&']+$/, "Please enter valid name")
    .max(30)
    .required("Bank name is required"),
  accountNo: Yup.string()
    .matches(/^[0-9]{9,18}$/, "Please enter valid account number")
    .required("Account Number is required"),
  IFSC: Yup.string()
    // .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format")
    .required("IFSC code is required"),
});

function page() {
  const dispatch = useDispatch();
  const bankList = useSelector((state) => state.bankReducer.banks);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    if (data) {
      dispatch(addBank({ _id: Date.now(), ...data }));
      reset();
    }
  };

  const TABLE_DATA = bankList.map((bank, index) => ({
    key: bank._id,
    id: bank._id,
    title: (
      <div className="d-flex align-items-center">
        {/* <div>
          <img width={50} src={bank?.logo} alt="" />
        </div> */}
        <div className="d-flex flex-column">
          <span className="fs-6 mb-2 fw-semibold">{bank.bankName}</span>
          <span className="gray-color fw-medium">{bank.accountNo}</span>
        </div>
      </div>
    ),
  }));

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
            data={TABLE_DATA}
            customStyles={customStyles}
          />
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h5 className="fw-semibold mb-3 ms-lg-4 ms-sm-0">Add Another Bank</h5>
          <Form
            className="ms-lg-4 ms-sm-0"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name (as per bank detail)</Form.Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Name"
                        isInvalid={!!errors.name}
                      />
                    )}
                  />
                  {errors.name && (
                    <FormText className="text-danger">
                      {errors.name.message}
                    </FormText>
                  )}
                </Form.Group>
              </Col>
              <Col xs={6} md={12}>
                <Form.Group controlId="bankName" className="mb-3">
                  <Form.Label>Name of Bank</Form.Label>
                  <Controller
                    name="bankName"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Bank Name"
                        isInvalid={!!errors.bankName}
                      />
                    )}
                  />
                  {errors.bankName && (
                    <FormText className="text-danger">
                      {errors.bankName.message}
                    </FormText>
                  )}
                </Form.Group>
              </Col>
              <Col xs={12} md={12}>
                <Form.Group controlId="accountNo" className="mb-3">
                  <Form.Label>Account Number</Form.Label>
                  <Controller
                    name="accountNo"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Account No"
                        isInvalid={!!errors.accountNo}
                      />
                    )}
                  />
                  {errors.accountNo && (
                    <FormText className="text-danger">
                      {errors.accountNo.message}
                    </FormText>
                  )}
                </Form.Group>
              </Col>
              <Col xs={6} md={12}>
                <Form.Group controlId="IFSC" className="mb-3">
                  <Form.Label>IFSC Code</Form.Label>
                  <Controller
                    name="IFSC"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        type="text"
                        autoComplete="off"
                        placeholder="Enter IFSC Code"
                        isInvalid={!!errors.IFSC}
                      />
                    )}
                  />
                  {errors.IFSC && (
                    <FormText className="text-danger">
                      {errors.IFSC.message}
                    </FormText>
                  )}
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

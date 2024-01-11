"use client";
import React from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, FormText, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { addUser } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import _data from "../../JSON/auth.json";
import Image from "next/image";
import logo from "../../images/mf-stock-logo.png";
import loginImg from "../../images/login-bg.jpg";

// import data from "../../JSON/auth.json";

function Register() {
  const users = useSelector((state) => state.authReducer.users);

  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(15)
      .required("Required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(15)
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    if (data) {
      dispatch(addUser({ _id: Date.now(), ...data }));
      // _data.users.push({ _id: Date.now(), ...data });
    }
  };

  return (
    <>
      <Container>
        <div className={`${styles.auth_page_main_div}`}>
          <Row>
            <Col md={6} className="pe-0">
              <div className={`${styles.contains_div}`}>
                <Image src={loginImg} alt="login img" />

                {/* <div>
                  <h3>Hello There, Join Us </h3>
                  <p>Please create your account to continue using this app</p>
                </div> */}
              </div>
            </Col>
            <Col md={6} className="ps-0">
              <div className={`${styles.auth_card_div}`}>
                <div className="text-center w-100 mb-3">
                  <Image src={logo} alt="logo" width={65} height={65} />
                </div>
                <h4>Sign Up</h4>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-4" controlId="firstName">
                        <Form.Label className={`${styles.auth_label}`}>
                          First Name
                        </Form.Label>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="text"
                              autoComplete="off"
                              isInvalid={!!errors.firstName}
                              className={`${styles.auth_form_control}`}
                            />
                          )}
                        />
                        {errors.firstName && (
                          <FormText className="text-danger">
                            {errors.firstName.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4" controlId="lastName">
                        <Form.Label className={`${styles.auth_label}`}>
                          Last Name
                        </Form.Label>
                        <Controller
                          name="lastName"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="text"
                              autoComplete="off"
                              isInvalid={!!errors.lastName}
                              className={`${styles.auth_form_control}`}
                            />
                          )}
                        />
                        {errors.lastName && (
                          <FormText className="text-danger">
                            {errors.lastName.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-4" controlId="email">
                        <Form.Label className={`${styles.auth_label}`}>
                          Email
                        </Form.Label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="email"
                              autoComplete="off"
                              isInvalid={!!errors.email}
                              className={`${styles.auth_form_control}`}
                            />
                          )}
                        />
                        {errors.email && (
                          <FormText className="text-danger">
                            {errors.email.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label className={`${styles.auth_label}`}>
                          Password
                        </Form.Label>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="password"
                              autoComplete="off"
                              isInvalid={!!errors.password}
                              className={`${styles.auth_form_control}`}
                            />
                          )}
                        />
                        {errors.password && (
                          <FormText className="text-danger">
                            {errors.password.message}
                          </FormText>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Col>
                    <Col md={12}>
                      <p className="text-center mt-4 mb-0">
                        Already have an account?{" "}
                        <Link href="/login">Sign In</Link>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Register;

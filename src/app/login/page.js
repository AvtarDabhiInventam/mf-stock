"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/auth.module.scss";
import { Col, Container, FormText, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import loginImg from "../../images/login-bg.jpg";
import Image from "next/image";
import logo from "../../images/mf-stock-logo.png";

function Login() {
  const users = useSelector((state) => state.authReducer.users);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
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

  useEffect(() => {
    function preventBack() {
      window.history.forward();
    }
    preventBack();
    window.onunload = function () {
      null;
    };
  }, [isLogin]);

  const onSubmit = (data) => {
    setLoading(true);
    const matchedUser = users.find(
      (obj) => obj.email === data.email && obj.password === data.password
    );
    setLoginData(matchedUser);

    if (matchedUser) {
      const payload = {
        firstName: matchedUser.firstName,
        lastName: matchedUser.lastName,
        email: matchedUser.email,
      };
      dispatch(loginUser(payload));
      router.push("/");
      setLoading(false);
    } else {
      alert(`No match found`);
      setLoading(false);
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
                  <p>
                    Please login using email id we will sent OTP for
                    verification
                  </p>
                </div> */}
              </div>
            </Col>
            <Col md={6} className="ps-0">
              <div className={`${styles.auth_card_div}`}>
                <div className="text-center w-100 mb-3">
                  <Image src={logo} alt="logo" width={65} height={65} />
                </div>
                <h4>Sign In</h4>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label className={`${styles.auth_label}`}>
                          Email
                        </Form.Label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              type="text"
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
                      <Form.Group className="mb-3">
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
                      <div className="d-flex justify-content-between mt-2">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link href="/forgot-password">Forgot Password</Link>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className={`${styles.continue_with}`}>
                        <span> Or Continus with </span>
                      </div>
                      <div className={`${styles.social_icon}`}>
                        <SiGmail />
                      </div>
                    </Col>
                    <Col md={12}>
                      <p className="text-center mt-4 mb-0">
                        Don&apos;t have an account?{" "}
                        <Link href="/register">Sign Up</Link>
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

export default Login;

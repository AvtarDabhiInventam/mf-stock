"use client";
import React, { useState } from "react";
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

import style from "@/styles//profile-setting.module.scss";
import Help from "@/component/profile-setting/help";
import ChangePin from "@/component/profile-setting/change-pin";
import ChangePassword from "@/component/profile-setting/change-password";
import ChangeProfile from "@/component/profile-setting/change-profile";
import TermCondition from "@/component/profile-setting/term-conditon";

function Profile_Setting() {
  return (
    <Container className={`mb-4 mt-5`}>
      <Breadcrumb className="mb-3">
        <BreadcrumbItem href="#">Home </BreadcrumbItem>
        <BreadcrumbItem href="#">Profile Setting</BreadcrumbItem>
      </Breadcrumb>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12} md={12} lg={4}>
            <Nav
              variant="pills"
              className={`${style.profile_setting_tabs} flex-column`}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Basic Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Change Password
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Change Pin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fourth"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Help
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="fifth"
                  className={`${style.profile_setting_tabs_link}`}
                >
                  Term and Condtion
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} md={12} lg={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ChangeProfile />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ChangePassword />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <ChangePin />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Help />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <TermCondition />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Profile_Setting;

"use client";
import OrderMutualFund from "@/component/order-mutualfund";
import OrderStock from "@/component/order-stock";
import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const OrderList = () => {
  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="Stock"
          transition={false}
          id="noanim-tab-example"
          className="mb-4 mt-5 tabs_main_div"
        >
          <Tab eventKey="Stock" title="Stock">
            <Row className="column-reverse-mob">
              <Col md={12}>
                <div className="">
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Stock Order List</h5>
                  </div>
                  <OrderStock />
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="MutualFunds" title="MutualFunds">
            <Row className="column-reverse-mob">
              <Col md={12}>
                <div className="">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Mutual Fund Order List</h5>
                    </div>
                  </div>
                  <OrderMutualFund />
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default OrderList;

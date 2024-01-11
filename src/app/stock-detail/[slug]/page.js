"use client";
import StocksList from "@/component/stocks-list";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import style from "@/styles/stock-detail.module.scss";
import ReactApexChart from "react-apexcharts";
import MainStockTabDetails from "@/component/main-stock-tab-details";
import { useSelector } from "react-redux";

const MainStockDetail = ({ params }) => {
  const { allStockCategory } = useSelector((state) => state.stockReducer);
  const nifty50_data = allStockCategory.find((obj) => obj.slug === "nifty50");
  const sensex_data = allStockCategory.find((obj) => obj.slug === "sensex");
  const banknifty_data = allStockCategory.find(
    (obj) => obj.slug === "banknifty"
  );
  const finnifty_data = allStockCategory.find((obj) => obj.slug === "finnifty");
  const nifty100_data = allStockCategory.find((obj) => obj.slug === "nifty100");
  const niftyMidcapSelect_data = allStockCategory.find(
    (obj) => obj.slug === "niftyMidcapSelect"
  );

  return (
    <>
      <div className={`${style.stock_detail} mt-5`}>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem href="#">Home </BreadcrumbItem>
            <BreadcrumbItem href="#">Stocks</BreadcrumbItem>
            {/* <BreadcrumbItem active>{params.slug}</BreadcrumbItem> */}
          </Breadcrumb>
          <Row>
            <Col sm={12}>
              <Tabs
                defaultActiveKey={params.slug}
                transition={false}
                className="mb-4 mt-0 tabs_main_div"
              >
                <Tab eventKey="nifty50" title="NIFTY 50">
                  <MainStockTabDetails STOCK_DATA={nifty50_data} />
                </Tab>
                <Tab eventKey="sensex" title="SENSEX">
                  <MainStockTabDetails STOCK_DATA={sensex_data} />
                </Tab>
                <Tab eventKey="banknifty" title="Bank NIFTY">
                  <MainStockTabDetails STOCK_DATA={banknifty_data} />
                </Tab>
                <Tab eventKey="finnifty" title="FINNIFTY">
                  <MainStockTabDetails STOCK_DATA={finnifty_data} />
                </Tab>
                <Tab eventKey="nifty100" title="NIFTY 100">
                  <MainStockTabDetails STOCK_DATA={nifty100_data} />
                </Tab>
                <Tab eventKey="niftyMidcapSelect" title="Nifty Midcap Select">
                  <MainStockTabDetails STOCK_DATA={niftyMidcapSelect_data} />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainStockDetail;

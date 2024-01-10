import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "@/styles/stock-detail.module.scss";

function StockOverview({ stockItem, tabValue, NSE_DETAIL }) {
  return (
    <div className={`${style.stock_detail_stock_overview} mt-3`}>
      <h3 className="main_sub_title">Fundamental</h3>
      <p>{tabValue === "NSE" ? NSE_DETAIL.about : stockItem.about}</p>
      <Row>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Open</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.open
                : stockItem.fundamental.open}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>High</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.high
                : stockItem.fundamental.high}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Low</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.low
                : stockItem.fundamental.low}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Market Cap</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental?.marketCap
                : stockItem.fundamental?.marketCap}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Avg Vol</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.avgVol
                : stockItem.fundamental.avgVol}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Share Vol</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.shareVol
                : stockItem.fundamental.shareVol}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Low</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental.low
                : stockItem.fundamental.low}
            </p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Market Cap</h6>
            <p>
              {tabValue === "NSE"
                ? NSE_DETAIL.fundamental?.marketCap
                : stockItem.fundamental?.marketCap}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StockOverview;

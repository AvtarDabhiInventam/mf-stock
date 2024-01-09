import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "@/styles/stock-detail.module.scss";
import {
  ALL_STOCK_COMPANY_DATA,
  STOCK_DETAILS,
} from "@/jsondata/stockConstant";

const data = STOCK_DETAILS[0];
function StockOverview() {
  return (
    <div className={`${style.stock_detail_stock_overview} mt-3`}>
      <h3 className="main_sub_title">Fundamental</h3>
      <p>{data.about}</p>
      <Row>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Open</h6>
            <p>{data.fundamental.open}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>High</h6>
            <p>{data.fundamental.high}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Low</h6>
            <p>{data.fundamental.low}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Market Cap</h6>
            <p>{data.fundamental?.marketCap}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Avg Vol</h6>
            <p>{data.fundamental.avgVol}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Share Vol</h6>
            <p>{data.fundamental.shareVol}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Low</h6>
            <p>{data.fundamental.low}</p>
          </div>
        </Col>
        <Col sm={6} lg={3}>
          <div className={`${style.stock_detail_stock_performance}`}>
            <h6>Market Cap</h6>
            <p>{data.fundamental?.marketCap}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StockOverview;

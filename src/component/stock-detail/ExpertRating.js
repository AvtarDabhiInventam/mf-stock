import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import style from "@/styles/stock-detail.module.scss";

function ExpertRating() {
  const now = 60;
  return (
    <div className={`${style.stock_expert_rating} mb-3`}>
      <h3 className="main_sub_title">Expert Rating</h3>
      <Row>
        <Col md={8}>
          <div className="d-flex align-items-center w-100 mb-3">
            <span className="pe-3 fw-medium">Buy</span>
            <ProgressBar now={now} label={`${now}%`} className="w-100" />
          </div>
          <div className="d-flex align-items-center w-100 mb-3">
            <span className="pe-3 fw-medium">Sell</span>
            <ProgressBar now={now} label={`${now}%`} className="w-100" />
          </div>
          <div className="d-flex align-items-center w-100 mb-3">
            <span className="pe-3 fw-medium">Buy</span>
            <ProgressBar now={now} label={`${now}%`} className="w-100" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExpertRating;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";

const IndexMarket = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={4}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <h6 className={`${styles.title}`}>NIFTY 50</h6>
              <p className={`${styles.index_value}`}>
                20,997{" "}
                <label className={`${styles.index_percentage} green-color`}>
                  9.55 (0.10%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <h6 className={`${styles.title}`}>BANKNIFTY</h6>
              <p className={`${styles.index_value}`}>
                20,997{" "}
                <label className={`${styles.index_percentage} red-color`}>
                  -9.55 (0.05%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <h6 className={`${styles.title}`}>SENSEX</h6>
              <p className={`${styles.index_value}`}>
                20,997{" "}
                <label className={`${styles.index_percentage} red-color`}>
                  -9.55 (0.05%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default IndexMarket;

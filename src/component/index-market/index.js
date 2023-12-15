import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import { MAIN_CARD } from "@/jsondata/stockConstant";

console.log("NiftyIndex", MAIN_CARD);

const IndexMarket = () => {
  return (
    <>
      <Row className="row_space">
        {MAIN_CARD.map((value, index) => {
          return (
            <>
              <Col xs={6} md={4}>
                <Card className={`${styles.card_main_div}`}>
                  <Card.Body>
                    <h6 className={`${styles.title}`}>{value.name}</h6>
                    <p className={`${styles.index_value}`}>
                      {value.price}
                      <label
                        className={`${styles.index_percentage} green-color`}
                      >
                        {value.priceUpDown} {value.priceUpDownPercentage}
                      </label>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default IndexMarket;

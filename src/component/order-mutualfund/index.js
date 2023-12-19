import React from "react";
import styles from "@/styles/order.module.scss";
import { Card, Col, Row } from "react-bootstrap";
import { ALL_MF_ORDERS } from "@/jsondata/allOrdersConstant";

const OrderMutualFund = () => {
  return (
    <>
      <Row className="row_space">
        {ALL_MF_ORDERS.map((value, index) => {
          return (
            <>
              <Col xs={12} md={6} lg={4}>
                <Card className={`${styles.card_main_div}`}>
                  <Card.Body>
                    <h6 className="mb-3">{value.date}</h6>
                    <div className={`${styles.order_box_div}`}>
                      <div>
                        <p className={`${styles.avg_text} mb-1`}>
                          {value.name}
                        </p>
                        <p className={`${styles.small_text} mb-0`}>
                          {value.instalment}
                        </p>
                      </div>
                      <div>
                        <p className={`${styles.avg_text} mb-1 text-end`}>
                          {value.amount}
                        </p>
                        <p className={`${styles.small_text} mb-0 text-end`}>
                          {value.status}
                        </p>
                      </div>
                    </div>
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

export default OrderMutualFund;

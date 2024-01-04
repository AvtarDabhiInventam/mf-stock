import React from "react";
import styles from "@/styles/order.module.scss";
import { Card, Col, Row } from "react-bootstrap";
import { ALL_STOCKS_ORDERS } from "@/jsondata/allOrdersConstant";

const OrderStock = ({ lg = 4, md = 6 }) => {
  return (
    <>
      <Row className="row_space">
        {ALL_STOCKS_ORDERS.map((value, index) => {
          return (
            <>
              <Col lg={lg} md={md}>
                <Card className={`${styles.card_main_div}`}>
                  <Card.Body>
                    <h6 className="mb-3">{value.date}</h6>
                    <div className={`${styles.order_box_div}`}>
                      <div>
                        <p className={`${styles.small_text} mb-1`}>
                          {value.time}
                        </p>
                        <p className={`${styles.avg_text} mb-1`}>
                          {value.name}
                        </p>
                        <p className={`${styles.small_text} mb-0`}>
                          {value.stocktype}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`${styles.small_text} mb-1 text-end green-color`}
                        >
                          {value.status}
                        </p>
                        <p className={`${styles.avg_text} mb-1 text-end`}>
                          {value.total}
                        </p>
                        <p className={`${styles.small_text} mb-0 text-end`}>
                          Avg {value.avgAmount}
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

export default OrderStock;

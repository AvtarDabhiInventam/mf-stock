import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import StockImg from "../../images/stock-img.webp";
import Image from "next/image";

const StocksList = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={3}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image src={StockImg} width={38} height={38} alt="User Image" />
              </div>
              <h6 className={`${styles.title} mb-4`}>IRFC</h6>
              <p className={`${styles.index_value}`}>
                ₹83.50
                <br />
                <label className={`${styles.index_percentage} green-color`}>
                  1.33 (1.60%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image src={StockImg} width={38} height={38} alt="User Image" />
              </div>
              <h6 className={`${styles.title} mb-4`}>Reliance Power</h6>
              <p className={`${styles.index_value}`}>
                ₹23.10
                <br />
                <label className={`${styles.index_percentage} green-color`}>
                  2.05 (7.60%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image src={StockImg} width={38} height={38} alt="User Image" />
              </div>
              <h6 className={`${styles.title} mb-4`}>Tata Power</h6>
              <p className={`${styles.index_value}`}>
                ₹335.50
                <br />
                <label className={`${styles.index_percentage} green-color`}>
                  1.33 (2.60%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className={`${styles.card_main_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image src={StockImg} width={38} height={38} alt="User Image" />
              </div>
              <h6 className={`${styles.title} mb-4`}>Rail Vikas Nigam</h6>
              <p className={`${styles.index_value}`}>
                ₹180.20
                <br />
                <label className={`${styles.index_percentage} red-color`}>
                  -1.33 (0.60%)
                </label>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StocksList;

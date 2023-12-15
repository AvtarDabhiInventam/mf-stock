import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import StockImg from "../../images/stock-img.webp";
import Image from "next/image";
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";
// import { ALL_DATA } from "@/jsondata/stockConstant";
import Link from "next/link";

console.log("ALL_STOCK_COMPANY_DATA", ALL_STOCK_COMPANY_DATA);
const StocksList = () => {
  return (
    <>
      <Row className="row_space">
        {ALL_STOCK_COMPANY_DATA.map((value, index) => {
          return (
            <>
              <Col xs={6} md={4} xl={3}>
                <Card
                  as={Link}
                  href={"/stock/test"}
                  className={`${styles.card_main_div}`}
                >
                  <Card.Body>
                    <div className={`${styles.img_box}`}>
                      <img
                        src={value.logo}
                        width={38}
                        height={38}
                        alt="User Image"
                      />
                    </div>
                    <h6 className={`${styles.title} mb-4`}>{value.name}</h6>
                    <p className={`${styles.index_value}`}>
                      {value.price}
                      <br />
                      <label
                        className={`${styles.index_percentage} green-color`}
                      >
                        {value.priceUpDown} {value.priceUpDownPercentage}%
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

export default StocksList;

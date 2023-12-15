import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./mutualfundcategory.module.scss";
import { CATEGORIES } from "@/jsondata/mutualFundConstant";

const MutualFundsCategory = () => {
  return (
    <>
      <Row className="row_space">
        {CATEGORIES.map((value, index) => {
          return (
            <Col xs={6} md={4} key={index}>
              <Card className={`${styles.product_card_div}`}>
                <Card.Body>
                  <div className={`${styles.img_box}`}>
                    <img
                      src={value.logo}
                      width={130}
                      height={130}
                      alt="User Image"
                    />
                  </div>
                  <h6 className={`${styles.title} mb-0`}>{value.name}</h6>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MutualFundsCategory;

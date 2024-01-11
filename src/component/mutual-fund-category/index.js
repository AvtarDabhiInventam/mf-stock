import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./mutualfundcategory.module.scss";
import Link from "next/link";

const MutualFundsCategory = ({ allMFCategory }) => {
  return (
    <>
      <Row className="row_space">
        {allMFCategory?.map((value, index) => {
          return (
            <Col xs={6} md={4} key={index}>
              <Card
                as={Link}
                href={`/mutualfund-detail/${value.slug}`}
                className={`${styles.product_card_div}`}
              >
                <Card.Body>
                  <div className={`${styles.img_box}`}>
                    <img
                      src={value.logo}
                      width={80}
                      height={80}
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

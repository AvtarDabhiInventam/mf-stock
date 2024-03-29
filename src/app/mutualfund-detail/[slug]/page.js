"use client";

import React from "react";
import { IoIosStar } from "react-icons/io";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/mutual-fund-category.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

const MutualfundCategoryDeatail = ({ params }) => {
  const { allMFCategory } = useSelector((state) => state.mfReducer);

  const COMPANY_LIST = allMFCategory?.find(
    (obj) => obj.slug === params?.slug
  ).company;
  return (
    <Container>
      <div className="mt-5">
        <Row className="row_space">
          {COMPANY_LIST.map((company_value, index) => {
            return (
              <Col key={index} xs={12} md={6}>
                <Card
                  as={Link}
                  href={`/mutual/${company_value._id}`}
                  className={`${styles.mf_card_div}`}
                >
                  <Card.Body>
                    <div className={`${styles.mf_box}`}>
                      <div
                        className={`${styles.top_div} d-flex justify-content-between`}
                      >
                        <div
                          className={`${styles.header_contains} d-flex gap-2 align-items-center`}
                        >
                          <div className={`${styles.img_box}`}>
                            <img
                              src={company_value.logo}
                              alt="logo"
                              width={38}
                              height={38}
                            />
                          </div>
                          <h6 className="mb-0">{company_value.name}</h6>
                        </div>
                        <p className={`${styles.star_rating} mb-0`}>
                          <IoIosStar className="me-1" /> {company_value.rating}
                        </p>
                      </div>
                      <div className={`${styles.bottom_div} mt-3`}>
                        <div className="d-flex gap-3 justify-content-around">
                          <p
                            className={`${styles.small_text} mb-0 text-center`}
                          >
                            Min.Invest <br />{" "}
                            <label>₹ {company_value.minInvest}</label>
                          </p>
                          <p
                            className={`${styles.small_text} mb-0 text-center`}
                          >
                            Fund size <br />{" "}
                            <label>₹ {company_value.fundSize}</label>
                          </p>
                          <p
                            className={`${styles.small_text} mb-0 text-center`}
                          >
                            3Y return <br />{" "}
                            <label>% {company_value.threeYearReturn}</label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default MutualfundCategoryDeatail;

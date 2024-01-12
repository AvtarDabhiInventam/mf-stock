"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/mutual-fund-category.module.scss";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const MutualFundSeeMore = () => {
  const pathname = usePathname();
  const PATH = pathname.split("/").pop();
  const { allMFCompany, allMFCategory } = useSelector(
    (state) => state.mfReducer
  );

  const MF_POPULAR_FUND_LIST =
    allMFCompany?.filter((item) => item.section === "popularFund") ||
    allMFCompany;

  const MF_MYMF_LIST =
    allMFCompany?.filter((item) => item.section === "myMutualFund") ||
    allMFCompany;

  const MF_WATCHLIST =
    allMFCompany?.filter((item) => item.section === "watchList") ||
    allMFCompany;

  const MF_DATA =
    PATH === "popularFund"
      ? MF_POPULAR_FUND_LIST
      : PATH === "myMutualFund"
      ? MF_MYMF_LIST
      : PATH === "watchList"
      ? MF_WATCHLIST
      : allMFCompany;

  return (
    <Container className="mt-5">
      <Row className="row_space">
        {MF_DATA?.map((company_value, index) => {
          return (
            <Col key={index} xs={12} md={12} xl={6}>
              <Card
                className={`${styles.mf_card_div}`}
                as={Link}
                href={`/mutual/${company_value._id}`}
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
                      <p className={`${styles.star_rating} mb-0 d-flex `}>
                        <IoIosStar className="me-1" /> {company_value.rating}
                      </p>
                    </div>
                    <div className={`${styles.bottom_div} mt-3`}>
                      <div className="d-flex gap-3 justify-content-around">
                        <p className={`${styles.small_text} mb-0 text-center`}>
                          Min.Invest <br />{" "}
                          <label>₹ {company_value.minInvest}</label>
                        </p>
                        <p className={`${styles.small_text} mb-0 text-center`}>
                          Fund size <br />{" "}
                          <label>₹ {company_value.fundSize}</label>
                        </p>
                        <p className={`${styles.small_text} mb-0 text-center`}>
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
    </Container>
  );
};

export default MutualFundSeeMore;

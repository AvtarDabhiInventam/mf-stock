import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/mutual-fund-category.module.scss";
import { IoIosStar } from "react-icons/io";
import { ALL_MF_COMPANY } from "@/jsondata/mutualFundConstant";

const MFCurrentInvestment = () => {
  const filteredItems =
    ALL_MF_COMPANY?.filter((item) => item.section === "myMutualFund") ||
    ALL_MF_COMPANY;
  return (
    <>
      <div className="current_investment_div">
        {/* <Row className="row_space"> */}
        {filteredItems?.map((company_value, index) => {
          return (
            <div key={index} className="mb-3">
              <Card className={`${styles.mf_card_div}`}>
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
                        SIP
                      </p>
                    </div>
                    <div className={`${styles.bottom_div} mt-3`}>
                      <div className="d-flex gap-3 justify-content-around">
                        <p className={`${styles.small_text} mb-0 text-center`}>
                          Investment <br />{" "}
                          <label>₹ {company_value.minInvest}</label>
                        </p>
                        <p className={`${styles.small_text} mb-0 text-center`}>
                          Current <br />{" "}
                          <label>₹ {company_value.fundSize}</label>
                        </p>
                        <p className={`${styles.small_text} mb-0 text-center`}>
                          Total return <br />{" "}
                          <label>% {company_value.threeYearReturn}</label>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {/* </Row> */}
      </div>
    </>
  );
};

export default MFCurrentInvestment;

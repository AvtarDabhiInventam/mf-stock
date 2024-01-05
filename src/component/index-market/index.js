import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import { MAIN_CARD } from "@/jsondata/stockConstant";
import Slider from "react-slick";

console.log("NiftyIndex", MAIN_CARD);

const IndexMarket = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "60px",
    className: "center",
  };
  return (
    <>
      <Slider {...settings}>
        {MAIN_CARD.map((value, index) => {
          return (
            <>
              <Card className={`${styles.card_main_div}`}>
                <Card.Body>
                  <h6 className={`${styles.title}`}>{value.name}</h6>
                  <p className={`${styles.index_value}`}>
                    {value.price}{" "}
                    <label
                      className={`${styles.index_percentage} ${value.colorstatus} `}
                    >
                      {value.result} ({value.ltp}%)
                    </label>
                  </p>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default IndexMarket;

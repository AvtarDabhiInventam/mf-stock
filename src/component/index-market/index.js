import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import Slider from "react-slick";
import Link from "next/link";

const IndexMarket = ({ allStockCategory }) => {
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
      {allStockCategory && (
        <Slider {...settings}>
          {allStockCategory.map((value, index) => {
            return (
              <>
                <Card
                  as={Link}
                  href={`/stock-detail/${value?.slug}`}
                  className={`${styles.card_main_div} m-2`}
                >
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
      )}
    </>
  );
};

export default IndexMarket;

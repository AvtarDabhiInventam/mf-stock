import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../component/product-tools/product-tool.module.scss";
import Image from "next/image";
import MutualFundsImg from "../../images/multi_funds_icon.png";
import StocksImg from "../../images/stocks_icon.png";
import FutureOptionsImg from "../../images/future_opt_icon.png";
// import CommoditiesImg from "../../images/commody_icon.png";
// import IPOsImg from "../../images/ipos_icon.png";
// import CurrenciesImg from "../../images/currency_icon.png";

const ProductToolsData = [
  {
    img: MutualFundsImg,
    title: "Mutual Funds",
  },
  {
    img: StocksImg,
    title: "Stocks",
  },
];

const ProductTools = () => {
  return (
    <>
      <Row className="row_space">
        {ProductToolsData?.map((item, index) => (
          <Col xs={6} md={4} key={index}>
            <Card className={`${styles.product_card_div}`}>
              <Card.Body>
                <div className={`${styles.img_box}`}>
                  <Image src={item.img} width={80} height={80} alt="Icon" />
                </div>
                <h6 className={`${styles.title} mb-0`}>{item.title}</h6>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductTools;

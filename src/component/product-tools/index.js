import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../component/product-tools/product-tool.module.scss";
import Image from "next/image";
import MutualFundsImg from "../../images/multi_funds_icon.png";
import StocksImg from "../../images/stocks_icon.png";
import FutureOptionsImg from "../../images/future_opt_icon.png";
import CommoditiesImg from "../../images/commody_icon.png";
import IPOsImg from "../../images/ipos_icon.png";
import CurrenciesImg from "../../images/currency_icon.png";

const ProductTools = () => {
  return (
    <>
      <Row className="row_space">
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={MutualFundsImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>Mutual Funds</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={StocksImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>Stocks</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={FutureOptionsImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>Future & Options</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={CommoditiesImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>Commodities</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={IPOsImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>IPOs</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className={`${styles.product_card_div}`}>
            <Card.Body>
              <div className={`${styles.img_box}`}>
                <Image
                  src={CurrenciesImg}
                  width={130}
                  height={130}
                  alt="User Image"
                />
              </div>
              <h6 className={`${styles.title} mb-0`}>Currencies</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductTools;

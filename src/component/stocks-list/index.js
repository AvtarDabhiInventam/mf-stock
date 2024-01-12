import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/stock-card.module.scss";
import StockImg from "../../images/stock-img.webp";
import Image from "next/image";
import Link from "next/link";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addWatchListData } from "@/redux/slices/stockSlice";

const StocksList = ({ STOCK_LIST }) => {
  const dispatch = useDispatch();
  const { watchList } = useSelector((state) => state.stockReducer);

  const handleWatchList = (value) => {
    const item = watchList.find((item) => item._id === value?._id);
    if (item === undefined) {
      dispatch(addWatchListData(value));
    } else {
      alert("You've already added this item to your wishlist!");
    }
  };

  return (
    <>
      <Row className="row_space">
        {STOCK_LIST?.map((value, index) => {
          return (
            <>
              <Col xs={6} md={4} xl={3}>
                <Card
                  as={Link}
                  href={`/stock/${value._id}`}
                  className={`${styles.card_main_div}`}
                >
                  <Card.Body>
                    <FiPlusCircle
                      fontSize={30}
                      color="#5993D2"
                      className={`${styles.wishlist_icon}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleWatchList(value);
                      }}
                    />
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
                        className={`${styles.index_percentage} ${value.colorstatus}`}
                      >
                        {value.result} ({value.ltp}%)
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

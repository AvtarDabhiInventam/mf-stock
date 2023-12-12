import React from "react";
import styles from "./watchlists.module.scss";
import { Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";
import WatchlistsStocks from "../watchlists-stocks";

const Watchlists = () => {
  return (
    <>
      <Card className={`${styles.watchlist_card_div}`}>
        <Card.Body className={`${styles.watchlist_card_body}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className={`${styles.title}`}>Rahul Watchlists</h6>
              <p className={`${styles.index_value}`}>5 items</p>
            </div>
            <div>
              <FaAngleDown />
            </div>
          </div>
          <div>
            <WatchlistsStocks />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Watchlists;

import React, { useState } from "react";
import styles from "./watchlists.module.scss";
import { Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";
import WatchlistsStocks from "../watchlists-stocks";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";

const Watchlists = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Card className={`${styles.watchlist_card_div}`}>
        <Card.Body className={`${styles.watchlist_card_body}`}>
          <div
            className="d-flex justify-content-between align-items-center "
            onClick={() => setOpen(!isOpen)}
          >
            <div>
              <h6 className={`${styles.title}`}>Rahul Watchlists</h6>
              <p className={`${styles.index_value}`}>5 items</p>
            </div>
            <div>
              <FaAngleDown />
            </div>
          </div>
          {isOpen ? (
            <div>
              <WatchlistsStocks />
            </div>
          ) : null}
          <div className={`${styles.create_watchlists}`}>
            <Link href="#">
              <MdAddCircleOutline /> Create new watchlist
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Watchlists;

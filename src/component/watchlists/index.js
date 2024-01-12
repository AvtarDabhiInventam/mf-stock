import React, { useState } from "react";
import styles from "./watchlists.module.scss";
import { Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";
import WatchlistsStocks from "../watchlists-stocks";
import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const Watchlists = () => {
  const [isOpen, setOpen] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  const { watchList } = useSelector((state) => state.stockReducer);

  return (
    <>
      <Card className={`${styles.watchlist_card_div}`}>
        <Card.Body className={`${styles.watchlist_card_body}`}>
          <div
            className="d-flex justify-content-between align-items-center "
            onClick={() => setOpen(!isOpen)}
          >
            <div>
              <h6 className={`${styles.title}`}>
                {user?.firstName}'s Watchlists
              </h6>
              <p className={`${styles.index_value}`}>
                {watchList?.length} items
              </p>
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

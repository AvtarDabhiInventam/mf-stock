import React from "react";
import styles from "./investments.module.scss";
import { Card } from "react-bootstrap";

const Investments = () => {
  return (
    <>
      <Card className={`${styles.investments_card_div}`}>
        <Card.Body>
          <div className={`${styles.grid_div}`}>
            <div>
              <h6 className={`${styles.title}`}>
                ₹75000
                <label
                  className={`${styles.index_percentage} green-color ms-2`}
                >
                  (25.00%)
                </label>
              </h6>
              <p className={`${styles.index_value}`}>Total Returns</p>
            </div>
            <div>
              <h6 className={`${styles.title}`}>₹50000</h6>
              <p className={`${styles.index_value}`}>Current Value</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Investments;

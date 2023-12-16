import React from "react";
import styles from "./notification.module.scss";
import { Container } from "react-bootstrap";
import { NOTIFICATION } from "@/jsondata/accountConstant";

const Notification = () => {
  return (
    <>
      <div className="mt-5">
        <Container>
          <h3 className="main_title text-center">Notification</h3>
          <div className={`${styles.notification_ui_dd_content}`}>
            {NOTIFICATION.map((value, index) => {
              return (
                <div key={index} className={`${styles.notification_list}`}>
                  <div className={`${styles.notification_list_content}`}>
                    <div className={`${styles.notification_list_img}`}>
                      <img src={value.logo} alt="icon" />
                    </div>
                    <div className={`${styles.notification_list_detail}`}>
                      <p className="mb-2">
                        <b>{value.name}</b>
                      </p>
                      <div className="d-flex column-gap-3 flex-wrap mb-1">
                        <p>
                          Current Value: <b>{value.currentValue}</b>
                        </p>
                        <p>
                          Total Returns: <b>{value.totalReturns}</b>
                        </p>
                        <p>
                          Total Invested Value:{" "}
                          <b>{value.totalInvestedValue}</b>
                        </p>
                      </div>
                      <p className="mb-0">{value.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Notification;

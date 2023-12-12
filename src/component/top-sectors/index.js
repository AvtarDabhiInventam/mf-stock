import React from "react";
import styles from "./top-sectors.module.scss";

const TopSectors = () => {
  return (
    <>
      <div className={`${styles.sectors_list_main_div}`}>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Banking</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>37</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Energy</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>94</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Healthcare</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>216</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>FMCG</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>215</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Automobile</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>130</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Tele-Communication</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>44</span>
        </div>
        <div className={`${styles.sectors_box}`}>
          <span className={`${styles.heading}`}>Media & Entertainment</span>
          <span className={`${styles.lines}`}>|</span>
          <span className={`${styles.numbers}`}>98</span>
        </div>
      </div>
    </>
  );
};

export default TopSectors;

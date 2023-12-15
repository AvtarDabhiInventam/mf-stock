import React from "react";
import styles from "./top-sectors.module.scss";

const SectorsList = [
  {
    sectorName: "Banking",
    noOfCompany: "37",
  },
  {
    sectorName: "Energy",
    noOfCompany: "94",
  },
  {
    sectorName: "Healthcare",
    noOfCompany: "216",
  },
  {
    sectorName: "FMCG",
    noOfCompany: "215",
  },
  {
    sectorName: "Automobile",
    noOfCompany: "130",
  },
  {
    sectorName: "Tele-Communication",
    noOfCompany: "44",
  },
  {
    sectorName: "Media & Entertainment",
    noOfCompany: "98",
  },
];

const TopSectors = () => {
  return (
    <>
      <div className={`${styles.sectors_list_main_div}`}>
        {SectorsList?.map((item, index) => (
          <div key={index} className={`${styles.sectors_box}`}>
            <span className={`${styles.heading}`}>{item.sectorName}</span>
            <span className={`${styles.lines}`}>|</span>
            <span className={`${styles.numbers}`}>{item.noOfCompany}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopSectors;

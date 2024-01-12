"use client";
import React from "react";
import styles from "../../../component/watchlists-stocks/watchlists-stocks.module.scss";
import { useSelector } from "react-redux";
import LineChart from "@/component/charts/lineChart";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

const StockSeeMore = () => {
  const { watchList } = useSelector((state) => state.stockReducer);
  const { allStockCompany, allStockCategory } = useSelector(
    (state) => state.stockReducer
  );
  const pathname = usePathname();
  console.log("pathname :>> ", pathname.split("/").pop());
  const PATH = pathname.split("/").pop();

  const STOCK_LIST =
    allStockCompany?.filter((item) => item.section === "stocksInNews") ||
    allStockCompany;

  const MOST_BOUGHT_STOCK_LIST =
    allStockCompany?.filter((item) => item.section === "mostBoughtOnMF") ||
    allStockCompany;

  const TOP_GAINERS_LIST =
    allStockCompany?.filter((item) => item.section === "topGainers") ||
    allStockCompany;

  const TOP_LOOSERS_LIST =
    allStockCompany?.filter((item) => item.section === "topLosers") ||
    allStockCompany;

  const STOCK_DATA =
    PATH === "mostBoughtOnMF"
      ? MOST_BOUGHT_STOCK_LIST
      : PATH === "stocksInNews"
      ? STOCK_LIST
      : PATH === "topGainers"
      ? TOP_GAINERS_LIST
      : PATH === "topLosers"
      ? TOP_LOOSERS_LIST
      : PATH === "watchlist"
      ? watchList
      : allStockCompany;
  console.log("STOCK_DATA :>> ", STOCK_DATA);

  return (
    <Container className="mt-5">
      <div className={`${styles.watchlists_main_div}`}>
        {STOCK_DATA?.map((value, index) => {
          return (
            <>
              <div className={`${styles.watchlists_box_div}`}>
                <div className="w-100">
                  <h6 className={`${styles.title}`}>{value.name}</h6>
                </div>
                <div className="w-100">
                  <div id="chart">
                    <LineChart
                      strokeColor={
                        value?.colorstatus === "green-color"
                          ? "#119536"
                          : "#EE5757"
                      }
                      chartData={value?.chartData?.datasets[0]?.data}
                    />
                  </div>
                </div>
                <div className="w-100 text-end">
                  <p className={`${styles.index_value}`}>
                    {value.price}
                    <br />
                    <label
                      className={`${styles.index_percentage} ${value.colorstatus}`}
                    >
                      {value.result} ({value.ltp}%)
                    </label>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default StockSeeMore;

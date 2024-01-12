import React, { useEffect } from "react";
import styles from "./watchlists-stocks.module.scss";
import ReactApexChart from "react-apexcharts";
import LineChart from "../charts/lineChart";
import { useDispatch, useSelector } from "react-redux";
import { getWatchListData } from "@/redux/slices/stockSlice";

const WatchlistsStocks = () => {
  const dispatch = useDispatch();
  const allStockCompany = useSelector(
    (state) => state.stockReducer.allStockCompany
  );

  const { watchList } = useSelector((state) => state.stockReducer);

  return (
    <>
      <div className={`${styles.watchlists_main_div}`}>
        {watchList?.map((value, index) => {
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
    </>
  );
};

export default WatchlistsStocks;

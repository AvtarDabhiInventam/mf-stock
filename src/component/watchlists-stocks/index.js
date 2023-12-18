import React from "react";
import styles from "./watchlists-stocks.module.scss";
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";
import ReactApexChart from "react-apexcharts";

const WatchlistsStocks = () => {
  const stockWatchListGraph = {
    series: [
      {
        name: "Desktops",
        data: [0, 20, 60, 10, 0, 80, 150, 100, 50],
      },
    ],
    options: {
      // chart: {
      //   height: 350,
      //   type: "line",
      //   zoom: {
      //     enabled: false,
      //   },
      // },
      chart: {
        toolbar: {
          // Hamburger menu at top
          show: false,
        },
        height: 100,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      title: {
        text: undefined,
        align: "left",
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  return (
    <>
      <div className={`${styles.watchlists_main_div}`}>
        {ALL_STOCK_COMPANY_DATA.map((value, index) => {
          return (
            <>
              <div className={`${styles.watchlists_box_div}`}>
                <div className="w-100">
                  <h6 className={`${styles.title}`}>{value.name}</h6>
                </div>
                <div className="w-100">
                  <div id="chart">
                    <ReactApexChart
                      options={stockWatchListGraph.options}
                      series={stockWatchListGraph.series}
                      type="line"
                      height={40}
                      width={100}
                    />
                  </div>
                </div>
                <div className="w-100 text-end">
                  <p className={`${styles.index_value}`}>
                    {value.price}
                    <br />
                    <label className={`${styles.index_percentage} green-color`}>
                      {value.priceUpDown} ({value.priceUpDownPercentage}%)
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

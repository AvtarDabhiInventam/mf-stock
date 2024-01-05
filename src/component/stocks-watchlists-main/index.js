import React from "react";
import Table from "react-bootstrap/Table";
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";
import ReactApexChart from "react-apexcharts";
import styles from "./watchlist.module.scss";

const StockWatchlistMain = () => {
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
      //   type: "area",
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
        type: "area",
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
      <div>
        <Table responsive className="table_contain_middle">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Company</th>
              <th></th>

              <th>Price</th>
              <th>Percentage</th>
              <th>Market cap</th>
            </tr>
          </thead>
          <tbody>
            {ALL_STOCK_COMPANY_DATA.map((value, index) => {
              console.log("aaa", value);
              return (
                <>
                  <tr>
                    <td>
                      <div className={`${styles.img_box}`}>
                        <img
                          src={value.logo}
                          width={38}
                          height={38}
                          alt="User Image"
                        />
                      </div>
                    </td>
                    <td className={`${styles.index_value}`}>{value.name}</td>
                    <td>
                      <div id="chart">
                        <ReactApexChart
                          options={stockWatchListGraph.options}
                          series={stockWatchListGraph.series}
                          type="area"
                          height={40}
                          width={100}
                        />
                      </div>
                    </td>
                    <td>
                      <p className={`${styles.index_value}`}>{value.price}</p>
                    </td>
                    <td>
                      <label
                        className={`${styles.index_percentage} ${value.colorstatus} fw-bold`}
                      >
                        {value.result} ({value.ltp}%)
                      </label>
                    </td>
                    <td className={`${styles.index_value}`}>
                      {value.fundamental.marketCap}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StockWatchlistMain;

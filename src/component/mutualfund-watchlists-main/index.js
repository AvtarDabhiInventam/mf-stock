import React from "react";
import Table from "react-bootstrap/Table";
import { ALL_MF_COMPANY } from "@/jsondata/mutualFundConstant";
import ReactApexChart from "react-apexcharts";
import styles from "../../component/stocks-watchlists-main/watchlist.module.scss";

const MutualFundWatchlistMain = () => {
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
      //   type: "candlestick",
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
        type: "candlestick",
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
              <th>FundSize</th>
              <th>1Day(Return)</th>
              <th>3Y(Return)</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {ALL_MF_COMPANY.map((value, index) => {
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
                      <p className={`${styles.index_value}`}>
                        {value.fundSize}
                      </p>
                    </td>
                    <td>
                      <p className={`${styles.index_value}`}>
                        {value.oneDayReturn}
                      </p>
                    </td>
                    <td>
                      <p className={`${styles.index_value}`}>
                        {value.threeYearReturn}
                      </p>
                    </td>
                    <td>
                      <p className={`${styles.index_value}`}>{value.rating}</p>
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

export default MutualFundWatchlistMain;

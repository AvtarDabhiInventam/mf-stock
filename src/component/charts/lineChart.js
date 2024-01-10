import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ chartData, strokeColor }) => {
  const lineChart = {
    series: [
      {
        name: "Desktops",
        data: chartData,
      },
    ],
    options: {
      chart: {
        toolbar: {
          tools: {
            download: false, // Download options
            selection: false, // Data selection tool
            zoom: true, // Zooming tool
            zoomin: true, // Zoom in button
            zoomout: true, // Zoom out button
            pan: false, // Panning tool
            reset: false, // Reset zoom and pan
          },
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
      colors: [strokeColor],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      title: {
        text: undefined,
        align: "left",
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
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
    <ReactApexChart
      options={lineChart.options}
      series={lineChart.series}
      type="line"
      height={40}
      width={100}
    />
  );
};

export default LineChart;

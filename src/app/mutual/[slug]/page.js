"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  Container,
  BreadcrumbItem,
  Button,
  Nav,
  Tabs,
  Tab,
  Col,
  Row,
  Accordion,
  Form,
} from "react-bootstrap";
import style from "@/styles/stock-detail.module.scss";
import {
  ALL_MF_COMPANY,
  MUTUALFUND_DETAILS,
} from "@/jsondata/mutualFundConstant";
import { RiTimerLine } from "react-icons/ri";
import { GoBookmark } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import { BiWalletAlt } from "react-icons/bi";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const data = MUTUALFUND_DETAILS[0];

const stockGraph = {
  series: [
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Line Chart",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.5,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      shared: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const revenueGraph = {
  series: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  },
};

const HoldingAnalysis = {
  series: [44, 55, 13, 33],
  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  },
};

const columns = [
  {
    name: "Name",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Sector",
    selector: (row) => row.sector,
    sortable: true,
  },
  {
    name: "Instrument",
    selector: (row) => row.instrument,
    sortable: true,
  },
  {
    name: "Assets",
    selector: (row) => row.assets,
    sortable: true,
  },
];

const year_data = [
  {
    id: 1,
    title: "Reliance Industries Ltd.",
    sector: "Energy",
    instrument: "Equity",
    assets: "5.88%",
  },
  {
    id: 2,
    title: "BSE Ltd.",
    sector: "Financial",
    instrument: "Futures",
    assets: "7.88%",
  },
  {
    id: 3,
    title: "JIO Financial Services Ltd.",
    sector: "Energy",
    instrument: "Equity",
    assets: "5.88%",
  },
  {
    id: 4,
    title: "Bikaji Foods International Ltd.",
    sector: "Consumer Staples",
    instrument: "Equity",
    assets: "10.88%",
  },
];

function MutualDetail() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={`${style.stock_detail} mt-5`}>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem href="#">Home </BreadcrumbItem>
          <BreadcrumbItem href="#">Mutual</BreadcrumbItem>
          <BreadcrumbItem active>Apple</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col sm={12} md={7} lg={8} xl={9}>
            <div className={`${style.stock_detail_logo}`}>
              <div className="d-flex align-items-center">
                <img
                  src={data?.logo}
                  width={60}
                  height={60}
                  alt="User Image"
                  className="rounded"
                />
              </div>
              <div>
                <div>
                  <Button size="sm" className="rounded">
                    <GoBookmark style={{ marginRight: "5px" }} />
                    Watchlist
                  </Button>
                </div>
              </div>
            </div>
            <div className={`${style.stock_detail_stock_name}`}>
              <h2>{data.name}</h2>
            </div>
            <div className={`${style.stock_detail_price}`}>
              <h3>
                {/* <FaRupeeSign fontSize={22} /> */}
                {data.threeYearReturn}{" "}
                <span className={`${style.mutual_detail_year}`}>
                  3Y annualised
                </span>
              </h3>
            </div>
            <div>
              <ReactApexChart
                options={stockGraph.options}
                series={stockGraph.series}
                type="area"
                height={350}
              />
            </div>
            <Row className="mt-3 mb-3">
              <Col sm={12} md={6} lg={4}>
                <div className={`${style.mutual_list}`}>
                  <h6>Nav</h6>
                  <p>{data.nav}</p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className={`${style.mutual_list}`}>
                  <h6>Rating</h6>
                  <p>{data.rating}</p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className={`${style.mutual_list}`}>
                  <h6>Min SIP Amount</h6>
                  <p>{data.minSIPAmount}</p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className={`${style.mutual_list}`}>
                  <h6> Fund Size</h6>
                  <p>{data.fundSize}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div className="mb-3">
                    <h3 className="main_sub_title">Holding analysis</h3>

                    <ReactApexChart
                      options={HoldingAnalysis.options}
                      series={HoldingAnalysis.series}
                      type="donut"
                      height={380}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div className="mb-3">
                    <h3 className="main_sub_title">Equity sector allocation</h3>
                    <ReactApexChart
                      options={HoldingAnalysis.options}
                      series={HoldingAnalysis.series}
                      type="donut"
                      height={380}
                    />
                  </div>
                </Col>
                <div className="mb-3">
                  <h3 className="main_sub_title">Holdings (93)</h3>
                  <DataTable columns={columns} data={year_data} />
                </div>
                <div sm={12} md={6} lg={12}>
                  <div>
                    <h3 className="main_sub_title">Props</h3>
                    <p>{data.pros}</p>
                  </div>
                  <div>
                    <h3 className="main_sub_title">Cons</h3>
                    <p>{data.cons}</p>
                  </div>
                </div>
              </Row>
            </Row>
          </Col>

          <Col sm={12} md={5} lg={4} xl={3}>
            <div className="common-card">
              <Tabs
                defaultActiveKey="Monthly-SIP"
                id="uncontrolled-tab-example"
                className="mb-3 tabs_main_div"
              >
                <Tab eventKey="Monthly-SIP" title="Monthly SIP">
                  <div className={`${style.stock_buy_sell}`}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="mb-0">SIP Amount</p>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1"
                        className={`${style.form_control}`}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 sip-date w-100">
                      <p className="mb-0">Monthly SIP Date</p>
                      {/* <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1"
                        className={`${style.form_control}`}
                      /> */}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={`${style.form_control} form-control`}
                      />
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <Button variant="light" className="text-dark pe-3 w-100">
                        Add To Cart
                      </Button>
                      <Button variant="primary" className="w-100 ">
                        Invest
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="One-Time" title="One Time">
                  <div className={`${style.stock_buy_sell}`}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="mb-0">SIP Amount</p>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1"
                        className={`${style.form_control}`}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 sip-date w-100">
                      <p className="mb-0">Monthly SIP Date</p>
                      {/* <Form.Control
                        size="sm"
                        type="text"
                        placeholder="1"
                        className={`${style.form_control}`}
                      /> */}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={`${style.form_control} form-control`}
                      />
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <Button variant="light" className="text-dark pe-3 w-100">
                        Add To Cart
                      </Button>
                      <Button variant="primary" className="w-100 ">
                        Invest
                      </Button>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MutualDetail;

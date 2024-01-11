"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Tab,
  Tabs,
} from "react-bootstrap";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import StocksList from "@/component/stocks-list";
import Investments from "@/component/investments";
import MutualFundPopularFund from "@/component/mutual-fund-popularfund";
import { useSelector } from "react-redux";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

function page() {
  const allStockComany = useSelector(
    (state) => state.stockReducer.allStockComany
  );

  return (
    <Container className={`mb-4 mt-5`}>
      <Breadcrumb className="mb-3">
        <BreadcrumbItem href="#">Home </BreadcrumbItem>
        <BreadcrumbItem href="#" active>
          Dashboard
        </BreadcrumbItem>
      </Breadcrumb>
      <Tabs
        defaultActiveKey="Stock"
        transition={false}
        id="noanim-tab-example"
        className="mb-4 tabs_main_div"
      >
        <Tab eventKey="Stock" title="Stock">
          <div className="dashboard-body">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats blue mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-white">
                          Invested
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          350,897
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-white text-white rounded-circle shadow">
                          <FaHandHoldingUsd fontSize={32} color="#5993D2" />
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-white text-sm">
                      <span className="text-success me-2 bg-white p-2 rounded-3 fw-medium">
                        <FaArrowUpLong /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats yellow mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-white">
                          Current
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          2,356
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-white text-white rounded-circle shadow">
                          <GiProfit fontSize={32} color="#5993D2" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-white text-sm">
                      <span className="text-danger me-2 bg-white p-2 rounded-3 fw-medium">
                        <FaArrowDownLong /> 2.48%
                      </span>
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats green mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-white">
                          Total Return
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          49,65%
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-white text-white rounded-circle shadow">
                          <BsCashCoin fontSize={32} color="#5993D2" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-white text-sm">
                      <span className="text-success me-2 bg-white p-2 rounded-3 fw-medium">
                        <FaArrowUpLong /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <h5 className="mb-0 sec_title">Invested In Stock</h5>
            </div>
            <StocksList STOCK_LIST={allStockComany} />
          </div>
        </Tab>
        <Tab eventKey="MutualFunds" title="MutualFunds">
          <div className="dashboard-body">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted">
                          Invested
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <FaHandHoldingUsd fontSize={32} />
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success me-2">
                        <i className="fa fa-arrow-up"></i> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted">
                          Current
                        </h5>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <GiProfit fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger me-2">
                        <i className="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted">
                          Total Return
                        </h5>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <BsCashCoin fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success me-2">
                        <i className="fas fa-arrow-up"></i> 12%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <h5 className="mb-0 sec_title">Invested In Mutual Fund</h5>
            </div>
            <MutualFundPopularFund />
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default page;

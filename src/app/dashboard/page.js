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
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";
import Investments from "@/component/investments";
import MutualFundPopularFund from "@/component/mutual-fund-popularfund";

function page() {
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
          <div class="dashboard-body">
            <div class="row">
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Invested
                        </h5>
                        <span class="h2 font-weight-bold mb-0">350,897</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                          <FaHandHoldingUsd fontSize={32} />
                          <i class="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success me-2">
                        <i class="fa fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Current
                        </h5>
                        <span class="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <GiProfit fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-danger me-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Total Return
                        </h5>
                        <span class="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                          <BsCashCoin fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success me-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <h5 className="mb-0 sec_title">Invested In Stock</h5>
            </div>
            <StocksList STOCK_LIST={ALL_STOCK_COMPANY_DATA} />
          </div>
        </Tab>
        <Tab eventKey="MutualFunds" title="MutualFunds">
          <div class="dashboard-body">
            <div class="row">
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Invested
                        </h5>
                        <span class="h2 font-weight-bold mb-0">350,897</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                          <FaHandHoldingUsd fontSize={32} />
                          <i class="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success me-2">
                        <i class="fa fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Current
                        </h5>
                        <span class="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <GiProfit fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-danger me-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6">
                <div class="card card-stats mb-4 mb-xl-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted">
                          Total Return
                        </h5>
                        <span class="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                          <BsCashCoin fontSize={32} />
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success me-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="text-nowrap">Since last month</span>
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

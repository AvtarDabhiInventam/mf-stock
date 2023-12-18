"use client";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import IndexMarket from "@/component/index-market";
import StocksList from "@/component/stocks-list";
import ProductTools from "@/component/product-tools";
import TopGainers from "@/component/top-gainers";
import TopLosers from "@/component/top-losers";
import TopSectors from "@/component/top-sectors";
import Investments from "@/component/investments";
import Watchlists from "@/component/watchlists";
import MutualFundsCategory from "@/component/mutual-fund-category";
import MutualFundList from "@/component/mutual-fund-list";
import MutualFundWatchList from "@/component/mutual-fund-watchlist";
import MutualFundPopularFund from "@/component/mutual-fund-popularfund";

const WatchList = () => {
  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="Stock"
          transition={false}
          id="noanim-tab-example"
          className="mb-4 mt-5 tabs_main_div"
        >
          <Tab eventKey="Stock" title="Stock">
            <Row className="column-reverse-mob">
              <Col md={8}>
                <div className="">
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Watchlist</h5>
                  </div>
                  <StocksList />
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="MutualFunds" title="MutualFunds">
            <Row className="column-reverse-mob">
              <Col md={8}>
                <div className="">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Watchlist</h5>
                    </div>
                  </div>
                  <MutualFundWatchList />
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default WatchList;

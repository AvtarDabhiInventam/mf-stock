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

export default function Home() {
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
            <Row>
              <Col md={8}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Index</h5>
                    </div>
                    <div>
                      <Link href="/">All indices</Link>
                    </div>
                  </div>
                  <IndexMarket />
                </div>
                <div className="mt-5">
                  <div className="mb-3">
                    <h5 className="text-white mb-0">Most Bought on Groww</h5>
                  </div>
                  <StocksList />
                </div>
                <div className="mt-5">
                  <div className="mb-3">
                    <h5 className="text-white mb-0">Product & Tools</h5>
                  </div>
                  <ProductTools />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Top Gainers</h5>
                    </div>
                    <div>
                      <Link href="/">See more</Link>
                    </div>
                  </div>
                  <TopGainers />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Stocks in News</h5>
                    </div>
                    <div>
                      <Link href="/">News</Link>
                    </div>
                  </div>
                  <c />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Top Losers</h5>
                    </div>
                    <div>
                      <Link href="/">See more</Link>
                    </div>
                  </div>
                  <TopLosers />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Top Sectors</h5>
                    </div>
                    <div>
                      <Link href="/">See more</Link>
                    </div>
                  </div>
                  <TopSectors />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">Your Investments</h5>
                    </div>
                    <div>
                      <Link href="/">Dashboard</Link>
                    </div>
                  </div>
                  <Investments />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="text-white mb-0">All watchlists</h5>
                    </div>
                    <div>
                      <Link href="/">View all</Link>
                    </div>
                  </div>
                  <Watchlists />
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="MutualFunds" title="MutualFunds">
            Mutual Funds
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

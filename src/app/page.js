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
import CurrentInvestment from "@/component/stock-current-investment";
import MFCurrentInvestment from "@/component/mutual-fund-current-investment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStockCompany } from "@/redux/slices/stockSlice";

export default function Home() {
  const dispatch = useDispatch();
  const allStockComany = useSelector(
    (state) => state.stockReducer.allStockComany
  );

  useEffect(() => {
    dispatch(getAllStockCompany());
  }, []);

  const STOCK_LIST =
    allStockComany?.filter((item) => item.section === "stocksInNews") ||
    allStockComany;

  const MOST_BOUGHT_STOCK_LIST =
    allStockComany?.filter((item) => item.section === "mostBoughtOnMF") ||
    allStockComany;

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
            <Row className="column-reverse-mob column-reverse-tab">
              <Col xs={12} md={12} xl={8}>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Index</h5>
                    </div>
                    <div>
                      <Link href="/">All indices</Link>
                    </div>
                  </div>
                  <IndexMarket />
                </div>
                <div className="mt-5">
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Most Bought on mf-stock</h5>
                  </div>
                  <StocksList STOCK_LIST={MOST_BOUGHT_STOCK_LIST} />
                </div>
                <div className="mt-5">
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Product & Tools</h5>
                  </div>
                  <ProductTools />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Top Gainers</h5>
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
                      <h5 className="mb-0 sec_title">Stocks in News</h5>
                    </div>
                    <div>
                      <Link href="/">News</Link>
                    </div>
                  </div>
                  <StocksList STOCK_LIST={STOCK_LIST} />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Top Losers</h5>
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
                      <h5 className="mb-0 sec_title">Top Sectors</h5>
                    </div>
                    <div>
                      <Link href="/">See more</Link>
                    </div>
                  </div>
                  <TopSectors />
                </div>
              </Col>
              <Col xs={12} md={8} xl={4} className="tabs_invest_div">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Your Investments</h5>
                    </div>
                    <div>
                      <Link href="/">Dashboard</Link>
                    </div>
                  </div>
                  <Investments />
                </div>

                <div className="mt-4 mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">All watchlists</h5>
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
            <Row className="column-reverse-mob column-reverse-tab">
              <Col xs={12} md={12} xl={8}>
                <div>
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Category</h5>
                  </div>
                  <MutualFundsCategory />
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Popular fund</h5>
                    </div>
                    <div>
                      <Link href="/">See all</Link>
                    </div>
                  </div>
                  <MutualFundPopularFund />
                </div>

                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Watchlist</h5>
                    </div>
                    <div>
                      <Link href="/">See all</Link>
                    </div>
                  </div>
                  <MutualFundWatchList />
                </div>

                <div className="mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">All mutual fund</h5>
                    </div>
                    <div>
                      <Link href="/">See all</Link>
                    </div>
                  </div>
                  <MutualFundList />
                </div>
              </Col>
              <Col xs={12} md={8} xl={4} className="tabs_invest_div">
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Your Investments</h5>
                    </div>
                    <div>
                      <Link href="/">Dashboard</Link>
                    </div>
                  </div>
                  <Investments />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">My Mutual Fund</h5>
                    </div>
                  </div>
                  <MFCurrentInvestment />
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

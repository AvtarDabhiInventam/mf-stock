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
import {
  getAllStockCategory,
  getAllStockCompany,
  setActiceTab,
} from "@/redux/slices/stockSlice";
import { getAllMFCategory, getAllMFCompany } from "@/redux/slices/mfSlice";

export default function Home() {
  const dispatch = useDispatch();

  const { allStockCompany, allStockCategory } = useSelector(
    (state) => state.stockReducer
  );
  const { allMFCompany, allMFCategory } = useSelector(
    (state) => state.mfReducer
  );

  useEffect(() => {
    dispatch(getAllStockCompany());
    dispatch(getAllMFCompany());
    dispatch(getAllStockCategory());
    dispatch(getAllMFCategory());
    dispatch(setActiceTab("Stock"));
  }, []);

  const STOCK_LIST =
    allStockCompany?.filter((item) => item.section === "stocksInNews") ||
    allStockCompany;

  const MOST_BOUGHT_STOCK_LIST =
    allStockCompany?.filter((item) => item.section === "mostBoughtOnMF") ||
    allStockCompany;

  const MF_POPULAR_FUND_LIST =
    allMFCompany?.filter((item) => item.section === "popularFund") ||
    allMFCompany;

  const MF_WATCHLIST =
    allMFCompany?.filter((item) => item.section === "watchList") ||
    allMFCompany;

  const MF_MYMF_LIST =
    allMFCompany?.filter((item) => item.section === "myMutualFund") ||
    allMFCompany;

  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="Stock"
          onSelect={(k) => dispatch(setActiceTab(k))}
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
                  <IndexMarket allStockCategory={allStockCategory} />
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
                  <MutualFundsCategory allMFCategory={allMFCategory} />
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
                  <MutualFundPopularFund MF_LIST={MF_POPULAR_FUND_LIST} />
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
                  <MutualFundWatchList MF_LIST={MF_WATCHLIST} />
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
                  <MutualFundList MF_LIST={allMFCompany} />
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
                  <MFCurrentInvestment MF_LIST={MF_MYMF_LIST} />
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

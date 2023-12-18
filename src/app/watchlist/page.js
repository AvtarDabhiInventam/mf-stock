"use client";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import MutualFundWatchList from "@/component/mutual-fund-watchlist";
import StockWatchlistMain from "@/component/stocks-watchlists-main";
import MutualFundWatchlistMain from "@/component/mutualfund-watchlists-main";

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
              <Col md={12}>
                <div className="">
                  <div className="mb-3">
                    <h5 className="mb-0 sec_title">Watchlist</h5>
                  </div>
                  <StockWatchlistMain />
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="MutualFunds" title="MutualFunds">
            <Row className="column-reverse-mob">
              <Col md={12}>
                <div className="">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h5 className="mb-0 sec_title">Watchlist</h5>
                    </div>
                  </div>
                  <MutualFundWatchlistMain />
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

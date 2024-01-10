import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import StocksList from "../stocks-list";
import { useSelector } from "react-redux";

const TopLosers = () => {
  const allStockComany = useSelector(
    (state) => state.stockReducer.allStockComany
  );
  const LARGE_STOCK_LIST =
    allStockComany?.filter((item) =>
      item?.section === "topLosers" ? item.equityFunds === "Large" : ""
    ) || allStockComany;
  const MEDIUM_STOCK_LIST =
    allStockComany?.filter((item) =>
      item?.section === "topLosers" ? item.equityFunds === "Medium" : ""
    ) || allStockComany;
  const SMALL_STOCK_LIST =
    allStockComany?.filter((item) =>
      item?.section === "topLosers" ? item.equityFunds === "Small" : ""
    ) || allStockComany;
  return (
    <>
      <Tabs
        defaultActiveKey="Large"
        transition={false}
        className="mb-4 mt-0 tabs_main_div"
      >
        <Tab eventKey="Large" title="Large">
          <StocksList STOCK_LIST={LARGE_STOCK_LIST} />
        </Tab>
        <Tab eventKey="Mid" title="Mid">
          <StocksList STOCK_LIST={MEDIUM_STOCK_LIST} />
        </Tab>
        <Tab eventKey="Small" title="Small">
          <StocksList STOCK_LIST={SMALL_STOCK_LIST} />
        </Tab>
      </Tabs>
    </>
  );
};

export default TopLosers;

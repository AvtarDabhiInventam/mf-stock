import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import StocksList from "../stocks-list";
import {
  ALL_STOCK_COMPANY_DATA,
  TOP_GAINERS_LIST,
} from "@/jsondata/stockConstant";

const TopGainers = () => {
  const LARGE_STOCK_LIST =
    TOP_GAINERS_LIST?.filter((item) => item.equityFunds === "Large") ||
    ALL_STOCK_COMPANY_DATA;
  const MEDIUM_STOCK_LIST =
    TOP_GAINERS_LIST?.filter((item) => item.equityFunds === "Medium") ||
    ALL_STOCK_COMPANY_DATA;
  const SMALL_STOCK_LIST =
    TOP_GAINERS_LIST?.filter((item) => item.equityFunds === "Small") ||
    ALL_STOCK_COMPANY_DATA;

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

export default TopGainers;

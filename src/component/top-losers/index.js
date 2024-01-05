import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import StocksList from "../stocks-list";
import { ALL_STOCK_COMPANY_DATA } from "@/jsondata/stockConstant";

const TopLosers = () => {
  const STOCK_LIST =
    ALL_STOCK_COMPANY_DATA?.filter((item) => item.section === "topLosers") ||
    ALL_STOCK_COMPANY_DATA;
  return (
    <>
      <Tabs
        defaultActiveKey="Large"
        transition={false}
        className="mb-4 mt-0 tabs_main_div"
      >
        <Tab eventKey="Large" title="Large">
          <StocksList STOCK_LIST={STOCK_LIST} />
        </Tab>
        <Tab eventKey="Mid" title="Mid">
          <StocksList STOCK_LIST={STOCK_LIST} />
        </Tab>
        <Tab eventKey="Small" title="Small">
          <StocksList STOCK_LIST={STOCK_LIST} />
        </Tab>
      </Tabs>
    </>
  );
};

export default TopLosers;

import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import StocksList from "../stocks-list";

const TopGainers = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="Large"
        transition={false}
        className="mb-4 mt-0 tabs_main_div"
      >
        <Tab eventKey="Large" title="Large">
          <StocksList section="topGainers" />
        </Tab>
        <Tab eventKey="Mid" title="Mid">
          <StocksList section="topGainers" />
        </Tab>
        <Tab eventKey="Small" title="Small">
          <StocksList section="topGainers" />
        </Tab>
      </Tabs>
    </>
  );
};

export default TopGainers;

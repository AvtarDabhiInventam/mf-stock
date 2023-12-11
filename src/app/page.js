"use client";
import Image from "next/image";
import styles from "../styles/page.module.scss";
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Tabs
        defaultActiveKey="Stock"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Stock" title="Stock">
          <Row>
          <Col xs={12} md={12}>
            <div className="d-flex justify-content-between align-items-center">
                <div><h2 className="section-title">Index</h2></div>
                <div><Link href="/">All indices</Link></div>
            </div>
          </Col>
            <Col xs={12} md={3}>
              <Card className={`${styles.nifty_index}`}>
                <Card.Body>
                  <Card.Title>NIFTY 50</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    20,997
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className={`${styles.nifty_index}`}>
                <Card.Body>
                  <Card.Title>BANKNIFTY</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    20,997
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className={`${styles.nifty_index}`}>
                <Card.Body>
                  <Card.Title>SENSEX</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    20,997
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className={`${styles.nifty_index}`}>
                <Card.Body>
                  <Card.Title>FINNIFTY</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    20,997
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="MutualFunds" title="MutualFunds">
          Tab content for Mutual Funds
        </Tab>
      </Tabs>
    </main>
  );
}

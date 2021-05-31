import React, { useState } from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
const Header = (props) => {
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  return (
    <>
      <div
        className="header  pb-8 pt-5 pt-md-8"
        style={{ backgroundColor: "#f4f5f7" }}
      >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="6">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Income
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $124,563.00{" "}
                        </span>
                        <span className="text-success mr-2 bg-green text-white border rounded">
                          <i className="fas fa-arrow-up" /> +6.9%
                        </span>
                      </div>
                      <Col className="col-auto">
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <i class="ni ni-bullet-list-67"></i>{" "}
                          <span className="text-nowrap"></span>
                        </p>
                      </Col>
                    </Row>

                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-percentage text-sm">
                          <small className=" text-muted">Yearly Goal</small>
                        </div>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card
                  className="card-stats mb-4 mb-xl-0"
                  style={{ marginTop: 30 }}
                >
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">94.2% </span>
                        <span className="text-success mr-2 bg-green text-white border rounded">
                          <i className="fas fa-arrow-up" /> +6.9%
                        </span>
                      </div>
                      <Col className="col-auto">
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <i class="ni ni-bullet-list-67"></i>{" "}
                          <span className="text-nowrap"></span>
                        </p>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div className="chart" style={{ height: 130 }}>
                      <Bar
                        data={chartExample2.data}
                        options={chartExample2.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mb-5 mb-xl-0" xl="6">
                <Card className="bg-gradient-default shadow">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h6 className="text-uppercase text-light ls-1 mb-1">
                          Overview
                        </h6>
                        <h2 className="text-white mb-0">Balance</h2>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div className="chart" style={{ height: 240 }}>
                      <Line
                        data={chartExample1[chartExample1Data]}
                        options={chartExample1.options}
                        getDatasetAtEvent={(e) => console.log(e)}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

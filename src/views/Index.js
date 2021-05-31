import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <div>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid style={{ paddingBottom: 40 }}>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Transactions</h3>
                  </div>
                  <span style={{ float: "right" }}>
                    <Button color="primary" type="button">
                      Export
                    </Button>
                  </span>
                </Row>
              </CardHeader>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Incoming
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Invoices
                  </a>
                </li>
              </ul>

              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Descriptions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">M063592DR2</th>
                    <td>08.04.2021</td>
                    <td>Code 5928MD01</td>
                    <td>
                      <span className="text-white mr-3 bg-green border rounded">
                        {" "}
                        Completed
                      </span>
                    </td>
                    <td>$2500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">M063592DR2</th>
                    <td>08.04.2021</td>
                    <td>Code 5928MD01</td>
                    <td>
                      <span className="text-white mr-3 bg-green border rounded">
                        {" "}
                        Completed
                      </span>
                    </td>
                    <td>$2500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">M063592DR2</th>
                    <td>08.04.2021</td>
                    <td>Code 5928MD01</td>
                    <td>
                      <span className="text-white mr-3 bg-green border rounded">
                        {" "}
                        Completed
                      </span>
                    </td>
                    <td>$2500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">M063592DR2</th>
                    <td>08.04.2021</td>
                    <td>Code 5928MD01</td>
                    <td>
                      <span className="text-white mr-3 bg-green border rounded">
                        {" "}
                        Completed
                      </span>
                    </td>
                    <td>$2500.00</td>
                  </tr>
                  <tr>
                    <th scope="row">M063592DR2</th>
                    <td>08.04.2021</td>
                    <td>Code 5928MD01</td>
                    <td>
                      <span className="text-white mr-3 bg-green border rounded">
                        {" "}
                        Completed
                      </span>
                    </td>
                    <td>$2500.00</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;

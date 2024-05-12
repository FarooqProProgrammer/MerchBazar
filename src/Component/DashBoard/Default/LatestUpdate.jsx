import React, { Fragment, useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { H5, P } from "../../../AbstractElements";
import { LatestUpdates } from "../../../Constant";
import { ChartCandel } from "../../../Pages/DashBoard/ChartsData/ChartCandel";

const LatestUpdate = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setDisplay(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!display) {
    return <></>;
  }
  return (
    <Fragment>
      <Col xl="4" md="6" className="des-xl-50 box-col-6 latest-update-sec">
        <Card className="card">
          <CardHeader>
            <H5>{LatestUpdates}</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            <div className="d-flex w-100">
              <ApexChart className="candle-chart" id="chart-candle" options={ChartCandel.options} series={ChartCandel.series} type="candlestick" height="253" />
            </div>
            <div className="update-block">
              <div className="table-responsive">
                <Table className="table-bordernone">
                  <tbody>
                    <tr>
                      <td>
                        <div className="update-widgets">
                          <div className="icon bg-primary">
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>Win best seller of the year award</span>
                        <P>Company San Francisco</P>
                      </td>
                      <td>
                        <P>34 minits ago</P>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="update-widgets">
                          <div className="icon bg-secondary me-3">
                            <i className="fa fa-check-circle"></i>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <span>Approved our product in checking</span>
                        <P>Elisse joson,San francisco</P>
                      </td>
                      <td>
                        <P>1 hour ago</P>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default LatestUpdate;

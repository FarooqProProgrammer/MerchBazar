import React, { Fragment, useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { Card, CardBody, CardFooter, CardHeader, Col, Table } from 'reactstrap';
import { H5, H6 } from '../../../AbstractElements';
import { StatisticsChart } from '../../../Pages/DashBoard/ChartsData/StatisticsChart';

const Statistics = () => {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    let timer = setTimeout(() => setDisplay(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if(!display) {
 return <></>;
  }
  return (
    <Fragment>
      <Col xl="4" lg="12" md="6" className="des-xl-50 box-col-6 box-col-6 statistics-sec">
        <Card>
          <CardHeader>
            <H5>Statistics</H5>
          </CardHeader>
          <CardBody className="chart-block p-0">
            <ApexChart id="chart-statistics" options={StatisticsChart.options} series={StatisticsChart.series} type="bar" height='285' />
          </CardBody>
          <CardFooter>
            <div className="statistics-details text-center">
              <Table className="table-bordernone">
                <tbody>
                  <tr>
                    <td>
                      <span>Emails</span>
                    </td>
                    <td>
                      <H6>
                        <i className="fa fa-arrow-up font-primary me-1"> </i>
                        <span className="font-primary me-1">22
                        </span>Growth in Last Week
                      </H6>
                    </td>
                    <td>
                      <span>8457</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Events</span>
                    </td>
                    <td>
                      <H6>
                        <i className="fa fa-arrow-down me-1 font-secondary"></i>
                        <span className="font-secondary me-1">8</span>in Last Week
                      </H6>
                    </td>
                    <td>
                      <span>16</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Visits</span>
                    </td>
                    <td>
                      <H6>
                        <i className="fa fa-arrow-up font-info me-1"></i>
                        <span className="font-info me-1">22</span>Great
                        Growth in Last Week
                      </H6>
                    </td>
                    <td>
                      <span>8457</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Statistics;
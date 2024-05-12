import React, { Fragment, useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import ChartistGraph from 'react-chartist';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H3, H5, P } from '../../../AbstractElements';
import { ChartistChartData, ChartistChartOption, TotalEvents } from '../../../Pages/DashBoard/ChartsData/TotalEvents';

const DailyEarning = () => {
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
      <Col xl="4" className="des-xl-100 box-col-12">
        <Row>
          <Col xl="12" sm="6" className="des-xl-50 box-col-6 daily-earning-sec">
            <Card>
              <CardHeader>
                <H5>Daily Earning</H5>
              </CardHeader>
              <CardBody className="p-t-0">
                <H3 attrH3={{ className: 'd-flex' }}>
                  <div className="counter">$ 8,55,462</div>
                </H3>
                <div className="progress-gradient-fill">
                  <div className="progress sm-progress-bar">
                    <div className="progress-gradient-primary" role="progressbar" style={{ width: '80%' }}
                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="tag-section d-flex justify-content-between align-items-end">
                  <div className="tag-content d-flex">
                    <i className="fa fa-arrow-up toprightarrow-primary"></i>
                    <span>78.21%</span>
                    <P>More than last year</P>
                  </div>
                  <div className="round-tag">
                    <i className="fa fa-usd"></i>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="12" sm="6" className="des-xl-50 box-col-6 total-events-sec">
            <Card>
              <CardHeader className="justify-content-between">
                <H5>Total Events</H5>
                <div className="center-content">
                  <P>last year events</P>
                  <span className="counter"> 5945</span>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="apex-complain">
                  <ApexChart id="mix1" options={TotalEvents.options} series={TotalEvents.series} type="area" height="175" />
                </div>
                <div className="small-mix">
                  <ChartistGraph
                    data={ChartistChartData}
                    options={ChartistChartOption}
                    type={'Bar'}
                    listener={{
                      'draw': function (data) {
                        if (data.type === 'bar') {
                          data.element.attr({
                            style: 'stroke-width: 5px',
                          });
                        }
                      }
                    }} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};
export default DailyEarning;
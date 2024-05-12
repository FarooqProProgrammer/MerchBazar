import React, { Fragment, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { ApexEarningChart, ApexEarningChartOption } from '../../../Pages/DashBoard/Project/ProjectChartData/ChartData';

const AnnuallyEarnings = () => {
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
      <Col xl="8" className="des-xl-100 box-col-12 annual-earning-sec">
        <Card>
          <CardHeader className="justify-content-between">
            <H5>Annually Earnings</H5>
            <div className="center-content">
              <div className="center-content-left">
                <div className="round bg-primary d-inline-block"></div>
                <P>Archive</P>
              </div>
              <div className="center-content-right">
                <P>Expected</P>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-2 p-0">
            <ReactApexChart id="earnings-chart" series={ApexEarningChart.series} options={ApexEarningChartOption.options} type="bar" height="365" />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default AnnuallyEarnings;
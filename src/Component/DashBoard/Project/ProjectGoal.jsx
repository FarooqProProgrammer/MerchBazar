import { H5, P } from '../../../AbstractElements';
import { ApexRadarChartOption, ApexRadarChartSeries } from '../../../Pages/DashBoard/Project/ProjectChartData/ChartData';
import React, { Fragment, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const ProjectGoal = () => {
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
        <Col md="6" className="box-col-12 box-col-6 project-goal-sec">
          <Card>
            <CardHeader className="justify-content-between">
              <H5>Project Goal</H5>
              <div className="center-content">
                <P>Archive</P>
                <span>$658429</span>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <ReactApexChart id="radar-chart" series={ApexRadarChartSeries.series} options={ApexRadarChartOption.options} type="radar" height="410" />
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
};
export default ProjectGoal;

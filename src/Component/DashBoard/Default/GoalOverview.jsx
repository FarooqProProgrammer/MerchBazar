import React, { Fragment, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap';
import { H4, H5, LI, P, UL } from '../../../AbstractElements';
import { GoalOverviewChart } from '../../../Pages/DashBoard/ChartsData/GoalOverviewChart';

const GoalOverview = () => {
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
      <Col xl="4" md="6" className="des-xl-50 box-col-6 goal-overview-sec">
        <Card>
          <CardHeader>
            <H5>Goal Overview</H5>
          </CardHeader>
          <CardBody className="py-0 text-center">
            <div className="goal-chart-block d-flex justify-content-center">
              <ReactApexChart className="goal-overview-chart" id="goal-overview-chart" options={GoalOverviewChart.options} series={GoalOverviewChart.series} height='100%' type="radialBar" />
              <div className="highest-goal"><span>$3.9k</span>
                <P>Highest</P>
              </div>
            </div>
          </CardBody>
          <CardFooter className="card-footer">
            <UL attrUL={{ className: 'simple-list goal-details d-flex flex-row' }}>
              <LI>
                <div className="complete-goal">
                  <H4>65%</H4><span>Completed Goal</span>
                </div>
              </LI>
              <LI>
                <div className="expected-goal">
                  <H4>98%</H4><span>Our Expected Goal</span>
                </div>
              </LI>
            </UL>
          </CardFooter>
        </Card>
      </Col>
    </Fragment >
  );
};
export default GoalOverview;
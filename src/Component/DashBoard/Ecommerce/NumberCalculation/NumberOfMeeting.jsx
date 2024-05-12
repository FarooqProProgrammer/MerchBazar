import { H4, P } from '../../../../AbstractElements';
import { ApexRadialbar } from '../../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts';
import React, { Fragment, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const NumberOfMeeting = () => {
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
        <Col sm="4" className="des-sm-100">
          <Card>
            <CardBody>
              <div className="redial-block">
                <div className="redial-chart">
                  <ReactApexChart id="chart-update-1" options={ApexRadialbar.options16} series={ApexRadialbar.series} type="radialBar" />
                </div>
                <div className="meeting-details text-center">
                  <H4>652594</H4>
                  <P>Number of Meetings</P>
                  <div className="meeting-rate primary-rate"><span className="font-primary">2.00%</span>
                    <P>(30 days)</P>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
};
export default NumberOfMeeting;
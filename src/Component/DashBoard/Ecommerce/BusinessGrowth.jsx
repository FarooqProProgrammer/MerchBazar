import { H5, P } from '../../../AbstractElements';
import { ApexBussnissChart } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/BussinessChart';
import React, { Fragment, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const BussinessGrowth = () => {
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
      <Col xl="5" sm="6" className=" box-col-12 business-growth-sec des-xl-50 des-sm-100">
        <Card>
          <CardHeader className="pb-0 justify-content-between">
            <H5>Business Growth</H5>
            <div className="center-content">
              <P>Total Growth</P>
              <span className="ms-3">$665000</span>
            </div>
          </CardHeader>
          <CardBody className="pt-0 business-chart">
            <ReactApexChart
              id="business-chart"
              options={ApexBussnissChart.options}
              series={ApexBussnissChart.series}
              type="line"
              height='275'
            />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default BussinessGrowth;
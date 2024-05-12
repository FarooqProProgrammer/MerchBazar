import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, P } from '../../../AbstractElements';
import { EchartBarOption } from '../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/EchartData';
import { ThisMonthTasks } from '../../../Constant';
import Chart from 'react-apexcharts';

const ProductMarketValue = () => {
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
      <Col xl="12" className="box-col-12 pro-market-sec">
        <Card>
          <CardHeader className="pb-0 justify-content-between">
            <H5>Product Market Value</H5>
            <div className="center-content">
              <div className="center-content-left">
                <P>{ThisMonthTasks}</P>
                <span className="m-l-10">$42866</span>
              </div>
              <div className="center-content-right">
                <P>Last Month</P>
                <span className="m-l-10">$20548</span>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="github-chart" >
               <Chart options={EchartBarOption.options} series={EchartBarOption.series} height="275" width="100%" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProductMarketValue;
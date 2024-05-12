import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { RadialBarChart } from '../../../Constant/index';
import { apexRadialBarChart } from './apexData';
import CommenHeader from '../Commen';

const RadialBarChartClass = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setDisplay(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if(!display) {
  return <></>;
  }
  return (
    <Fragment>
      <Col sm='12' xl="6" className='box-col-6'>
        <Card>
          <CommenHeader title={RadialBarChart} />
          <CardBody>
            <div id='circlechart'>
              <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={320} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default RadialBarChartClass;
import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { DonutChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import { apexDonutCharts } from './apexData';
import CommenHeader from '../Commen';

const DonutChartClass = () => {
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
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <CommenHeader title={DonutChart} />
          <CardBody className="apex-chart">
            <div id='donutchart'>
              <Chart options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DonutChartClass;
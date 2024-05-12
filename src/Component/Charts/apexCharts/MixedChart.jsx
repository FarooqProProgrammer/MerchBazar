import React, { Fragment, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { MixedChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { apexMixedCharts } from './apexData';

const MixedChartClass = () => {
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
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <CommenHeader title={MixedChart} />
          <CardBody>
            <div id='mixedchart'>
              <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default MixedChartClass;
import React, { Fragment, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from '../../../Constant/index';
import { areaSpaline } from './apexData';
import CommenHeader from '../Commen';

const AreaSpalineChartClass = () => {
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
          <CommenHeader title={AreaSpalineChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AreaSpalineChartClass;
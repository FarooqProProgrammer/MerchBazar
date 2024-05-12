import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { barChartData ,barChartOptions } from './chartsData';

const BarChartClass = ({ chartData }) => {
  return (
    <Fragment>
      <Col xl="6" md="12" className='box-col-12'>
        <Card>
          <CommenHeader title={BarChart} />
          <CardBody className="chart-block">
            <Bar data={barChartData} options={barChartOptions} height={140} />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BarChartClass;
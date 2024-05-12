import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChart } from '../../../Constant/index';
import { Line } from 'react-chartjs-2';
import CommenHeader from '../Commen';
import { lineChartData ,lineChartOptions } from './chartsData';

const LineChartClass = ({ chartData }) => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <CommenHeader title={LineChart} />
        <CardBody className="chart-block">
          <Line data={lineChartData} options={lineChartOptions} height={140} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartClass;
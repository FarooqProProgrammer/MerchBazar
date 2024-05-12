import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChart2 } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { lineChart2Data ,lineChart2option } from './chartsData';

const LineChart2Class = ({ chartData }) => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <CommenHeader title={LineChart2} />
        <CardBody className="chart-block">
          <Line data={lineChart2Data} options={lineChart2option} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart2Class;
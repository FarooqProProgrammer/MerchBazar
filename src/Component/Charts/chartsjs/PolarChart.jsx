import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { PolarChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { polarData ,polarOption } from './chartsData';

const PolarChartClass = ({ chartData }) => {
  return (
    <Col xl="6" md="12" className='box-col-12'  >
      <Card>
        <CommenHeader title={PolarChart} />
        <CardBody className="chart-block-container">
          <PolarArea data={polarData} options={polarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChartClass;
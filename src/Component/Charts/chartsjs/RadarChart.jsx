import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import {  RadarChartData } from './chartsData';

const RadarChartClass = ({ chartData }) => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <CommenHeader title={RadarChart} />
        <CardBody className="chart-block-container">
          <Radar data={RadarChartData} height={140} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;
import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Navigation } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Finance } from '../../../Constant';
import { columnChart } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';

const FinanceChart = () => {
  return (
    <Fragment>
      <Col xl="5" lg="12" className="box-col-12">
        <Card>
          <ChartHeader title={Finance}>
            <Navigation className="text-muted" />
          </ChartHeader>
          <CardBody>
            <div className="chart-container">
              <div id="columnchart">
                <ReactApexChart options={columnChart.options} series={columnChart.series} height="350" type="bar" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default FinanceChart;
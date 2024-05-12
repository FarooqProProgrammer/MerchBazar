import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BrowserUses } from '../../../Constant';
import { browserUses } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';

const BrowserUsesChart = () => {
  return (
    <Fragment>
      <Col sm="12" className="box-col-12">
        <div className="donut-chart-widget">
          <Card>
            <ChartHeader title={BrowserUses} />
            <CardBody>
              <div id="chart-widget13">
                <ReactApexChart options={browserUses.options} series={browserUses.series} height="500" type="candlestick" />
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default BrowserUsesChart;
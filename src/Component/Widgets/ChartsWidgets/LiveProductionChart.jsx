import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { LiveProducts } from '../../../Constant';
import { product } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';

const LiveProductionChart = () => {
  return (
    <Fragment>
      <Col lg='12' xl='7' className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <ChartHeader title={LiveProducts} />
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <div id="chart-widget6">
                      <ReactApexChart options={product.options} series={product.series} height="320" type="line" />
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};
export default LiveProductionChart;
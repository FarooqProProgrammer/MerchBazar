import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Col, Row, CardBody } from 'reactstrap';
import { PRODUCTS } from '../../../Constant';
import { H4, H6 } from '../../../AbstractElements';
import { lineChart3 } from '../../../Pages/Widgets/Charts/WidgetChartsData';

const ProductChart = () => {
  return (
    <Fragment>
      <Col xl="4" md="12">
        <Card className="o-hidden">
          <div className="chart-widget-top">
          <CardBody>
            <Row>
              <Col xs="8">
                <H6 attrH6={{ className: 'f-w-600 font-success' }}>{PRODUCTS}</H6>
                <span className="num">
                  <span className="counter">68</span>%
                  <i className="icon-angle-up f-12 ms-1"></i>
                </span>
              </Col>
              <Col xs="4" className="text-end">
                <H4 attrH4={{ className: 'num total-value' }}>
                  <span className="counter">93</span>M
                </H4>
              </Col>
            </Row>
          </CardBody>
            <div>
              <div id="chart-widget3">
                <ReactApexChart className="flot-chart-placeholder" options={lineChart3.options} series={lineChart3.series} height="170" type="area" id="chart-widget-top-third" />
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ProductChart;
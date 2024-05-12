import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Col, Row } from 'reactstrap';
import { TotalEarning } from '../../../Constant';
import { H4 } from '../../../AbstractElements';
import { radialChart } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';
import { TotalEarningData } from '../../../Data/Widgets';

const TotalEarningChart = () => {
  return (
    <Fragment>
      <Col xl="5" md="12" className="box-col-12">
        <Card className="o-hidden">
          <ChartHeader title={TotalEarning} />
          <div className="bar-chart-widget">
            <div className="top-content bg-primary"></div>
            <div className="bottom-content card-body">
              <Row>
                <Col xs="12">
                  <div id="chart-widget5">
                    <ReactApexChart options={radialChart.options} series={radialChart.series} height="360" type="radialBar" />
                  </div>
                </Col>
              </Row>
              <Row className="text-center">
                {
                  TotalEarningData.map((item, i) => {
                    return (
                      <Col xs="4" className={(i<2)?"b-r-light":""} key={item.id}>
                        <div>
                          <span className=" font-primary">{item.num1}
                            <i className="icon-angle-up f-12 ms-1 me-1"></i>
                          </span>
                          <span className="text-muted block-bottom">{item.year}</span>
                          <H4 className="num m-0">
                            <span className="counter color-bottom">{item.num2}</span>{item.num3}
                          </H4>
                        </div>
                      </Col>
                    );
                  })
                }
              </Row>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TotalEarningChart;
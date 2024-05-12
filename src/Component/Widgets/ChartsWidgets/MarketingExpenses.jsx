import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { MarketinExpenses } from '../../../Constant';
import { barChart } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';

const MarketingExpenses = () => {
    return (
        <Fragment>
            <Col xl="7" md="12" className="box-col-12">
                <Card className="o-hidden">
                    <ChartHeader title={MarketinExpenses} />
                    <div className="bar-chart-widget">
                        <CardBody className="bottom-content">
                            <Row className="row">
                                <Col xs="12">
                                    <div id="chart-widget4">
                                        <ReactApexChart options={barChart.options} series={barChart.series} height="380" type="bar" />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};
export default MarketingExpenses;
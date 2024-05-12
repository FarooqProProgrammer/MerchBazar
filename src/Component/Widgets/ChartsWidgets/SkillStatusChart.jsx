import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { TrendingUp } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { SkillStatus } from '../../../Constant';
import { radialChartLive } from '../../../Pages/Widgets/Charts/WidgetChartsData';
import ChartHeader from './Common/ChartHeader';

const SkillStatusChart = () => {
  return (
    <Fragment>
      <Col xl="4" lg="12" className="box-col-6 xl-50">
        <Card>
          <ChartHeader title={SkillStatus}>
            <TrendingUp className="text-muted" />
          </ChartHeader>
          <CardBody className="pt-0">
            <div className="chart-container">
              <div id="circlechart">
                <ReactApexChart options={radialChartLive.options} series={radialChartLive.series} height="374" type="radialBar" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default SkillStatusChart;
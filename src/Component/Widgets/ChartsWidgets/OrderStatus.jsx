import React, { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ShoppingBag } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { OrderStatus } from '../../../Constant';
import ChartHeader from './Common/ChartHeader';
import { ApexLineChartOption, ApexLineChartSeries } from '../../../Pages/Widgets/Charts/WidgetChartsData';

const OrderStatus2 = () => {
  return (
    <Fragment>
      <Col xl="7" lg="12" className="box-col-12">
        <Card>
          <ChartHeader title={OrderStatus}>
            <ShoppingBag className="text-muted" />
          </ChartHeader>
          <CardBody>
            <div className="chart-container">
              <div id="linechart">
                <ReactApexChart options={ApexLineChartOption.options} height='350' series={ApexLineChartSeries.series} type="line"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OrderStatus2;
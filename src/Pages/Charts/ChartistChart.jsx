import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ChartistContain from '../../Component/Charts/chartistCharts';

const ChartistChart = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Chart" title="Chartist Chart" />
      </div>
      <ChartistContain />
    </Fragment>
  );
};
export default ChartistChart;
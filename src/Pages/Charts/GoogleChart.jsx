import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import GoogleChartsContain from '../../Component/Charts/googleCharts';

const GoogleChart = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Chart" title="Google Chart" />
      </div>
      <GoogleChartsContain />
    </Fragment>
  );
};
export default GoogleChart;
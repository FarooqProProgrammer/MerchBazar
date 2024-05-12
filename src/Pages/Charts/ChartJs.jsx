import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ChartJsContain from '../../Component/Charts/chartsjs';

const ChartJs = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Chart" title="Chart Js" />
      </div>
      <ChartJsContain />
    </Fragment>
  );
};
export default ChartJs;
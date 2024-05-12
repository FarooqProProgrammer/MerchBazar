import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ApexchartsContain from '../../Component/Charts/apexCharts';

const ApexChart = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Chart" title="Apex Chart" />
        </div>
        <ApexchartsContain />
      </Fragment>
    );
};
export default ApexChart;
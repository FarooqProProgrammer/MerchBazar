import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import SweetAlertsContain from '../../Component/Bonus UI/SweetAlert';

const SweetAlerts = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Sweet Alert" />
      </div>
      <SweetAlertsContain />
    </Fragment>
  );
};

export default SweetAlerts;
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BootstrapNotifyContain from '../../Component/Bonus UI/BootstrapNotify';

const BootstrapNotify = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Bootstrap Notify" />
        </div>
        <BootstrapNotifyContain />
      </Fragment>
    );
};

export default BootstrapNotify;
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import DefaultContain from '../../../Component/DashBoard/Default/index';
import React, { Fragment } from 'react';

const Default = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Dashboard" title="Default" />
        </div>
        <DefaultContain />
      </Fragment>
    );
};
export default Default;
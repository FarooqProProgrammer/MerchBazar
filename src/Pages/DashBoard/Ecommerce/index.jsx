import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import EcommerceContain from '../../../Component/DashBoard/Ecommerce/index';

const Ecommerce = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="Ecommerce" />
      </div>
      <EcommerceContain />
    </Fragment>
  );
};
export default Ecommerce;
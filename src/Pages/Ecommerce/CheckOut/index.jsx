import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import CheckOutContain from '../../../Component/Ecommerce/CheckOut';
import React, { Fragment } from 'react';

const CheckOut = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="CheckOut" />
        </div>
        <CheckOutContain />
      </Fragment>
    );
};
export default CheckOut;
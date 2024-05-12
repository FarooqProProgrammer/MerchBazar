import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import PaymentDetailContain from '../../../Component/Ecommerce/PaymentDetails';
import React, { Fragment } from 'react';

const PaymentDetails = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title=" Payment Details" />
        </div>
        <PaymentDetailContain />
      </Fragment>
    );
};
export default PaymentDetails;
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import InvoiceContain from '../../../Component/Ecommerce/Invoice';
import React, { Fragment } from 'react';

const Invoice = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="Invoice" />
        </div>
        <InvoiceContain />
      </Fragment>
    );
};
export default Invoice;
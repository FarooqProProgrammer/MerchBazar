import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import OrderHistoryContain from '../../../Component/Ecommerce/OrderHistory';
import React, { Fragment } from 'react';

const OrderHistory = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="Order History" />
        </div>
        <OrderHistoryContain />
      </Fragment>
    );
};
export default OrderHistory;
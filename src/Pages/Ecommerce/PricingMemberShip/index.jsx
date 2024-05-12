import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import PricingMembershipContain from '../../../Component/Ecommerce/PricingMemberShip';
import React, { Fragment } from 'react';

const PricingMembership = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Ecommerce" title="Pricing" />
        </div>
        <PricingMembershipContain />
      </Fragment>
    );
};
export default PricingMembership;
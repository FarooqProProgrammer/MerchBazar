import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SupportTickitContain from '../../Component/Support Tickit';
import React, { Fragment } from 'react';

const SupportTickit = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Support Ticket" title="Support Ticket" />
        </div>
        <SupportTickitContain />
      </Fragment>
    );
};
export default SupportTickit;
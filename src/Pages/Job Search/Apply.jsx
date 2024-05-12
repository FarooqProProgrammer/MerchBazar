import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ApplyContain from '../../Component/JobSearch/Apply';
import React, { Fragment } from 'react';

const ApplyNow = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Job Search" title="Apply" />
        </div>
        <ApplyContain />
      </Fragment>
    );
};
export default ApplyNow;
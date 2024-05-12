import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ReadMailContain from '../../../Component/Email/Read Mail';
import React, { Fragment } from 'react';

const ReadMail = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Email" title="Read Mail" />
        </div>
        <ReadMailContain />
      </Fragment>
    );
};
export default ReadMail;
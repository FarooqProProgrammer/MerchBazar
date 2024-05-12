import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ComposeContain from '../../../Component/Email/Compose';
import React, { Fragment } from 'react';

const Compose = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Email" title="Compose" />
        </div>
        <ComposeContain />
      </Fragment>
    );
};
export default Compose;
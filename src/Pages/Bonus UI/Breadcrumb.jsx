import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BreadcrumbClassContain from '../../Component/Bonus UI/Breadcrumb';

const BreadcrumbsClass = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Breadcrumbs" />
        </div>
        <BreadcrumbClassContain />
      </Fragment>
    );
};

export default BreadcrumbsClass;
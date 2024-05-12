import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ToursContain from '../../Component/Bonus UI/Tour';

const Tours = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Tour" />
        </div>
        <ToursContain />
      </Fragment>
    );
};

export default Tours;
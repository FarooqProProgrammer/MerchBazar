import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RatingClassContain from '../../Component/Bonus UI/Rating';

const RatingClass = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Rating" />
        </div>
        <RatingClassContain />
      </Fragment>
    );
};

export default RatingClass;
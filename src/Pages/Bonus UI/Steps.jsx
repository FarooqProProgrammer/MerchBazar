import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import StepsContain from '../../Component/Bonus UI/Steps';

const Steps = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Step" />
      </div>
      <StepsContain />
    </Fragment>
  );
};

export default Steps;
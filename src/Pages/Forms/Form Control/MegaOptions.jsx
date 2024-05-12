import { Breadcrumbs } from '../../../AbstractElements';
import MegaOptionsContain from '../../../Component/Forms/Form Control/Mega Option';
import React, { Fragment } from 'react';

const MegaOptions = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Control" title="Mega Option " />
        </div>
        <MegaOptionsContain />
      </Fragment>
    );
};
export default MegaOptions;
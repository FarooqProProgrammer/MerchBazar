import { Breadcrumbs } from '../../../AbstractElements';
import BaseInputContain from '../../../Component/Forms/Form Control/BaseInput';
import React, { Fragment } from 'react';

const BaseInput = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Control" title="Base Input" />
        </div>
        <BaseInputContain />
      </Fragment>
    );
};
export default BaseInput;
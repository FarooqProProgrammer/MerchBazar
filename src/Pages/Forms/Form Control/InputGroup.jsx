import { Breadcrumbs } from '../../../AbstractElements';
import InputGroupsContain from '../../../Component/Forms/Form Control/Input Group';
import React, { Fragment } from 'react';

const InputGroups = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Control" title="Input Group " />
        </div>
        <InputGroupsContain />
      </Fragment>
    );
};
export default InputGroups;
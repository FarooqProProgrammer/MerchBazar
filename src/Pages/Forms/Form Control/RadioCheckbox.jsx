import { Breadcrumbs } from '../../../AbstractElements';
import RadioCheckboxContain from '../../../Component/Forms/Form Control/Radio Checkbox';
import React, { Fragment } from 'react';

const RadioCheckbox = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Control" title="Radio Checkbox " />
        </div>
        <RadioCheckboxContain />
      </Fragment>
    );
};
export default RadioCheckbox;
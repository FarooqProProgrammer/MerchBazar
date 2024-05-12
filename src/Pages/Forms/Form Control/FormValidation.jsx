import { Breadcrumbs } from '../../../AbstractElements';
import FormValidationContain from '../../../Component/Forms/Form Control/Form Validation/FormValidation';
import React, { Fragment } from 'react';

const FormValidation = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Control" title="Form Validation" />
        </div>
        <FormValidationContain />
      </Fragment>
    );
};
export default FormValidation;
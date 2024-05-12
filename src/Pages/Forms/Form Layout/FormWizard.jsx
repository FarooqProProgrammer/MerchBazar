import { Breadcrumbs } from '../../../AbstractElements';
import FormWizardContain from '../../../Component/Forms/Form Layout/Form Wizard';
import React, { Fragment } from 'react';

const FormWizard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Layout" title="Form Wizard" />
        </div>
        <FormWizardContain />
      </Fragment>
    );
};
export default FormWizard;
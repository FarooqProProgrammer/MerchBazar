import { Breadcrumbs } from '../../../AbstractElements';
import FormSelectContain from '../../../Component/Forms/Form Widgets/Form Select2';
import React from 'react';
import { Fragment } from 'react';

const FormSelect2 = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Select2" />
        </div>
        <FormSelectContain />
      </Fragment>
    );
};
export default FormSelect2;
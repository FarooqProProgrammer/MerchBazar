import { Breadcrumbs } from '../../../AbstractElements';
import FormDatapickerContain from '../../../Component/Forms/Form Widgets/Form DataPicker';
import React from 'react';
import { Fragment } from 'react';

const FormDatapicker = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Form Datepicker" />
        </div>
        <FormDatapickerContain />
      </Fragment>
    );
};
export default FormDatapicker;
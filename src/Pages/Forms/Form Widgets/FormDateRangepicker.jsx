import { Breadcrumbs } from '../../../AbstractElements';
import FormDateRangepickerContain from '../../../Component/Forms/Form Widgets/Form Date Rangepicker';
import React from 'react';
import { Fragment } from 'react';

const FormDateRangepicker = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Date Rangepicker" />
        </div>
        <FormDateRangepickerContain />
      </Fragment>
    );
};
export default FormDateRangepicker;
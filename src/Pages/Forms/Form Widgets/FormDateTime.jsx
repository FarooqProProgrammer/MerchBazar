import { Breadcrumbs } from '../../../AbstractElements';
import DateTimeContain from '../../../Component/Forms/Form Widgets/Date and Time';
import React from 'react';
import { Fragment } from 'react';

const FormDateTime = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Date Time picker" />
        </div>
        <DateTimeContain />
      </Fragment>
    );
};
export default FormDateTime;
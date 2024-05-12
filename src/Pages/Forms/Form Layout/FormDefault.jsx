import { Breadcrumbs } from '../../../AbstractElements';
import FormDefaultContain from '../../../Component/Forms/Form Layout/Form Default';
import React, { Fragment } from 'react';

const FormDefault = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Layout" title="Form Default" />
        </div>
        <FormDefaultContain />
      </Fragment>
    );
};
export default FormDefault;
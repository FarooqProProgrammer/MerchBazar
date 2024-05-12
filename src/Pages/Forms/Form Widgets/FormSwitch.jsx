import { Breadcrumbs } from '../../../AbstractElements';
import FormSwitchContain from '../../../Component/Forms/Form Widgets/Form Switch';
import React from 'react';
import { Fragment } from 'react';

const FormSwitch = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Switch" />
        </div>
        <FormSwitchContain />
      </Fragment>
    );
};
export default FormSwitch;
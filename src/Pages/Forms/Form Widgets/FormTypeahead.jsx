import { Breadcrumbs } from '../../../AbstractElements';
import FormTypeaheadContain from '../../../Component/Forms/Form Widgets/Form Typeahead';
import React from 'react';
import { Fragment } from 'react';

const FormTypeahead = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Form Typeahead" />
        </div>
        <FormTypeaheadContain />
      </Fragment>
    );
};
export default FormTypeahead;
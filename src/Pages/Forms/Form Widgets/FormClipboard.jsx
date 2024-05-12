import { Breadcrumbs } from '../../../AbstractElements';
import FormClipboardContain from '../../../Component/Forms/Form Widgets/Form Clipboard';
import React from 'react';
import { Fragment } from 'react';

const FromClipboard = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Form Widgets" title="Form Clipboard" />
        </div>
        <FormClipboardContain />
      </Fragment>
    );
};
export default FromClipboard;
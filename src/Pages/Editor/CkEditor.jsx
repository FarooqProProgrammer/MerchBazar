import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import CkEditorContain from '../../Component/Editor/CkEditor';
import React, { Fragment } from 'react';

const CKEditor = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Editor" title="CK Editor" />
        </div>
        <CkEditorContain />
      </Fragment>
    );
};
export default CKEditor;
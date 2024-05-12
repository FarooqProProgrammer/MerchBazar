import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ACEEditorContain from '../../Component/Editor/Ace code editor/ACECodeEditor';
import React, { Fragment } from 'react';

const ACEEditor = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Editor" title=" ACE Editor" />
        </div>
        <ACEEditorContain />
      </Fragment>
    );
};
export default ACEEditor;
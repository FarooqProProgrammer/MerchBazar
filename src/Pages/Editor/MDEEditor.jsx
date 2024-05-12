import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MdeEDitorContain from '../../Component/Editor/MDE Editor/MDEEditor';
import React, { Fragment } from 'react';

const MDEEditor = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Editor" title=" MDE Editor" />
        </div>
        <MdeEDitorContain />
      </Fragment>
    );
};
export default MDEEditor;
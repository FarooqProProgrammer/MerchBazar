import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FileManagerContain from '../../Component/FileManager';
import React, { Fragment } from 'react';

const FileManager = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="File Manager" title=" File Manager" />
        </div>
        <FileManagerContain />
      </Fragment>
    );
};
export default FileManager;
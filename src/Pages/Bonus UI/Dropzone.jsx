import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DropzonesContain from '../../Component/Bonus UI/Dropzones';

const DropzoneClass = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Dropzone" />
        </div>
        <DropzonesContain />
      </Fragment>
    );
};

export default DropzoneClass;
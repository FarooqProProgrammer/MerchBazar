import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import UploadImageContain from '../../Component/Bonus UI/ImageUpload';

const ImageUpload = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Image Upload" />
      </div>
      <UploadImageContain />
    </Fragment>
  );
};

export default ImageUpload;
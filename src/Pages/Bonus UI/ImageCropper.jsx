import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ImagecropperContain from '../../Component/Bonus UI/ImageCropper';

const ImageCroppers = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Image Cropper" />
        </div>
        <ImagecropperContain />
      </Fragment>
    );
};

export default ImageCroppers;
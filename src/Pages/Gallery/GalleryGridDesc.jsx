import React, { Fragment } from 'react';
import ImageWithDescContain from '../../Component/Gallery/ImageWithDesc';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';

const GalleryGridDesc = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Gallery" title=" Gallery Grid Desc" />
      </div>
      <ImageWithDescContain />
    </Fragment>
  );
};
export default GalleryGridDesc;
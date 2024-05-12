import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ImageGalleryContain from '../../Component/Gallery/ImageGallery';
import React, { Fragment } from 'react';

const GalleryGrid = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Gallery" title=" Gallery Grid" />
      </div>
      <ImageGalleryContain />
    </Fragment>
  );
};
export default GalleryGrid;
import React, { Fragment } from 'react';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MesonryGalleryContain from '../../Component/Gallery/MesonryGallery';

const MasonryGallery = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Gallery" title="Masonry Gallery" />
      </div>
      <MesonryGalleryContain />
    </Fragment>
  );
};
export default MasonryGallery;
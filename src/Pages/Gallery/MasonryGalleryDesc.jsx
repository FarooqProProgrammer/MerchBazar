import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MesonryDescContain from '../../Component/Gallery/MesonryDesc';
import React, { Fragment } from 'react';

const MasonryGalleryDesc = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Gallery" title="Masonry Gallery Desc" />
      </div>
      <MesonryDescContain />
    </Fragment>
  );
};
export default MasonryGalleryDesc;
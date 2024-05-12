import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ImageHoverContain from '../../Component/Gallery/ImageHover';
import React, { Fragment } from 'react';

const HoverEffects = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Gallery" title="Hover Effect" />
      </div>
      <ImageHoverContain />
    </Fragment>
  );
};
export default HoverEffects;
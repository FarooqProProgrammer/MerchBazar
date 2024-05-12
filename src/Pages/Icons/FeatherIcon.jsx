import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FeatherIconContain from '../../Component/Icons/FeatherIcon';
import React, { Fragment } from 'react';

const FeatherIcon = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="Feather Icon" />
      </div>
      <FeatherIconContain />
    </Fragment>
  );
};
export default FeatherIcon;

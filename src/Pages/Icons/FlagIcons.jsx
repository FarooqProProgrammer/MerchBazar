import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FlagIconContain from '../../Component/Icons/FlagIcon';
import React, { Fragment } from 'react';

const FlagIcon = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="Flag Icon" />
      </div>
      <FlagIconContain />
    </Fragment>
  );
};
export default FlagIcon;

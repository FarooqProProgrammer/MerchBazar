import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import IcoIconsContain from '../../Component/Icons/IcoIcon';
import React, { Fragment } from 'react';

const IcoIcons = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="Ico Icons" />
      </div>
      <IcoIconsContain />
    </Fragment>
  );
};
export default IcoIcons;

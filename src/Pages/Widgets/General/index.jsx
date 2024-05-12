import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import GeneralContain from '../../../Component/Widgets/General';

const General = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Widgets" title="General" />
      </div>
      <GeneralContain />
    </Fragment>
  );
};
export default General;
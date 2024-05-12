import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import FontawesomeIconContain from '../../Component/Icons/FontawesomeIcon';
import React, { Fragment } from 'react';

const FontAwesome = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="Font Awesome" />
      </div>
      <FontawesomeIconContain />
    </Fragment>
  );
};
export default FontAwesome;

import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ThemifyIconsContain from '../../Component/Icons/ThemifyIcon';
import React, { Fragment } from 'react';

const ThemifyIcon = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="ThemifyIcon" />
      </div>
      <ThemifyIconsContain />
    </Fragment>
  );
};
export default ThemifyIcon;

import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import WeatherIconsContain from '../../Component/Icons/WeatherIcon';
import React, { Fragment } from 'react';

const WhetherIcon = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Icons" title="WhetherIcon" />
      </div>
      <WeatherIconsContain />
    </Fragment>
  );
};
export default WhetherIcon;

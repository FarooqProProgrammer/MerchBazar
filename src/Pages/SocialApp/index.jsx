import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import SocialAppContain from '../../Component/SocialApp';
import React, { Fragment } from 'react';

const SocialApp = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="SocialApp" title="Social App" />
        </div>
        <SocialAppContain/>
      </Fragment>
    );
};
export default SocialApp;
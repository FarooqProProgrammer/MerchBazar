import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersProfileContain from '../../../Component/Users/UsersProfile';
import React, { Fragment } from 'react';

const UsersProfile = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Users" title="Users Profile" />
        </div>
        <UsersProfileContain/>
      </Fragment>
    );
};
export default UsersProfile;
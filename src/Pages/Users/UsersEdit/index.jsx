import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersEditContain from '../../../Component/Users/UsersEdit';
import React, { Fragment } from 'react';

const UsersEdit = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Users" title="Users Edit" />
        </div>
        <UsersEditContain />
      </Fragment>
    );
};
export default UsersEdit;
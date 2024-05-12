import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import UsersCardssContain from '../../../Component/Users/UsersCards';
import React, { Fragment } from 'react';

const UsersCardss = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Users" title="Users Card" />
        </div>
        <UsersCardssContain />
      </Fragment>
    );
};
export default UsersCardss;
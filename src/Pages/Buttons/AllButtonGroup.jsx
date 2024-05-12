import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import GroupButtonContain from '../../Component/Buttons/GroupBtn';

const AllButtonGroup = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Button" title="Button Group" />
      </div>
      <GroupButtonContain />
    </Fragment>
  );
};
export default AllButtonGroup;
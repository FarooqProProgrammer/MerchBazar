import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TreeViewContain from '../../Component/Bonus UI/TreeView';

const TreeViews = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Tree View" />
      </div>
      <TreeViewContain />
    </Fragment>
  );
};

export default TreeViews;
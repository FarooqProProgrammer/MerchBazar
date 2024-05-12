import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import CreateListContain from '../../../Component/Project/Create List';
import React, { Fragment } from 'react';

const CreateList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Project" title="Create List" />
        </div>
        <CreateListContain />
      </Fragment>
    );
};
export default CreateList;
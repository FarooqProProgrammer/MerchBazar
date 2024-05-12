import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProjectListContain from '../../../Component/Project/Project List';
import React, { Fragment } from 'react';

const ProjectList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Project" title="Project List" />
        </div>
        <ProjectListContain />
      </Fragment>
    );
};
export default ProjectList;
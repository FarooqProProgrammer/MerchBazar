import React, { Fragment } from 'react';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ProjectContain from '../../../Component/DashBoard/Project';

const Project = () => {
  return (
    <Fragment>
      <div className="page-header dash-breadcrumb">
        <Breadcrumbs parent="Dashboard" title="Project" />
      </div>
      <ProjectContain />
    </Fragment>
  );
};
export default Project;
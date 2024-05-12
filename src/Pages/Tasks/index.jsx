import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import TaskContain from '../../Component/Task';
import React, { Fragment } from 'react';

const Tasks = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Tasks" title="Tasks" />
        </div>
        <TaskContain />
      </Fragment>
    );
};
export default Tasks;
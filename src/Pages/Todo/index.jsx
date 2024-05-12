import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import TodoContain from '../../Component/Todo';
import React, { Fragment } from 'react';

const Todo = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Todo" title="Todo" />
        </div>
        <TodoContain />
      </Fragment>
    );
};
export default Todo;
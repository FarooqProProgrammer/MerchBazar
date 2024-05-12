import { Breadcrumbs } from '../../AbstractElements';
import TodoFirebaseContain from '../../Component/Todo Firebase';
import React, { Fragment } from 'react';

const TodoFirebase = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Todo" title="Todo Firebase" />
        </div>
        <TodoFirebaseContain />
      </Fragment>
    );
};
export default TodoFirebase;
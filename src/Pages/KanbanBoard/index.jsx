import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import KanbanBoardContain from '../../Component/KanbanBoard';
import React, { Fragment } from 'react';

const KanbanBoard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="KanbanBoard" title=" kanbanBoard" />
        </div>
        <KanbanBoardContain />
      </Fragment>
    );
};
export default KanbanBoard;
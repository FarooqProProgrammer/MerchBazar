import { Breadcrumbs } from '../../../AbstractElements';
import DraggableContain from '../../../Component/Calender/Draggable Calender';
import React, { Fragment } from 'react';

const Draggable = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Calender" title="Draggable Calender" />
        </div>
        <DraggableContain />
      </Fragment>
    );
};
export default Draggable;
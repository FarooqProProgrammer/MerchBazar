import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DragAndDropContain from '../../Component/Bonus UI/DragAndDrop';

const DragAndDrop = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Drag and Drop" />
      </div>
      <DragAndDropContain />
    </Fragment>
  );
};

export default DragAndDrop;
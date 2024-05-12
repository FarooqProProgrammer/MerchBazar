import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import DraggingCardContain from '../../Component/Bonus UI/Cards/DragCards/index';

const DraggingCard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Dragging Card" />
        </div>
        <DraggingCardContain />
      </Fragment>
    );
};

export default DraggingCard;
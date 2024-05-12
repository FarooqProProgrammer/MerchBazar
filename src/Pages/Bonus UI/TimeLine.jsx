import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TimelineContain from '../../Component/Bonus UI/Timeline/timeline';

const TimeLines = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Timeline" />
      </div>
      <TimelineContain />
    </Fragment>
  );
};

export default TimeLines;
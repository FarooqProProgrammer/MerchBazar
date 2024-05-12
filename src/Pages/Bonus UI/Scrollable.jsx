import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import ScrollableContain from '../../Component/Bonus UI/Scrollable/index';

const Scrollables = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Scrollable" />
        </div>
        <ScrollableContain />
      </Fragment>
    );
};

export default Scrollables;
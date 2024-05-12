import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';

import StickyContain from '../../Component/Bonus UI/Sticky';

const Sticky = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Sticky" />
      </div>
      <StickyContain />
    </Fragment>
  );
};

export default Sticky;
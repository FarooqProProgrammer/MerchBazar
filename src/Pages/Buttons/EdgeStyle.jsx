import { Breadcrumbs } from '../../AbstractElements';
import EdgeButtonContain from '../../Component/Buttons/Edge';
import React, { Fragment } from 'react';

const EdgeStyle = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Button" title="Edge Style" />
        </div>
        <EdgeButtonContain />
      </Fragment>
    );
};
export default EdgeStyle;
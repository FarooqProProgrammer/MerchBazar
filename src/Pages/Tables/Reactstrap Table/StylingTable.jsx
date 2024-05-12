import { Breadcrumbs } from '../../../AbstractElements';
import StylingTableContain from '../../../Component/Tables/Reactstrap/StylingTable';
import React, { Fragment } from 'react';

const StylingTable = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Tables" title="Styling Table" />
        </div>
        <StylingTableContain />
      </Fragment>
    );
};
export default StylingTable;
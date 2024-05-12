import { Breadcrumbs } from '../../../AbstractElements';
import SizingTableContain from '../../../Component/Tables/Reactstrap/SizingTable';
import React, { Fragment } from 'react';

const SizingTable = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Tables" title="Sizing Table" />
        </div>
        <SizingTableContain />
      </Fragment>
    );
};
export default SizingTable;
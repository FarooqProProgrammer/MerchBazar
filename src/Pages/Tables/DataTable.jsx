import { Breadcrumbs } from '../../AbstractElements';
import DataTablesContain from '../../Component/Tables/DataTable';
import React, { Fragment } from 'react';

const DataTable = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Tables" title="Data Tables" />
        </div>
        <DataTablesContain />
      </Fragment>
    );
};
export default DataTable;
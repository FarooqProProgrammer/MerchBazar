import { Breadcrumbs } from '../../../AbstractElements';
import BasicTablesContain from '../../../Component/Tables/Reactstrap/BasicTable';
import React, { Fragment } from 'react';

const BasicTable = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Tables" title="Basic Table" />
        </div>
        <BasicTablesContain />
      </Fragment>
    );
};
export default BasicTable;
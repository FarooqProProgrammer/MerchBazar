import { Breadcrumbs } from '../../../AbstractElements';
import BorderTableContain from '../../../Component/Tables/Reactstrap/BorderTable';
import React, { Fragment } from 'react';

const BorderTable = () => {
    return (
      <Fragment>
        <div className="page-header dash-breadcrumb">
          <Breadcrumbs parent="Tables" title="Border Table" />
        </div>
        <BorderTableContain />
      </Fragment>
    );
};
export default BorderTable;
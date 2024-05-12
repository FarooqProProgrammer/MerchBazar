import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import PaginationsContain from '../../Component/Bonus UI/Pagination';

const Pagination = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Bonus UI" title="Pagination" />
      </div>
      <PaginationsContain />
    </Fragment>
  );
};

export default Pagination;
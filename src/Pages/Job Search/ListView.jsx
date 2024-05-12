import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import ListViewContain from '../../Component/JobSearch/ListView';
import React, { Fragment } from 'react';

const ListView = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Job Search" title="List View" />
        </div>
        <ListViewContain />
      </Fragment>
    );
};
export default ListView;
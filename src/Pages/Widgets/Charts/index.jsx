import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import ChartsContain from '../../../Component/Widgets/ChartsWidgets';
import React, { Fragment } from 'react';

const Charts = () => {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="page-header dash-breadcrumb">
            <div className="row">
              <Breadcrumbs parent="Widgets" title="Charts" />
            </div>
          </div>
        </div>
        <ChartsContain />
      </Fragment>
    );
};
export default Charts;
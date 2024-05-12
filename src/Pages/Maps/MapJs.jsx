import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import MapJsContain from '../../Component/Maps/Map Js';
import React, { Fragment } from 'react';

const MapJs = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Map" title="Map Js" />
        </div>
        <MapJsContain />
      </Fragment>
    );
};
export default MapJs;
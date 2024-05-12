import { Breadcrumbs } from '../../AbstractElements';
import FlatButtonContain from '../../Component/Buttons/FlatBtn';
import React, { Fragment } from 'react';

const FlatStyle = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Button" title="Flat Style" />
        </div>
        <FlatButtonContain />
      </Fragment>
    );
};
export default FlatStyle;
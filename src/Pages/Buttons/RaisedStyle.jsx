import { Breadcrumbs } from '../../AbstractElements';
import RaisedButtonContain from '../../Component/Buttons/RaisedBtn';
import React, { Fragment } from 'react';

const RaisedStyle = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Button" title="Raised Style" />
        </div>
        <RaisedButtonContain />
      </Fragment>
    );
};
export default RaisedStyle;
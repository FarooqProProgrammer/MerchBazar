import { Breadcrumbs } from '../../AbstractElements';
import DefaultButtonContain from '../../Component/Buttons/Default';
import React, { Fragment } from 'react';

const DefaultStyle = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Button" title="Default Style" />
        </div>
        <DefaultButtonContain />
      </Fragment>
    );
};
export default DefaultStyle;
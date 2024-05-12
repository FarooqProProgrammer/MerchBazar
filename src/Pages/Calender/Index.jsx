import { Breadcrumbs } from '../../AbstractElements';
import CalenderContain from '../../Component/Calender/Index';
import React from 'react';
import { Fragment } from 'react';

const Calender = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Calender" title="Calender" />
        </div>
        <CalenderContain />
      </Fragment>
    );
};
export default Calender;
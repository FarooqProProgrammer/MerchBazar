import { Breadcrumbs } from '../../AbstractElements';
import LearningListContain from '../../Component/Learning/LearningList';
import React, { Fragment } from 'react';

const LearningList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs mainTitle="Learning List" parent="Learning" title="Learning List" />
        </div>
        <LearningListContain />
      </Fragment>
    );
};
export default LearningList;
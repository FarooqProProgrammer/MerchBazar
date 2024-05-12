import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BasicCardContain from '../../Component/Bonus UI/Cards/BasicCards/index';

const BasicCard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Basic Card" />
        </div>
        <BasicCardContain />
      </Fragment>
    );
};

export default BasicCard;
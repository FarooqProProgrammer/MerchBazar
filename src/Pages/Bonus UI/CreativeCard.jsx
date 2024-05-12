import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CreativeCardContain from '../../Component/Bonus UI/Cards/CreativeCards/index';

const CreativeCard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Creative Card" />
        </div>
        <CreativeCardContain />
      </Fragment>
    );
};

export default CreativeCard;
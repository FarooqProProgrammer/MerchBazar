import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import TabCardContain from '../../Component/Bonus UI/Cards/TabCard';

const TabCard = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Tab Card" />
        </div>
        <TabCardContain />
      </Fragment>
    );
};

export default TabCard;
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import CarouselsContain from '../../Component/Bonus UI/Carousel';

const Carousel = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bonus UI" title="Carousel" />
        </div>
        <CarouselsContain />
      </Fragment>
    );
};

export default Carousel;
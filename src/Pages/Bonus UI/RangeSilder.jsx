import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RangeSliderContain from '../../Component/Bonus UI/RangeSlider';

const RangeSlider = () => {
    return (
        <Fragment>
            <div className=" page-header dash-breadcrumb">
                <Breadcrumbs parent="Bonus UI" title="Range Slider" />
            </div>
            <RangeSliderContain />
        </Fragment>
    );
};

export default RangeSlider;
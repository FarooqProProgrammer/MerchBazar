import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import RibbonsContain from '../../Component/Bonus UI/Ribbons';

const Ribbons = () => {
    return (
        <Fragment>
            <div className=" page-header dash-breadcrumb">
                <Breadcrumbs parent="Bonus UI" title="Ribbon" />
            </div>
            <RibbonsContain />
        </Fragment>
    );
};

export default Ribbons;
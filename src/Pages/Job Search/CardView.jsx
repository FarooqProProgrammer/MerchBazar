import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import JobCardsContain from '../../Component/JobSearch/JobCardView';
import React, { Fragment } from 'react';

const CardView = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Job Search" title=" Card View" />
        </div>
        <JobCardsContain />
      </Fragment>
    );
};
export default CardView;
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import JobDetailsContain from '../../Component/JobSearch/JobDetail';
import React, { Fragment } from 'react';

const JobDetails = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Job Search" title=" Job Details" />
        </div>
        <JobDetailsContain />
      </Fragment>
    );
};
export default JobDetails;
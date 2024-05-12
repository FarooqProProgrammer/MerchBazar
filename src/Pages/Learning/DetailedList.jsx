import { Breadcrumbs } from '../../AbstractElements';
import DetailCourseContain from '../../Component/Learning/DetailCourse';
import React, { Fragment } from 'react';

const DetailedList = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs mainTitle="Detailed Course" parent="Learning" title="Detailed Course" />
        </div>
        <DetailCourseContain />
      </Fragment>
    );
};
export default DetailedList;
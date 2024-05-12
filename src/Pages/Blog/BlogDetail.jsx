import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogDetailContain from '../../Component/Blog/BlogDetail';

const BlogDetail = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs mainTitle="Blog Details" parent="Blog" title="Blog Details" />
      </div>
      <BlogDetailContain />
    </Fragment>
  );
};

export default BlogDetail;
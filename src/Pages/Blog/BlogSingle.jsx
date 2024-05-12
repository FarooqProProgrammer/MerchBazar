import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogSingleContain from '../../Component/Blog/BlogSingle';

const BlogSingle = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs parent="Blog" title="Blog Single" />
      </div>
      <BlogSingleContain />
    </Fragment>
  );
};

export default BlogSingle;
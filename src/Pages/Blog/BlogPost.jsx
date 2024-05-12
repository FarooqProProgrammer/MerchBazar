import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import BlogPostContain from '../../Component/Blog/BlogPost';

const BlogPost = () => {
  return (
    <Fragment>
      <div className=" page-header dash-breadcrumb">
        <Breadcrumbs mainTitle="Add Post" parent="Blog" title="Add Post" />
      </div>
      <BlogPostContain />
    </Fragment>
  );
};

export default BlogPost;
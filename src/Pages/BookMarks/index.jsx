import { Breadcrumbs } from '../../AbstractElements';
import BookmarksContain from '../../Component/BookMarks';
import React, { Fragment } from 'react';

const Bookmarks = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Bookmarks" title=" Bookmarks" />
        </div>
        <BookmarksContain />
      </Fragment>
    );
};
export default Bookmarks;
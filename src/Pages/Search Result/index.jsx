import { Breadcrumbs } from '../../AbstractElements';
import SearchResultContain from '../../Component/Search Result';
import React from 'react';
import { Fragment } from 'react';

const SearchResult = () => {
    return (
      <Fragment>
        <div className=" page-header dash-breadcrumb">
          <Breadcrumbs parent="Search Result" title="Search Result" />
        </div>
        <SearchResultContain />
      </Fragment>
    );
};
export default SearchResult;